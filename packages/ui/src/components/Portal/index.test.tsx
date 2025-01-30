import { useRef } from 'react';

import { render, screen, within } from 'test-utils';

import Portal from '.';

describe('Portal', () => {
  it('renders a portaled component inside the container', () => {
    render(
      <Portal>
        <p>Hi</p>
      </Portal>
    );

    expect(screen.getByText(/Hi/i)).toBeInTheDocument();
  });

  describe('when passing a custom container', () => {
    it('enders children inside the custom container when passing a ref object', () => {
      const CustomComponent = () => {
        const ref = useRef<HTMLDivElement>(null);

        return (
          <>
            <div id="custom-container" ref={ref} />
            <Portal container={ref}>
              <p>This is a test</p>
            </Portal>
          </>
        );
      };

      render(<CustomComponent />);

      const customContainer = screen.getById('custom-container');

      screen.debug(undefined, Infinity);

      expect(
        within(customContainer).getByText(/This is a test/i)
      ).toBeInTheDocument();
    });

    it('renders children inside the custom container when passing a HTMLElement', () => {
      const existingDomElement = document.createElement('div');
      existingDomElement.id = 'custom-container';
      document.body.appendChild(existingDomElement);

      const CustomComponent = () => {
        return (
          <Portal container={existingDomElement}>
            <p>This is a test</p>
          </Portal>
        );
      };

      render(<CustomComponent />);

      const customContainer = screen.getById('custom-container');

      expect(
        within(customContainer).getByText(/This is a test/i)
      ).toBeInTheDocument();
    });
  });

  describe('when rendering multiple portals', () => {
    it('renders multiple portals without affecting each other', () => {
      render(
        <>
          <Portal>
            <div id="first-portal">first</div>
          </Portal>
          <Portal>
            <p id="second-portal">second</p>
          </Portal>
        </>
      );

      const firstPortal = screen.getById('first-portal');
      const secondPortal = screen.getById('second-portal');

      expect(within(firstPortal).getByText(/first/i)).toBeInTheDocument();
      expect(within(secondPortal).getByText(/second/i)).toBeInTheDocument();
    });
  });
});
