import { useRef, useState } from 'react';

import { render, screen, within, userEvent } from 'test-utils';

import Portal from '.';

describe('Portal', () => {
  it('renders a portaled component inside the container', () => {
    render(
      <Portal>
        <p>Hi</p>
      </Portal>,
    );

    expect(screen.getByText(/Hi/i)).toBeInTheDocument();
  });

  describe('when container is not passed', () => {
    it('renders portal at documents.body', () => {
      render(
        <Portal id="portal-container">
          <p>Hi</p>
        </Portal>,
      );

      const container = screen.getById('portal-container');

      expect(container.parentElement).toBe(document.body);
    });
  });

  describe('when passing a custom mountNode', () => {
    it('renders children inside the custom container when passing a ref object', async () => {
      const CustomComponent = () => {
        const ref = useRef<HTMLDivElement>(null);

        return (
          <>
            <div id="custom-container" ref={ref} />
            <Portal id="portal-container" mountNode={ref}>
              <p>This is a test</p>
            </Portal>
          </>
        );
      };

      render(<CustomComponent />);

      const portalWrapper = screen.getById('portal-container');
      const customContainer = screen.getById('custom-container');

      expect(
        within(customContainer).getByText(/This is a test/i),
      ).toBeInTheDocument();
      expect(screen.getByText(/This is a test/i).parentElement).toBe(
        portalWrapper,
      );
      expect(portalWrapper.parentElement).toBe(customContainer);
    });

    it('renders children inside the custom container when passing a HTMLElement', () => {
      const existingDomElement = document.createElement('div');
      existingDomElement.id = 'custom-container';
      document.body.appendChild(existingDomElement);

      const CustomComponent = () => {
        return (
          <Portal id="portal-container" mountNode={existingDomElement}>
            <p>This is a test</p>
          </Portal>
        );
      };

      render(<CustomComponent />);

      const portalWrapper = screen.getById('portal-container');
      const customContainer = screen.getById('custom-container');

      expect(
        within(customContainer).getByText(/This is a test/i),
      ).toBeInTheDocument();
      expect(screen.getByText(/This is a test/i).parentElement).toBe(
        portalWrapper,
      );
      expect(portalWrapper.parentElement).toBe(customContainer);

      existingDomElement.remove();
    });
  });

  describe('when rendering multiple portals', () => {
    it('renders multiple portals without affecting each other', () => {
      render(
        <>
          <Portal id="portal">
            <div id="first-portal">first</div>
          </Portal>
          <Portal id="portal">
            <p id="second-portal">second</p>
          </Portal>
        </>,
      );

      const firstPortal = screen.getById('first-portal');
      const secondPortal = screen.getById('second-portal');

      expect(within(firstPortal).getByText(/first/i)).toBeInTheDocument();
      expect(within(secondPortal).getByText(/second/i)).toBeInTheDocument();
    });
  });

  describe('when unmounting', () => {
    const MyComponent = ({
      persistOnUnmount,
    }: {
      persistOnUnmount: boolean;
    }) => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>Toggle</button>
          {isOpen && (
            <Portal id="portal-container" persistOnUnmount={persistOnUnmount}>
              <div>Content</div>
            </Portal>
          )}
        </>
      );
    };

    describe('when `persistOnUnmount` is true', () => {
      it('keeps portal wrapper after unmount', async () => {
        const user = userEvent.setup();
        render(<MyComponent persistOnUnmount />);

        expect(screen.queryByText(/content/i)).not.toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: /toggle/i }));

        expect(screen.queryByText(/content/i)).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: /toggle/i }));

        expect(screen.queryByText(/content/i)).not.toBeInTheDocument();
        expect(screen.queryById('portal-container')).toBeInTheDocument();
      });
    });

    describe('when `persistOnUnmount` is false', async () => {
      it('keeps removes portal wrapper on unmount', async () => {
        const user = userEvent.setup();
        render(<MyComponent persistOnUnmount={false} />);

        expect(screen.queryByText(/content/i)).not.toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: /toggle/i }));

        expect(screen.queryByText(/content/i)).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: /toggle/i }));

        expect(screen.queryByText(/content/i)).not.toBeInTheDocument();
        expect(screen.queryById('portal-container')).not.toBeInTheDocument();
      });
    });
  });
});
