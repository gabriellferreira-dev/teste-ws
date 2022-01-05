import { Car } from './../interfaces/Car';

export const groupCars = (list: Car[], groupBy: string | number) => {
  const data: Record<string, Car[]> = {};

  list.forEach((car) => {
    if (data[car[groupBy]]) data[car[groupBy]] = [...data[car[groupBy]], car];
    else data[car[groupBy]] = [car];
  });

  return data;
};
