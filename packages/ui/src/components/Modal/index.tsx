import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { createNamedContext } from '../../utils/createNamedContext';
import Portal from '../Portal';

const NAME = 'Modal';

export interface ModalProviderProps {
  open?: boolean;
  portalRef?: React.RefObject<HTMLDivElement>;
  toggle?: () => void;
}

export interface ModalProps {
  open?: boolean | null;
  children: React.ReactNode;
  onOpen?: (nextState: boolean) => void;
  onClose?: (nextState: boolean) => void;
}

/**
 * Interface representing the handles for a Modal component.
 */
export interface ModalHandles {
  /**
   * Toggles the visibility of the modal.
   */
  toggle: () => void;
}

const [ModalProvider, useModalProvider] =
  createNamedContext<ModalProviderProps>(NAME);

const ModalRoot = forwardRef<ModalHandles, ModalProps>((props, ref) => {
  const { open: controlledOpen, onClose, onOpen } = props;

  const portalRef = useRef<HTMLDivElement>(null);

  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined && controlledOpen !== null;
  const open = isControlled ? controlledOpen : internalOpen;

  const toggleControlled = useCallback(() => {
    if (!isControlled) return;
    const nextState = !controlledOpen;

    if (controlledOpen) return onClose?.(nextState);
    return onOpen?.(nextState);
  }, [controlledOpen, isControlled, onClose, onOpen]);

  const toggle = useCallback(() => {
    if (isControlled) {
      toggleControlled();
      return;
    }
    setInternalOpen((oldState) => !oldState);
  }, [isControlled, toggleControlled]);

  useImperativeHandle(
    ref,
    () => ({
      toggle,
    }),
    [toggle]
  );

  return (
    <ModalProvider open={open} portalRef={portalRef} toggle={toggle}>
      {open && (
        <Portal ref={portalRef}>
          <div>hi</div>
        </Portal>
      )}
    </ModalProvider>
  );
});

ModalRoot.displayName = NAME;
