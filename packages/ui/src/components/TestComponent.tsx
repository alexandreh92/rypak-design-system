export interface TestComponentProps {
  foo: string;
  bar: string;
}

export default function TestComponent({ ...props }: TestComponentProps) {
  return <div>fasffas</div>;
}
