import { ReactNode } from 'react';

import { Container, Title, CloseButton } from './styles';

interface ComposableModalHeaderProps {
  composable: true;
  children: ReactNode;
}

interface ShorthandModalHeaderProps {
  composable?: never;
  title: string;
  onClose?: () => void;
}

export type ModalHeaderProps =
  | ComposableModalHeaderProps
  | ShorthandModalHeaderProps;

export default function Header({ ...props }: ModalHeaderProps) {
  if (props.composable) {
    const { composable, ...rest } = props;

    return <Container {...rest}>{props.children}</Container>;
  }

  const { title, onClose, ...rest } = props;

  return (
    <Container {...rest}>
      <Title>{props.title}</Title>
      <CloseButton onClick={onClose}>X</CloseButton>
    </Container>
  );
}

Header.Title = Title;
Header.CloseButton = CloseButton;
