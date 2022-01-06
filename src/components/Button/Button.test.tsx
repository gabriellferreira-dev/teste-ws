import { render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  it('should be a button rendered', () => {
    renderedButton();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

const renderedButton = () => {
  return render(<Button type="button">Novo veiculo</Button>);
};
