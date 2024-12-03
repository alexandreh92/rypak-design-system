export interface AnotherButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function AnotherButton({
  children,
  ...other
}: AnotherButtonProps): JSX.Element {
  return (
    <button type="button" {...other}>
      some stuff here
      <div>another div here</div>
      <input />
      {children}
    </button>
  );
}

AnotherButton.displayName = 'AnotherButton';
