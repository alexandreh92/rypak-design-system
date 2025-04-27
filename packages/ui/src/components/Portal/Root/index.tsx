import type { RefObject } from 'react';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { v4 as uuidv4 } from 'uuid';

/**
 * Props for the Portal component.
 */
export interface PortalRootProps {
  /**
   * The content to be rendered inside the portal.
   * Must be a single React element (not fragments, strings, numbers, etc).
   */
  children: React.ReactNode;

  /**
   * Optional unique identifier for the portal container.
   * If not provided, a UUID will be generated.
   */
  id?: string;

  /**
   * An optional container where the portal content should be rendered.
   *
   * - `Element`: A DOM element where the portal should be attached (e.g., a specific div).
   * - `DocumentFragment`: A lightweight container that is not part of the DOM tree, useful for off-DOM operations.
   * - `undefined` | `null`: Defaults to document body.
   */
  mountNode?: HTMLElement | RefObject<HTMLElement> | null;

  /**
   * If true, the portal element will not be removed from the DOM when the
   * component unmounts. Useful when you want the portal to persist.
   */
  persistOnUnmount?: boolean;
}

/**
 * Resolves the mount node to an actual DOM element that can be used for appending.
 * Handles both direct element references and React refs.
 *
 * @param mountNode - The node to resolve (Element, RefObject, or null)
 * @returns The resolved DOM element or null/undefined
 */
const handleMountNode = (mountNode: PortalRootProps['mountNode']) => {
  if (mountNode instanceof HTMLElement) return mountNode;
  if (mountNode && 'current' in mountNode) return mountNode.current;
  return mountNode;
};

/**
 * Props for the findOrCreateWrapper function.
 */
type FindOrCreateWrapperProps = Required<
  Pick<PortalRootProps, 'id' | 'mountNode'>
>;

/**
 * Finds an existing portal container element by ID or creates a new one if not found.
 *
 * @param id - The unique ID to use for finding/creating the container element
 * @param mountNode - The parent node where the container should be appended if created
 * @returns The existing or newly created element, or undefined if the mount node is invalid
 */
const findOrCreateWrapper = ({ id, mountNode }: FindOrCreateWrapperProps) => {
  const existingElement = document.getElementById(id);
  if (existingElement) return existingElement;

  const element = document.createElement('div');
  element.setAttribute('id', id);
  const realMountNode = handleMountNode(mountNode);
  if (!realMountNode) return undefined;

  realMountNode.appendChild(element);
  return element;
};

/**
 * Portal component that renders its children into a separate DOM node.
 * Useful for rendering content that should appear above other elements
 * (like modals, tooltips, dialogs, etc).
 */
const PortalRoot = ({
  id = uuidv4(),
  mountNode = document.body,
  children,
  persistOnUnmount,
}: PortalRootProps) => {
  const [portalContainer, setPortalContainer] = useState(
    findOrCreateWrapper({ mountNode, id }),
  );

  useEffect(() => {
    if (document.getElementById(id)) return;

    const container = findOrCreateWrapper({ mountNode, id });

    setPortalContainer(container);
  }, [id, mountNode]);

  const remove = useCallback(() => {
    if (persistOnUnmount || !portalContainer) return;

    portalContainer.remove();
  }, [persistOnUnmount, portalContainer]);

  useEffect(() => {
    return remove;
  }, [remove]);

  if (!portalContainer) return null;

  return createPortal(children, portalContainer);
};
PortalRoot.displayName = 'Portal.Root';

export default PortalRoot;
