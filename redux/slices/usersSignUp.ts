import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IStateUsers {
    email: string,
    phone: string,
    firstName: string,
    lastName: string,
    password: string
}

const initialState: IStateUsers = {
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    password: ''
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        changeForm: (state, action: PayloadAction<any>) => {
            const {type, value} = action.payload
            state[type] = value
        }
    }
});

export const {changeForm} = usersSlice.actions;
export default usersSlice.reducer;