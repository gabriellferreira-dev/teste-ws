import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterOptions, { IFilterOptions } from '.';
const optionsMock = [
  { name: 'Option 1', value: 'option_1' },
  { name: 'Option 2', value: 'option_2' },
  { name: 'Option 3', value: 'option_3' },
  { name: 'Option 4', value: 'option_4' },
];

describe('<FilterOptions />', () => {
  it('should have all options passed', () => {
    renderedFilterOptions({
      options: optionsMock,
      id: 'filterOptions',
    });

    expect(screen.getAllByRole('option').length).toBe(optionsMock.length);
  });

  it('should perform a function received via props when selecting an option', () => {
    const onChangeFn = jest.fn();

    renderedFilterOptions({
      options: optionsMock,
      id: 'filterOptions',
      onChange: onChangeFn,
    });

    userEvent.selectOptions(screen.getByRole('combobox'), 'option_2');

    expect(onChangeFn).toBeCalled();
    expect(onChangeFn).toBeCalledTimes(1);
    expect(screen.getByRole('combobox')).toHaveValue('option_2');
  });
});

const renderedFilterOptions = (values: IFilterOptions) => {
  return render(<FilterOptions {...values} />);
};
