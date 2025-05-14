import { css, cx } from 'styled-system/css';

export interface AppsProps {
  /** Main content for the component */
  something: string;
  /** Optional class name for custom styling */
  className?: string;
}

function App({ something, ...rest }: AppsProps) {
  const { className, ...props } = rest;
  return (
    <div
      className={cx(
        className,
        css({
          fontSize: '14px',
          backgroundColor: 'red.200',
          fontWeight: 'semi-bold',
          color: 'grayscale.disabled',
        }),
      )}
      {...props}
    >
      Hello 🐼! Hehefssss
    </div>
  );
}

export default App;
