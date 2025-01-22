import { RefObject, useEffect, useCallback, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface SharedPortalEngineProps {
  children: ReactNode;
}

interface AutomaticPortalEngineProps extends SharedPortalEngineProps {
  target?: never;
  id: string;
  persistOnUnmount: boolean;
}

interface TargetedPortalEngineProps extends SharedPortalEngineProps {
  target: HTMLElement | RefObject<HTMLElement>;
}

export type PortalEngineProps =
  | AutomaticPortalEngineProps
  | TargetedPortalEngineProps;

export default function PortalEngine({ ...props }: PortalEngineProps) {
  const createdNodeRef = useRef<HTMLElement | null>(null);

  const createNode = useCallback(() => {
    if (props.target) return;
    if (!props.id) return;

    const existingNode = document.getElementById(props.id);
    if (existingNode) {
      createdNodeRef.current = existingNode;
    } else {
      const newNode = document.createElement('div');
      newNode.id = props.id;
      document.body.appendChild(newNode);
      createdNodeRef.current = newNode;
    }

    return () => {
      if (!props.target && !props.persistOnUnmount && createdNodeRef.current) {
        createdNodeRef.current?.remove();
        createdNodeRef.current = null;
      }
    };
  }, [props]);

  useEffect(() => {
    const remove = createNode();

    return () => remove?.();
  }, [createNode]);

  const getTargetElement = useCallback(() => {
    if (props.target instanceof HTMLElement) return props.target;
    if (props.target && 'current' in props.target) return props.target.current;
    if (createdNodeRef.current) return createdNodeRef.current;
  }, []);

  const targetElement = getTargetElement();

  return targetElement ? createPortal(props.children, targetElement) : null;
}
