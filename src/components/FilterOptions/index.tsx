import React, { ChangeEvent } from 'react';
import { Container } from './styles';

export interface IFilterOptions {
  id: string;
  options: string[];
  defaultValue?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const FilterOptions: React.FC<IFilterOptions> = ({
  options,
  ...attributes
}) => {
  return (
    <Container {...attributes}>
      {options &&
        options.map((value, i) => (
          <option key={`value-${i}`} value={value}>
            {value}
          </option>
        ))}
    </Container>
  );
};

export default FilterOptions;
