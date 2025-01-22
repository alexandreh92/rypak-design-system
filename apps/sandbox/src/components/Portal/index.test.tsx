import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render } from 'test-utils';
import { screen as rtlScreen } from '@testing-library/react';

import Portal from '.';

describe('Portal', () => {
  it('Renders Portal', async () => {
    render(
      <Portal id="test-div-id" isOpen>
        something inside the portal
      </Portal>
    );

    expect(screen.getById(/test-div-id/i)).toBeInTheDocument();
  });

  it('renders children', async () => {
    render(
      <Portal id="test-div-id" isOpen>
        <div>some children</div>
      </Portal>
    );

    expect(screen.getByText(/some children/i)).toBeInTheDocument();
  });

  describe('when persistOnUnmount is false', () => {
    it('should remove the portal when isOpen is false', async () => {
      const CustomComponent = () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <>
            <Portal id="test-div-id" isOpen={isOpen}>
              <div>something inside</div>
            </Portal>
            <button
              type="button"
              onClick={() => setIsOpen((oldState) => !oldState)}
            >
              toggle
            </button>
          </>
        );
      };

      render(<CustomComponent />);

      await userEvent.click(screen.getByRole('button', { name: /toggle/i }));
      await userEvent.click(screen.getByRole('button', { name: /toggle/i }));

      expect(screen.queryById(/test-div-id/i)).not.toBeInTheDocument();
    });
  });

  describe('when persistOnUnmount is true', () => {
    it('should not remove the portal when isOpen is false', async () => {
      const CustomComponent = () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <>
            <Portal id="test-div-id" isOpen={isOpen} persistOnUnmount>
              <div>something inside</div>
            </Portal>
            <button
              type="button"
              onClick={() => setIsOpen((oldState) => !oldState)}
            >
              toggle
            </button>
          </>
        );
      };

      render(<CustomComponent />);

      await userEvent.click(screen.getByRole('button', { name: /toggle/i }));
      await userEvent.click(screen.getByRole('button', { name: /toggle/i }));

      expect(screen.getById(/test-div-id/i)).toBeInTheDocument();
    });
  });
});
