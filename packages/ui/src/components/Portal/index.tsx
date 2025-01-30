import { forwardRef, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  /**
   * The container where the portal content should be rendered.
   *
   * - `Element`: A DOM element where the portal should be attached (e.g., a specific div).
   * - `DocumentFragment`: A lightweight container that is not part of the DOM tree, useful for off-DOM operations.
   * - `undefined` | `null`: Can be used to specify no container or dynamically define one.
   */
  container: Element | DocumentFragment | undefined | null;
}

const Portal = forwardRef<HTMLDivElement, PortalProps>(
  ({ container, ...rest }, ref) => {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
      setIsMounted(true);
    }, []);

    const actualMountNode = container || (isMounted && document.body);

    if (!actualMountNode) return null;

    return createPortal(<div {...rest} ref={ref} />, actualMountNode);
  }
);

Portal.displayName = 'Portal';
