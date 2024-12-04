import { createElement, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// const defaultConfig = {
//   mountNode: document.body,
//   shouldPersistNode: false,
// };

// type UsePortalContainerConfigProps = typeof defaultConfig;

// const createTestElement = (id: string) => {
//   const element = document.createElement('div');
//   element.setAttribute('id', id);
//   return element;
// };

// export function usePortalContainer(
//   id: string,
//   config: UsePortalContainerConfigProps
// ) {
//   const { shouldPersistNode } = { ...defaultConfig, ...config };

//   const nodeRef = useRef(document.getElementById(id) || createTestElement(id));

//   useEffect(() => {
//     if (!document.getElementById(id)) {
//       nodeRef.current = createTestElement(id);
//     }

//     return () => {
//       if (!shouldPersistNode) nodeRef.current.remove();
//     };
//   }, [id, shouldPersistNode]);

//   return nodeRef.current;
// }

interface PortalProps {
  children: React.ReactNode;
  containerId: string;
  mountNode?: HTMLElement;
}

export const Portal = ({
  children,
  containerId,
  mountNode = document.body,
}: PortalProps): React.ReactPortal => {
  return createPortal(
    createElement('div', { id: containerId }, children),
    mountNode
  );
};
