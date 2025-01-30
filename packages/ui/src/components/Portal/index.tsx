import type { RefObject } from 'react';

import {
  forwardRef,
  useLayoutEffect,
  useState,
  cloneElement,
  Children,
  useMemo,
} from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  /**
   * An optional container where the portal content should be rendered.
   *
   * - `Element`: A DOM element where the portal should be attached (e.g., a specific div).
   * - `DocumentFragment`: A lightweight container that is not part of the DOM tree, useful for off-DOM operations.
   * - `undefined` | `null`: Defaults to document body.
   */
  container?: HTMLElement | RefObject<HTMLElement> | null;
  children: React.ReactElement;
}

const Portal = forwardRef<HTMLDivElement, PortalProps>(
  ({ container, children }, ref) => {
    const [isMounted, setIsMounted] = useState(false);

    const actualMountNode = useMemo(() => {
      if (!isMounted) return null;
      if (!container) return document.body;
      if (container instanceof HTMLElement) return container;
      if (container.current) return container.current;

      return null;
    }, [container, isMounted]);

    useLayoutEffect(() => {
      setIsMounted(true);
    }, []);

    if (!actualMountNode) return null;

    return createPortal(
      cloneElement(Children.only(children), { ref }),
      actualMountNode
    );
  }
);

Portal.displayName = 'Portal';

export default Portal;
