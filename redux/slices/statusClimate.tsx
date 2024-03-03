import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
        value: 20,
    },
    fan: {
        status: "off",
        value: 0,
    },
    heat: {
        status: "off",
        value: 24,
    },
    auto: {
        status: "on",
        value: 22,
    },
};

const climateSlice = createSlice({
    name: "climate",
    initialState,
    reducers: {
        changeValueParamsAC: (
            state: IStateClimate,
            action: PayloadAction<IChangeAction>
        ) => {
            const {newValue} = action.payload;
            if (state.ac.status === "on") {
                state.ac.status = "off";
            } else {
                state.ac.status = "on";
                state.fan.status = "off"
                state.heat.status = "off"
                state.auto.status = "off"
            }
            state.ac.value = newValue;
        },
        changeValueParamsFan: (
            state: IStateClimate,
            action: PayloadAction<IChangeAction>
        ) => {
            const {newValue} = action.payload;
            if (state.fan.status === "on") {
                state.fan.status = "off";
            } else {
                state.fan.status = "on";
                state.ac.status = "off"
                state.heat.status = "off"
                state.auto.status = "off"
            }
            state.fan.value = newValue;
        },
        changeValueParamsHeat: (
            state: IStateClimate,
            action: PayloadAction<IChangeAction>
        ) => {
            const {newValue} = action.payload;
            if (state.heat.status === "on") {
                state.heat.status = "off";
            } else {
                state.heat.status = "on";
                state.fan.status = "off"
                state.ac.status = "off"
                state.auto.status = "off"
            }
            state.heat.value = newValue;
        },
        changeValueParamsAuto: (
            state: IStateClimate,
            action: PayloadAction<IChangeAction>
        ) => {
            const {newValue} = action.payload;
            if (state.auto.status === "on") {
                state.auto.status = "off";
            } else {
                state.auto.status = "on";
                state.fan.status = "off"
                state.heat.status = "off"
                state.ac.status = "off"
            }
            state.auto.value = newValue;
        },
    },
});

export const {changeValueParamsAC, changeValueParamsFan, changeValueParamsHeat, changeValueParamsAuto} = climateSlice.actions;

export default climateSlice.reducer;
