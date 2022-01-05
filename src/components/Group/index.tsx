import { Car } from '../../interfaces/Car';
import { Container } from './styles';

export interface IGroup {
  cars: Car[];
}

const Group: React.FC<IGroup> = () => {
  return <Container data-testid="group-cars"></Container>;
};

export default Group;
