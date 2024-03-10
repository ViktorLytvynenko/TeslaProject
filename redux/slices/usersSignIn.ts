import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IStateDriver {
    email: string,
    password: string,
}

const initialState: IStateDriver = {
    email: '',
    password: ''
};

const driverSlice = createSlice({
    name: "driver",
    initialState,
    reducers: {
        driverForm: (state, action: PayloadAction<any>) => {
            const {type, value} = action.payload
            state[type] = value
        }
    }
});

export const {driverForm} = driverSlice.actions;
export default driverSlice.reducer;