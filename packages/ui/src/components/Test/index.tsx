import { css } from 'styled-system/css';

function App() {
  return (
    <div
      className={css({
        fontSize: '2xl',
        backgroundColor: 'blue.50',
        fontWeight: 'bold',
      })}
    >
      Hello 🐼!
    </div>
  );
}

export default App;
