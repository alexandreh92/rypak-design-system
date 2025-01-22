import {
  RefObject,
  useEffect,
  useCallback,
  useRef,
  ReactNode,
  useState,
  useMemo,
} from 'react';
import { createPortal } from 'react-dom';

export interface PortalEngineProps {
  id?: string;
  mountNode?: HTMLElement | RefObject<HTMLElement>;
  children: ReactNode;
  persistOnUnmount?: boolean;
}

const createNode = (id: string, mountNode: HTMLElement | null) => {
  if (!mountNode) return null;
  if (!id) return null;

  const existingNode = document.getElementById(id);
  if (existingNode) return existingNode;

  const newNode = document.createElement('div');
  newNode.setAttribute('id', id);
  return mountNode.appendChild(newNode);
};

export default function PortalEngine({
  id = 'portal-container',
  mountNode = document.body,
  persistOnUnmount,
  children,
  ...props
}: PortalEngineProps) {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    document.getElementById(id)
  );

  const actualMountNode = useMemo(() => {
    if (mountNode instanceof HTMLElement) return mountNode;
    if (mountNode && 'current' in mountNode) return mountNode.current;

    return null;
  }, [mountNode]);

  useEffect(() => {
    const container = createNode(id, actualMountNode);
    setPortalContainer(container);

    return () => {
      // if (container && !persistOnUnmount) container.remove();
    };
  }, [id, actualMountNode, persistOnUnmount]);

  if (!portalContainer) return null;

  return createPortal(children, portalContainer);
}
