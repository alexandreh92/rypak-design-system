import { Modal } from '@rypak/ui';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div onClick={() => setVisible((oldState) => !oldState)}>
      Welcome to Sandbox!
      {visible && <Modal>pistolinha</Modal>}
    </div>
  );
}

export default App;
