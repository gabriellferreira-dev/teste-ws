import { FC, useContext } from 'react';
import { CarsContext } from '../../context/CarsProvider';
import { Car } from '../../interfaces/Car';
import Button from '../Button';
import CardCar from '../CardCar';
import { Container } from './styles';

export interface IGroupContent {
  cars: Car[];
}

const GroupContent: FC<IGroupContent> = ({ cars }: IGroupContent) => {
  const { setDefaultFormValues, setEditing } = useContext(CarsContext);

  const handleEdit = (car: Car) => {
    setDefaultFormValues(car);
    setEditing(true);
  };

  return (
    <Container>
      {cars?.map((car, i) => (
        <CardCar key={`${car.marca_nome}-${i}`} car={car}>
          <Button type="button" alert onClick={() => handleEdit(car)}>
            Editar
          </Button>
        </CardCar>
      ))}
    </Container>
  );
};

export default GroupContent;
