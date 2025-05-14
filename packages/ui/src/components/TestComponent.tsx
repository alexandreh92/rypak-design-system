export interface TestComponentProps {
  foo: string;
  bar: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function TestComponent({ ...props }: TestComponentProps) {
  return <div>fasffas</div>;
}
