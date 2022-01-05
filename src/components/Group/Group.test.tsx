import { render, screen } from '@testing-library/react';
import Group, { IGroup } from '.';
import mockCars from '../../utils/mockCars';

describe('<Group />', () => {
  it('should render all car groups correctly', () => {
    renderedGroup({ cars: mockCars, title: '' });

    expect(screen.getAllByTestId('group-cars').length).toBe(mockCars.length);
  });
});

const renderedGroup = (props: IGroup) => {
  return render(<Group {...props} />);
};
