import {configureStore} from '@reduxjs/toolkit'
import statusCar, {IStateCar} from './slices/statusCar'
import statusClimate, {IStateClimate} from './slices/statusClimate';
import statusDoors, {IStateDoors} from "./slices/statusDoors";

export type RootStateType = {
    car: IStateCar
    climate: IStateClimate
    doors: IStateDoors
};
const store = configureStore({
    reducer: {
        car: statusCar,
        climate: statusClimate,
        doors: statusDoors
    }
})

export default store