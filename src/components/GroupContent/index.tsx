import { FC } from 'react';
import { Car } from '../../interfaces/Car';
import CardCar from '../CardCar';
import { Container } from './styles';

export interface IGroupContent {
  cars: Car[];
}

const GroupContent: FC<IGroupContent> = ({ cars }: IGroupContent) => {
  return (
    <Container>
      {cars?.map((car, i) => (
        <CardCar key={`${car.marca_nome}-${i}`} car={car} />
      ))}
    </Container>
  );
};

export default GroupContent;
