import { forwardRef } from 'react';
import Portal from '../../Portal';

import type { PortalProps, PortalHandles } from '../../Portal';

export type ModalRootProps = PortalProps & {};

const Root = forwardRef<PortalHandles, ModalRootProps>(
  ({ children, ...props }, ref) => {
    return (
      <Portal ref={ref} {...props}>
        {children}
      </Portal>
    );
  }
);

Root.displayName = 'Modal.Root';

export default Root;
