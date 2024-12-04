import {
  cloneElement,
  createElement,
  forwardRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import type { HTMLProps, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { useControlledVisibility } from '../../hooks/useControlledVisibility';
import type { UseControlledVisibilityProps } from '../../hooks/useControlledVisibility';

interface PortalRootProps extends HTMLProps<HTMLDivElement> {
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

export interface PortalProps
  extends PortalRootProps,
    Pick<UseControlledVisibilityProps, 'visible'> {
  visible?: boolean;
  defaultVisible?: boolean;
  onVisibilityChange?: (visible: boolean) => void;
  trigger?: ReactElement<TriggerProps>;
}

export const Portal = forwardRef(
  (
    { visible, onVisibilityChange, children, trigger, ...rest }: PortalProps,
    ref
  ) => {
    const [isVisible, setIsVisible] = useControlledVisibility({
      visible,
      onChange: onVisibilityChange,
    });

    const close = useCallback(() => {
      setIsVisible(false);
    }, [setIsVisible]);

    const open = useCallback(() => {
      setIsVisible(true);
    }, [setIsVisible]);

    useImperativeHandle(
      ref,
      () => ({
        open,
        close,
      }),
      [open, close]
    );

    return (
      <>
        {isVisible && <PortalRoot {...rest}>{children}</PortalRoot>}
        {trigger && cloneElement(trigger, { onClick: open })}
      </>
    );
  }
);

Portal.displayName = 'Portal';
