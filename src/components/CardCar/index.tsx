import { FC } from 'react';
import NumberFormat from 'react-number-format';
import { Car } from '../../interfaces/Car';
import { Container } from './styles';

export interface ICardCar {
  car: Car;
}

const CardCar: FC<ICardCar> = ({ car }: ICardCar) => {
  const fipeValue =
    car.valor_fipe < 1000 ? car.valor_fipe * 1000 : car.valor_fipe;

  return (
    <Container>
      <p className="card-title">{car.nome_modelo}</p>
      <div>
        <span>{car.ano}</span>
        <div className="separator" />
        <span>{car.combustivel}</span>
        <div className="separator" />
        <span>{car.num_portas} P</span>
      </div>
      <p className="car-color">{car.cor}</p>
      <p>
        <NumberFormat
          prefix="R$ "
          decimalScale={2}
          value={fipeValue}
          displayType="text"
          thousandSeparator
          fixedDecimalScale
        />
      </p>
    </Container>
  );
};

export default CardCar;
