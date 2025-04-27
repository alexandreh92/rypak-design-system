import { Modal } from '@rypak/ui';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      Welcome to Sandbox!
      <button type="button" onClick={() => setVisible((oldState) => !oldState)}>
        toggle
      </button>
      <Modal visible={visible} containerId="test">
        controlled
      </Modal>
      <div>
        default visible:
        <Modal visible containerId="test1">
          default visible content
        </Modal>
      </div>
      <div>
        with trigger
        <Modal
          containerId="test2"
          trigger={<button type="button">hello</button>}
        >
          trigger content
        </Modal>
      </div>
    </div>
  );
}

export default App;
