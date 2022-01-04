import React, { ChangeEvent, useState } from 'react';
import { Container } from './styles';

import Logo from '../../assets/logo.png';
import FilterOptions from '../FilterOptions';

const options = ['Marca', 'Modelo', 'Ano', 'Combustível', 'Portas'];

const Header: React.FC = () => {
  const [orderBy, setOrderBy] = useState('marca');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(event.target.value);
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
