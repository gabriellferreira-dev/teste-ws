import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { Car } from '../interfaces/Car';

interface Props {
  children: React.ReactNode;
}

interface ICarsContext {
  groupBy: string;
  setGroupBy: Dispatch<SetStateAction<string>>;
  setCars: Dispatch<SetStateAction<Car[]>>;
  cars: Car[];
  addCar: (value: Car) => void;
  editCar: (values: Car[]) => void;
  registering: boolean;
  editing: boolean;
  setRegistering: Dispatch<SetStateAction<boolean>>;
  setEditing: Dispatch<SetStateAction<boolean>>;
  defaultFormValues: Car;
  setDefaultFormValues: Dispatch<SetStateAction<Car>>;
}

export const FORM_DEFAULT_VALUES: Car = {
  marca_nome: '',
  id: 0,
  marca_id: 0,
  nome_modelo: '',
  ano: 2000,
  combustivel: '',
  num_portas: 0,
  valor_fipe: 0,
  cor: '',
  timestamp_cadastro: 0,
};

export const CarsContext = createContext<ICarsContext>({
  groupBy: '',
  setGroupBy: () => '',
  cars: [],
  addCar: () => '',
  setCars: () => '',
  registering: false,
  editing: false,
  setRegistering: () => '',
  setEditing: () => '',
  defaultFormValues: FORM_DEFAULT_VALUES,
  setDefaultFormValues: () => '',
  editCar: () => '',
});

export const CarsProvider = ({ children }: Props) => {
  const [groupBy, setGroupBy] = useState<string>('marca_nome');
  const [cars, setCars] = useState<Car[]>([]);
  const [registering, setRegistering] = useState<boolean>(false);
  const [editing, setEditing] = useState<boolean>(false);
  const [defaultFormValues, setDefaultFormValues] =
    useState(FORM_DEFAULT_VALUES);

  const addCar = (car: Car) => setCars((cars) => [...cars, car]);
  const editCar = (values: Car[]) => setCars(values);

  const context: ICarsContext = {
    groupBy,
    setGroupBy,
    cars,
    setCars,
    addCar,
    registering,
    setRegistering,
    defaultFormValues,
    editing,
    setEditing,
    setDefaultFormValues,
    editCar,
  };

  return (
    <CarsContext.Provider value={{ ...context }}>
      {children}
    </CarsContext.Provider>
  );
};
