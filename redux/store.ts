import {configureStore} from '@reduxjs/toolkit'
import statusCar, {IStateCar} from './slices/statusCar'
import statusClimate, {IStateClimate} from './slices/statusClimate';
import statusDoors, {IStateDoors} from "./slices/statusDoors";
import statusCharge, {IStateCharge} from './slices/statusCharge';
import {IStateUsers} from './slices/usersSignUp';
import usersSignUp from './slices/usersSignUp';
import usersSignIn, {IStateDriver} from "./slices/usersSignIn";

export type RootStateType = {
    car: IStateCar
    climate: IStateClimate
    doors: IStateDoors
    charge: IStateCharge
    users: IStateUsers
    driver: IStateDriver
};
const store = configureStore({
    reducer: {
        car: statusCar,
        climate: statusClimate,
        doors: statusDoors,
        charge: statusCharge,
        signUp: usersSignUp,
        signIn: usersSignIn
    }
})

export default store