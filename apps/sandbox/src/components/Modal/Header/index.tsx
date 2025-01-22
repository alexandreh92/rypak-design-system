import { ReactNode, HTMLAttributes } from "react";

import { Container, Title, CloseButton } from "./styles";

interface SharedModalHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  children: ReactNode;
}

interface ComposableModalHeaderProps extends SharedModalHeaderProps {
  composable: true;
}

interface ShorthandModalHeaderProps extends SharedModalHeaderProps {
  composable?: never;
  title: string;
  onClose?: () => void;
}

export type ModalHeaderProps =
  | ComposableModalHeaderProps
  | ShorthandModalHeaderProps;

export default function Header({ children, ...props }: ModalHeaderProps) {
  if (props.composable) {
    const { composable, ...rest } = props;

    return <Container {...rest}>{children}</Container>;
  }

  const { title, onClose, ...rest } = props;

  return (
    <Container {...rest}>
      <Title>{props.title}</Title>
      <CloseButton onClick={onClose}>X</CloseButton>
    </Container>
  );
}
