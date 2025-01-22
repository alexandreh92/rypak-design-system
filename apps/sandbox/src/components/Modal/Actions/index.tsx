import { ReactNode } from "react";
import Action from "./Action";

import { Container } from "./styles";

interface ComposableModalActionsProps {
  composable: true;
  children: ReactNode;
}

interface ShorthandModalActionsProps {
  composable?: never;
  actions: ActionType[];
}

export type ModalActionsProps =
  | ComposableModalActionsProps
  | ShorthandModalActionsProps;

export default function Actions({ ...props }: ModalActionsProps) {
  if (props.composable) {
    return <Container>{props.children}</Container>;
  }

  return (
    <Container>
      {props.actions.map(({ text, ...rest }) => (
        <Action {...rest}>{text}</Action>
      ))}
    </Container>
  );
}

Actions.Action = Action;
