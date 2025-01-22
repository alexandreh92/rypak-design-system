import { ReactNode, HTMLAttributes } from "react";

interface ModalActionProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Action({ children, ...props }: ModalActionProps) {
  return <button {...props}>{children}</button>;
}
