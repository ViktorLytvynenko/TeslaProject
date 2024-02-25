import {createAction, createReducer} from '@reduxjs/toolkit'

const initialState = {
    statusCarOpen: false
}

const actionToggleStatusCar = createAction('TOGGLE_STATUS_CAR')

const carReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actionToggleStatusCar, (state) => {
            return {
                ...state,
                statusCarOpen: !state.statusCarOpen
            };
        });
});

export default carReducer