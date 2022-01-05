import React, { ChangeEvent, useContext } from 'react';
import { Container } from './styles';

import Logo from '../../assets/logo.png';
import FilterOptions from '../FilterOptions';
import { CarsContext } from '../../context/CarsProvider';

const options = [
  {
    name: 'Marca',
    value: 'marca_nome',
  },
  {
    name: 'Ano',
    value: 'ano',
  },
  {
    name: 'Portas',
    value: 'num_portas',
  },
  {
    name: 'Combustível',
    value: 'combustivel',
  },
];

const Header: React.FC = () => {
  const { setGroupBy } = useContext(CarsContext);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (setGroupBy) setGroupBy(event.target.value);
  };

  return (
    <Container>
      <img src={Logo} alt="Logo da empresa" />
      <p>Sistema de Gerenciamento de Veículos</p>
      <label htmlFor="filterOptions">
        Ordenar por:
        <FilterOptions
          id="filterOptions"
          options={options}
          onChange={handleChange}
          defaultValue="Marca"
        />
      </label>
    </Container>
  );
};

export default Header;
