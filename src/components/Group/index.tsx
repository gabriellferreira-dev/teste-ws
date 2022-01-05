import { Car } from '../../interfaces/Car';
import GroupContent from '../GroupContent';
import { Container } from './styles';

export interface IGroup {
  cars: Car[];
  title: string;
}

const Group: React.FC<IGroup> = ({ cars, title }: IGroup) => {
  console.log(cars);
  return (
    <Container data-testid="group-cars">
      <p className="group-title">{title}</p>
      <GroupContent cars={cars} />
    </Container>
  );
};

export default Group;
