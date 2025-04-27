import { css } from 'styled-system/css';

function App() {
  return (
    <div
      className={css({
        fontSize: '14px',
        backgroundColor: 'red.200',
        fontWeight: 'semi-bold',
        color: 'grayscale.disabled',
      })}
    >
      Hello 🐼!
    </div>
  );
}

export default App;
