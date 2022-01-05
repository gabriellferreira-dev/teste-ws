import { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

interface ICarsContext {
  groupBy?: string;
  setGroupBy?: (value: string) => void;
}

export const CarsContext = createContext<ICarsContext>({});

export const CarsProvider = ({ children }: Props) => {
  const [groupBy, setGroupBy] = useState('marca_nome');

  const context: ICarsContext = {
    groupBy,
    setGroupBy,
  };

  return (
    <CarsContext.Provider value={{ ...context }}>
      {children}
    </CarsContext.Provider>
  );
};
