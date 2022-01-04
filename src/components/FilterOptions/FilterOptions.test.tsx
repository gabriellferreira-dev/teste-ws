import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterOptions, { IFilterOptions } from '.';
const optionsMock = ['Option 1', 'Option 2', 'Option 3', 'Option  4'];

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

    userEvent.selectOptions(screen.getByRole('combobox'), 'Option 2');

    expect(onChangeFn).toBeCalled();
    expect(onChangeFn).toBeCalledTimes(1);
    expect(screen.getByRole('combobox')).toHaveValue('Option 2');
  });
});

const renderedFilterOptions = (values: IFilterOptions) => {
  return render(<FilterOptions {...values} />);
};
