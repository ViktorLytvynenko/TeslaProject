import {configureStore} from '@reduxjs/toolkit'
import statusCar, { IStateCar } from './slices/statusCar'
import statusClimate, { IStateClimate } from './slices/statusClimate';

export type RootStateType = {
    car:IStateCar
    climate: IStateClimate
  };
const store = configureStore({ reducer: {
    car: statusCar,
    climate: statusClimate
} })

export default store