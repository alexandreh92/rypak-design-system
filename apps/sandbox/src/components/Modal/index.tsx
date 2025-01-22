import { ButtonHTMLAttributes, ReactNode } from "react";

import Root from "./Root";
import Header from "./Header";
import Body from "./Body";
import Actions from "./Actions";

import { Container } from "./styles";

interface SharedModalProps {
  children: ReactNode;
}

interface ComposableModal extends SharedModalProps {
  composable: true;
  children: ReactNode;
}

interface ShorthandModal extends SharedModalProps {
  onClose: () => void;
  composable?: false;
  title: string;
  children: ReactNode;
  icon: string;
  actions: ActionType[];
}

type ModalProps = ShorthandModal | ComposableModal;

function Modal({ children, ...props }: ModalProps) {
  if (props.composable) return <div>hi</div>;

  return (
    <Root>
      <Container>
        {props.composable ? (
          children
        ) : (
          <>
            <Header
              title={props.title}
              onClose={props.onClose}
              icon={props.icon}
            />
            <Body>{children}</Body>
            <Actions>
              {props.actions.map(({ text, ...rest }) => (
                <Actions.Action key={text} {...rest}>
                  {text}
                </Actions.Action>
              ))}
            </Actions>
          </>
        )}
      </Container>
    </Root>
  );
}
