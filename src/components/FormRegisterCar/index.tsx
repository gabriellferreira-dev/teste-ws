import { Formik, FormikHelpers } from 'formik';
import { useContext } from 'react';
import * as Yup from 'yup';
import { CarsContext, FORM_DEFAULT_VALUES } from '../../context/CarsProvider';
import { Car } from '../../interfaces/Car';
import makes from '../../utils/makes';
import SideBar from '../SideBar';

export interface IMake {
  marca_id: number;
  marca_nome: string;
}

export const FormNewCar = () => {
  const {
    cars,
    addCar,
    setRegistering,
    setEditing,
    defaultFormValues,
    registering,
    setDefaultFormValues,
    editCar: handleEditCar,
  } = useContext(CarsContext);

  const handleSubmit = (values: Car, actions: FormikHelpers<Car>) => {
    if (registering) {
      createCar(values);
    } else {
      editCar(values);
    }
    actions.resetForm();
    setDefaultFormValues(FORM_DEFAULT_VALUES);
  };

  const createCar = (values: Car) => {
    const lastCar = cars.reduce((acc, value) =>
      acc.id > value.id ? acc : value,
    );
    const make = makes.find(
      ({ marca_nome }) => marca_nome === values.marca_nome,
    );

    values.num_portas = Number(values.num_portas);
    values.marca_id = make?.marca_id as number;
    values.timestamp_cadastro = new Date().getTime();
    values.id = lastCar.id + 1;
    addCar(values);
    setRegistering(false);
  };

  const editCar = (values: Car) => {
    const toEdit = cars.find((car) => car.id === values.id);
    const edited = { ...toEdit, ...values };
    const carIndex = cars.indexOf(toEdit as Car);
    const newCars = cars.slice();

    newCars[carIndex] = edited;
    handleEditCar(newCars);
    setEditing(false);
  };

  const NewCarSchema = Yup.object().shape({
    marca_nome: Yup.string().required('Marca do veículo é obrigatório.'),
    nome_modelo: Yup.string().required('Nome do veículo obrigatório.'),
    ano: Yup.number()
      .min(2000, 'Só é aceito carro de ano superior a 2000.')
      .required('Ano do veículo é obrigatório.'),
    combustivel: Yup.string().required(
      'Tipo de combustível do veículo é obrigatório.',
    ),
    num_portas: Yup.number()
      .equals([2, 4], '2 ou 4 portas?')
      .required('Número de portas do veículo é obrigatório.'),
    cor: Yup.string().required('Cor do veículo é obrigatório.'),
    valor_fipe: Yup.number()
      .moreThan(0, 'Valor deve ser superior a 0.')
      .required('Valor FIPE do veículo é obrigatório.'),
  });

  return (
    <Formik
      initialValues={defaultFormValues}
      onSubmit={handleSubmit}
      validationSchema={NewCarSchema}
      enableReinitialize
    >
      {({ errors, touched }) => {
        return <SideBar errors={errors} touched={touched} />;
      }}
    </Formik>
  );
};
