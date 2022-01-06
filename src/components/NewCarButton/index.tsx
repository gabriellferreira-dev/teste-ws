import { useContext } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { CarsContext } from '../../context/CarsProvider';
import Button from '../Button';
import { Container } from './styles';

const NewCarButton = () => {
  const { setRegistering } = useContext(CarsContext);
  const handleClick = () => {
    if (setRegistering) setRegistering(true);
  };
  return (
    <Container>
      <Button type="button" Icon={AiOutlinePlus} onClick={handleClick}>
        Cadastrar novo veículo
      </Button>
    </Container>
  );
};

export default NewCarButton;
