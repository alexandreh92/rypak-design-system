import type { PortalRootProps } from './Root';
import type { ReactElement, MouseEvent, ReactNode, HTMLProps } from 'react';

import { cloneElement, useCallback } from 'react';

import PortalRoot from './Root';

/**
 * Props for the Portal component.
 * Extends PortalRootProps which contains properties for portal positioning and behavior.
 */
interface PortalProps extends PortalRootProps {
  /** Content to be rendered inside the portal */
  children: ReactNode;

  /** Controls whether the portal content is visible */
  isOpen?: boolean;

  /** Callback function triggered when the portal closes */
  onClose?: (e: MouseEvent<HTMLElement>) => void;

  /** Callback function triggered when the portal opens */
  onOpen?: (e: MouseEvent<HTMLElement>) => void;

  /** Element that triggers the portal to open/close when clicked */
  trigger?: ReactElement<HTMLProps<HTMLElement>>;
}

/**
 * A component that renders content in a portal, allowing it to visually "break out"
 * of its parent container in the DOM hierarchy.
 *
 * Portal can be controlled via the isOpen prop or through an optional trigger element
 * that toggles the portal when clicked.
 */
export default function Portal({
  children,
  isOpen,
  onClose,
  onOpen,
  trigger,
  ...rest
}: PortalProps) {
  const handleOnTriggerClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const callback = isOpen ? onClose : onOpen;
      trigger?.props?.onClick?.(e);
      callback?.(e);
    },
    [isOpen, onClose, onOpen, trigger],
  );

  return (
    <>
      {isOpen && <PortalRoot {...rest}>{children}</PortalRoot>}
      {trigger && cloneElement(trigger, { onClick: handleOnTriggerClick })}
    </>
  );
}
