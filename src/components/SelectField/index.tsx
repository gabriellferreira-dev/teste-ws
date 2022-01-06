import { FC, ReactNode } from 'react';
import { Container } from './styles';

interface ISelect {
  children: ReactNode;
}

const Select: FC<ISelect> = ({ children }: ISelect) => {
  return <Container>{children}</Container>;
};

export default Select;
