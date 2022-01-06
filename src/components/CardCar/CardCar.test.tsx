import { render, screen } from '@testing-library/react';
import CardCar, { ICardCar } from '.';
import { Car } from '../../interfaces/Car';

const mockCar: Car = {
  id: 1,
  marca_id: 1,
  marca_nome: 'TOYOTA',
  nome_modelo: 'COROLLA XEI',
  ano: 2016,
  combustivel: 'flex',
  num_portas: 4,
  valor_fipe: 70.0,
  cor: 'Azul',
  timestamp_cadastro: 1636636150,
};

describe('<CardCar />', () => {
  it('should render the card correctly', () => {
    renderedCardCar({ car: mockCar });

    expect(screen.getByText(mockCar.nome_modelo)).toBeInTheDocument();
    expect(screen.getByText(mockCar.cor)).toBeInTheDocument();
    expect(screen.getByText(mockCar.combustivel)).toBeInTheDocument();
    expect(screen.getByText(mockCar.ano)).toBeInTheDocument();
  });
});

const renderedCardCar = (props: ICardCar) => {
  return render(<CardCar {...props} />);
};
