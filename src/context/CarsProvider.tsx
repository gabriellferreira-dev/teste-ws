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
  setInitialCars: (value: Car[]) => void;
  registering: boolean;
  setRegistering: Dispatch<SetStateAction<boolean>>;
}

export const CarsContext = createContext<ICarsContext>({
  groupBy: '',
  setGroupBy: () => '',
  cars: [],
  addCar: () => '',
  setCars: () => '',
  setInitialCars: () => '',
  registering: false,
  setRegistering: () => '',
});

export const CarsProvider = ({ children }: Props) => {
  const [groupBy, setGroupBy] = useState<string>('marca_nome');
  const [cars, setCars] = useState<Car[]>([]);
  const [registering, setRegistering] = useState<boolean>(false);

  const addCar = (car: Car) => setCars((cars) => [...cars, car]);
  const setInitialCars = (cars: Car[]) => setCars(cars);

  const context: ICarsContext = {
    groupBy,
    setGroupBy,
    cars,
    setCars,
    setInitialCars,
    addCar,
    registering,
    setRegistering,
  };

  return (
    <CarsContext.Provider value={{ ...context }}>
      {children}
    </CarsContext.Provider>
  );
};
