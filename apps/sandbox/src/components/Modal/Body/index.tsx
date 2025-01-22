import { ReactNode } from "react";
import { HTMLAttributes } from "react";

import { Container } from "./styles";

interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Body({ children, ...rest }: ModalBodyProps) {
  return <Container>{children}</Container>;
}
