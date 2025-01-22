import { ReactNode } from 'react';

import PortalEngine from './PortalEngine';

import type { PortalEngineProps } from './PortalEngine';

export type PortalProps = PortalEngineProps & {
  children: ReactNode;
  isOpen?: boolean;
};

// By an abritrary decision, Portal will be always controlled (it could work in both ways
// but in the sake of this example, we will keep it controlled only)
export default function Portal({ isOpen, children, ...props }: PortalProps) {
  if (!isOpen) return null;

  return <PortalEngine {...props}>{children}</PortalEngine>;
}
