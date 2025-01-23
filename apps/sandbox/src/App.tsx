import Composable from './examples/Composable';
import ComposableWithTrigger from './examples/ComposableWithTrigger';
import ControlledShorthand from './examples/ControlledShorthand';
import UncontrolledShorthand from './examples/UncontrolledShorthand';
import './styles.css';

export default function App() {
  return (
    <div>
      Controlled Shorthand:
      <br />
      <ControlledShorthand />
      <br />
      <br />
      Uncontrolled Shorthand:
      <UncontrolledShorthand />
      <br />
      <br />
      Composable:
      <Composable />
      <br />
      <br />
      Composable with Trigger:
      <ComposableWithTrigger />
    </div>
  );
}
