import {instance} from "./instance";

export const getUserInfo = async (token) => {
    try {
        const {data} = await instance.get("/customers/customer", token);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}