import { FC, FormEventHandler, ReactNode } from 'react';
import { Container } from './styles';
import { IconType } from 'react-icons';

export interface IButton {
  children: ReactNode;
  Icon?: IconType;
  outline?: boolean;
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
