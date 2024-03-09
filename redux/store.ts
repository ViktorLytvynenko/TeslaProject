import {configureStore} from '@reduxjs/toolkit'
import statusCar, {IStateCar} from './slices/statusCar'
import statusClimate, {IStateClimate} from './slices/statusClimate';
import statusDoors, {IStateDoors} from "./slices/statusDoors";
import statusCharge, { IStateCharge } from './slices/statusCharge';
import users, { IStateUsers } from './slices/usersSignUp';
import usersSignUp from './slices/usersSignUp';

export type RootStateType = {
    car: IStateCar
    climate: IStateClimate
    doors: IStateDoors
    charge: IStateCharge
    users: IStateUsers
};
const store = configureStore({
    reducer: {
        car: statusCar,
        climate: statusClimate,
        doors: statusDoors,
        charge: statusCharge,
        signUp: usersSignUp
    }
})

export default store