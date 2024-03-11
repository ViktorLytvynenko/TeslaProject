import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IStateDriver {
    loginOrEmail: string,
    password: string,
    token: string
}

const initialState: IStateDriver = {
    loginOrEmail: '',
    password: '',
    token: ''
};

const driverSlice = createSlice({
    name: "driver",
    initialState,
    reducers: {
        driverForm: (state, action: PayloadAction<any>) => {
            const {type, value} = action.payload
            state[type] = value
        },
        getToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        }
    }
});

export const {driverForm, getToken} = driverSlice.actions;
export default driverSlice.reducer;