import React, { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import * as api from '../../api';
import { groupCars } from '../../utils/groupCars';
import { CarsContext } from '../../context/CarsProvider';
import { Car } from '../../interfaces/Car';
import Group from '../Group';
import NewCarButton from '../NewCarButton';
import { FormNewCar } from '../FormRegisterCar';
import SideBar from '../SideBar';

const Content: React.FC = () => {
  const [groupedCars, setGroupedCars] = useState<Record<string, Car[]>>({});
  const { groupBy, setCars, cars } = useContext(CarsContext);

  useEffect(() => {
    const getCars = async () => {
      const url = 'http://demo0566678.mockable.io/test-ws-front';

      const data = await api.getCars(url);

      setCars(data.cars);
    };

    getCars();
  }, [setCars]);

  useEffect(() => {
    const grouped = groupCars(cars, groupBy as string);
    setGroupedCars(grouped);
  }, [cars, groupBy]);

  return (
    <Container>
      <NewCarButton />
      {Object.entries(groupedCars)?.map(([key, value], i) => {
        return <Group key={`${key} + ${i}`} title={key} cars={value} />;
      })}
      <SideBar>
        <FormNewCar />
      </SideBar>
    </Container>
  );
};

export default Content;
