import { render, screen, userEvent } from 'test-utils';

import Portal from '.';

describe('Portal', () => {
  describe('when isOpen is true', () => {
    it('renders portal root', async () => {
      render(
        <Portal isOpen id="portal-container">
          this is a test
        </Portal>,
      );

      expect(screen.getById('portal-container')).toBeInTheDocument();
    });

    it('renders portal root children', async () => {
      render(
        <Portal isOpen id="portal-container">
          this is a test
        </Portal>,
      );

      expect(screen.getByText(/this is a test/i)).toBeInTheDocument();
    });
  });

  describe('when isOpen is false', () => {
    it('does not render portal root', async () => {
      render(<Portal id="portal-container">this is a test</Portal>);

      expect(screen.queryByText(/this is a test/i)).not.toBeInTheDocument();
    });
  });

  describe('when trigger is present', () => {
    it('renders trigger', async () => {
      render(
        <Portal
          trigger={<button type="button">trigger</button>}
          id="portal-container"
        >
          this is a test
        </Portal>,
      );

      expect(screen.getByText(/trigger/i)).toBeInTheDocument();
    });

    describe('when PortalRoot is not visible', () => {
      it('calls onOpen when trigger is clicked', async () => {
        const onOpen = vi.fn<() => void>();

        const user = userEvent.setup();
        render(
          <Portal
            trigger={<button type="button">trigger</button>}
            id="portal-container"
            onOpen={onOpen}
          >
            this is a test
          </Portal>,
        );

        await user.click(screen.getByText(/trigger/i));

        expect(onOpen).toHaveBeenCalledWith(
          expect.objectContaining({
            type: 'click',
          }),
        );
      });
    });

    describe('when PortalRoot is visible', () => {
      it('calls onClose when trigger is clicked', async () => {
        const onClose = vi.fn<() => void>();

        const user = userEvent.setup();
        render(
          <Portal
            trigger={<button type="button">trigger</button>}
            id="portal-container"
            onClose={onClose}
            isOpen
          >
            this is a test
          </Portal>,
        );

        await user.click(screen.getByText(/trigger/i));

        expect(onClose).toHaveBeenCalledWith(
          expect.objectContaining({
            type: 'click',
          }),
        );
      });
    });
  });
});
