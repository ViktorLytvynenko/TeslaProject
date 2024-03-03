import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IParam {
    status: "on" | "off";
    value: number;
}
export interface IStateClimate {
    ac: IParam;
    fan: IParam;
    heat: IParam;
    auto: IParam;
}

interface IChangeAction {
    type: string;
    newValue: number;
}

const initialState: IStateClimate = {
    ac: {
        status: "off",
        value: 16,
    },
    fan: {
        status: "off",
        value: 1,
    },
    heat: {
        status: "off",
        value: 24,
    },
    auto: {
        status: "off",
        value: 22,
    },
};

const climateSlice = createSlice({
    name: "climate",
    initialState,
    reducers: {
        changeValueParam: (
            state: IStateClimate,
            action: PayloadAction<IChangeAction>
        ) => {
            const { type, newValue } = action.payload;
            state[type].status = "on";
            state[type].value = newValue;
        },
    },
});

export const { changeValueParam } = climateSlice.actions;

export default climateSlice.reducer;
