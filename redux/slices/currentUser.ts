import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUserInfo} from "../../api/getUserInfo";

export interface IStateCurrentUser {
    email: string,
    telephone: string,
    firstName: string,
    lastName: string,
    login: string,
    password: string
}

const initialState: IStateCurrentUser = {
    email: '',
    telephone: '',
    firstName: '',
    lastName: '',
    login: '',
    password: ''
};

export const getCurrentUser = createAsyncThunk("users/getCurrentUser", async () => {
    return await getUserInfo();
})

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        getUser: (state, action: PayloadAction<any>) => {
            state.email = action.payload.email;
            state.telephone = action.payload.telephone;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.login = action.payload.login;
            state.password = action.payload.password; 
        }
    }
});

export const {getUser} = currentUserSlice.actions;
export default currentUserSlice.reducer;