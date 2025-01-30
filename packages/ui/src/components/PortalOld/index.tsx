import {
  cloneElement,
  createElement,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { useUpdateEffect } from 'react-use';
import type { HTMLProps, ReactElement } from 'react';

interface PortalRootProps extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {
  children: React.ReactNode;
  containerId: string;
  mountNode?: HTMLElement;
}

const PortalRoot = ({
  children,
  containerId,
  mountNode = document.body,
}: PortalRootProps): React.ReactPortal => {
  return createPortal(
    createElement('div', { id: containerId }, children),
    mountNode
  );
};

interface TriggerProps {
  onClick: () => void;
}

export interface PortalProps extends PortalRootProps {
  visible?: boolean;
  defaultVisible?: boolean;
  trigger?: ReactElement<TriggerProps>;
}

export interface PortalHandleProps {
  toggle: () => void;
}

export const Portal = forwardRef<PortalHandleProps, PortalProps>(
  ({ visible, children, trigger, ...rest }, ref) => {
    const [isVisible, setIsVisible] = useState(visible);

    const toggle = useCallback(() => {
      setIsVisible((oldState) => !oldState);
    }, []);

    useUpdateEffect(() => {
      setIsVisible(visible);
    }, [visible]);

    useImperativeHandle(
      ref,
      () => ({
        toggle,
      }),
      [toggle]
    );

    return (
      <>
        {isVisible && <PortalRoot {...rest}>{children}</PortalRoot>}
        {trigger && cloneElement(trigger, { onClick: toggle })}
      </>
    );
  }
);

Portal.displayName = 'Portal';
