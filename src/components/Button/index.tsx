import { FC, FormEventHandler, ReactNode } from 'react';
import { Container, IStyleButton } from './styles';
import { IconType } from 'react-icons';

export interface IButton extends IStyleButton {
  children: ReactNode;
  Icon?: IconType;
  name?: string;
  value?: string;
  id?: string;
  onClick?: FormEventHandler<HTMLButtonElement>;
  type: 'submit' | 'button' | 'reset';
}

const Button: FC<IButton> = ({ children, Icon, ...attributes }: IButton) => {
  return (
    <Container icon={!!Icon} {...attributes}>
      {Icon && <Icon />}
      {children}
    </Container>
  );
};

export default Button;
