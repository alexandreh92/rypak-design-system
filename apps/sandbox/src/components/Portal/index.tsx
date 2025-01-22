import {
  ReactNode,
  cloneElement,
  ReactElement,
  HTMLProps,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';

import PortalEngine from './PortalEngine';

import type { PortalEngineProps } from './PortalEngine';

interface SharedPortalProps extends PortalEngineProps {
  children: ReactNode;
}

interface TriggerablePortalProps extends SharedPortalProps {
  isOpen?: never;
  trigger?: ReactElement<HTMLProps<HTMLElement>>;
}

interface ControlledPortalProps extends SharedPortalProps {
  isOpen?: boolean;
  trigger?: never;
}

export type PortalProps = TriggerablePortalProps | ControlledPortalProps;

export interface PortalHandles {
  toggle: () => void;
}

const Portal = forwardRef<PortalHandles, PortalProps>(
  ({ isOpen, children, ...props }, ref) => {
    const [internalOpen, setInternalOpen] = useState(isOpen);
    const isControlled = isOpen !== undefined && isOpen;

    const openState = isControlled ? isOpen : internalOpen;
    console.log({ isControlled, isOpen, internalOpen });

    const handleToggle = useCallback(() => {
      if (isControlled) return;

      setInternalOpen((oldState) => !oldState);
    }, [isControlled]);

    const handleTriggerClick: React.MouseEventHandler<any> = useCallback(
      (e) => {
        if (isControlled) return;
        if (props.trigger?.props?.onClick) props.trigger.props.onClick(e);

        setInternalOpen((oldState) => !oldState);
      },
      [isControlled, props.trigger]
    );

    useImperativeHandle(
      ref,
      () => ({
        toggle: handleToggle,
      }),
      []
    );

    return (
      <>
        {openState && <PortalEngine {...props}>{children}</PortalEngine>}
        {!isControlled &&
          props.trigger &&
          cloneElement(props.trigger, {
            onClick: handleTriggerClick,
          })}
      </>
    );
  }
);

Portal.displayName = 'Portal';

export default Portal;
