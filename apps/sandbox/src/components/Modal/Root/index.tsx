import Portal from '../../Portal';

import type { PortalProps } from '../../Portal';

export type ModalRootProps = PortalProps & {};

export default function Root({ children, ...props }: ModalRootProps) {
  return <Portal {...props}>{children}</Portal>;
}
