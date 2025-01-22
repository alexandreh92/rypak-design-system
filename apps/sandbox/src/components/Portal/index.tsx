import {
  ReactNode,
  cloneElement,
  ReactElement,
  HTMLProps,
  useState,
  useCallback,
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

export default function Portal({ isOpen, children, ...props }: PortalProps) {
  const [internalOpen, setInternalOpen] = useState(isOpen);
  const isControlled = isOpen !== undefined && !isOpen;

  const openState = isControlled ? isOpen : internalOpen;

  const handleTriggerClick: React.MouseEventHandler<any> = (e) => {
    console.log({ isControlled });
    if (isControlled) return;
    if (props.trigger?.props?.onClick) props.trigger.props.onClick(e);

    setInternalOpen((oldState) => !oldState);
  };

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

const Foo = () => {
  return (
    <Portal id="foo" trigger={<button type="button">my button</button>}>
      <>hi</>
    </Portal>
  );
};
