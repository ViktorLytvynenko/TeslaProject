import {combineReducers, configureStore} from '@reduxjs/toolkit'
import carReducer from "./CarReducer";

const reducers = combineReducers({carReducer})
const store = configureStore({ reducer: reducers })

export default store