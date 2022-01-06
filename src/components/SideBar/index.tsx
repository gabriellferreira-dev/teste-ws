import { FC, ReactNode, useContext } from 'react';
import { CarsContext } from '../../context/CarsProvider';
import { Container } from './styles';

type Props = {
  children: ReactNode;
};

const SideBar: FC<Props> = ({ children }) => {
  const { registering, editing } = useContext(CarsContext);
  return <Container show={registering || editing}>{children}</Container>;
};

export default SideBar;
