import { render, screen } from '@testing-library/react';
import Header from '.';

describe('<Header />', () => {
  it('should render a header', () => {
    renderedHeader();

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should have a logo', () => {
    renderedHeader();

    expect(
      screen.getByRole('img', { name: 'Logo da empresa' }),
    ).toBeInTheDocument();
  });

  it('should have a title', () => {
    renderedHeader();

    expect(
      screen.getByText('Sistema de Gerenciamento de Veículos'),
    ).toBeInTheDocument();
  });

  it('should have a filtering options selector', () => {
    renderedHeader();

    expect(screen.getByText(/ordenar por/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});

const renderedHeader = () => {
  return render(<Header />);
};
