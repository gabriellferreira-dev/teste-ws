import { FormikErrors, FormikTouched } from 'formik';
import { FC, useContext } from 'react';
import { CarsContext } from '../../context/CarsProvider';
import { Car } from '../../interfaces/Car';
import { Form } from '../Form';
import { Container } from './styles';

type Props = {
  errors: FormikErrors<Car>;
  touched: FormikTouched<Car>;
};

const SideBar: FC<Props> = ({ errors, touched }) => {
  const { registering } = useContext(CarsContext);
  return (
    <Container registering={registering as boolean}>
      <Form errors={errors} touched={touched} />
    </Container>
  );
};

export default SideBar;