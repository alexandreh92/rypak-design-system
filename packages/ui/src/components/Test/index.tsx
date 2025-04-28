import { css, cx } from 'styled-system/css';

function App({ ...rest }) {
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
      Hello 🐼!
    </div>
  );
}

export default App;
