import React, { ChangeEvent } from 'react';
import { Container } from './styles';

interface IOption {
  name: string;
  value: string;
}

export interface IFilterOptions {
  id: string;
  options: IOption[];
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
        options.map((option, i) => (
          <option key={`value-${i}`} value={option.value}>
            {option.name}
          </option>
        ))}
    </Container>
  );
};

export default FilterOptions;
