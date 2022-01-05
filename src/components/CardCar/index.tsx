import { FC } from 'react';
import { Car } from '../../interfaces/Car';
import { Container } from './styles';

export interface ICardCar {
  car: Car;
}

const CardCar: FC<ICardCar> = ({ car }: ICardCar) => {
  function formatNumber(num: number) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  const fipeValue = formatNumber(car.valor_fipe * 1000);

  return (
    <Container>
      <img src="" alt="" />
      <div>
        <p className="card-title">{car.nome_modelo}</p>
        <div>
          <span>{car.ano}</span>
          <div className="separator" />
          <span>{car.combustivel}</span>
          <div className="separator" />
          <span>{car.num_portas} P</span>
        </div>
        <p className="car-color">{car.cor}</p>
        <p>R$ {fipeValue}</p>
      </div>
    </Container>
  );
};

export default CardCar;
