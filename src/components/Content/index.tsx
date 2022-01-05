import React, { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import * as api from '../../api';
import { groupCars } from '../../utils/groupCars';
import { CarsContext } from '../../context/CarsProvider';
import { Car } from '../../interfaces/Car';
import Group from '../Group';

const Content: React.FC = () => {
  const [cars, setCars] = useState([]);
  const [groupedCars, setGroupedCars] = useState<Record<string, Car[]>>({});
  const { groupBy } = useContext(CarsContext);

  console.log(groupBy);

  useEffect(() => {
    const getCars = async () => {
      const url = 'http://demo0566678.mockable.io/test-ws-front';

      const data = await api.getCars(url);
      console.log(data);
      setCars(data);
      const cars = groupCars(data.cars, groupBy as string);
      setGroupedCars(cars);
    };

    getCars();
  }, [groupBy]);

  return (
    <Container>
      {Object.entries(groupedCars)?.map(([key, value], i) => {
        return <Group key={`${key} + ${i}`} title={key} cars={value} />;
      })}
    </Container>
  );
};

export default Content;
