import {instance} from "./instance";

export const getCandidate = async (formData) => {
    try {
        const {data} = await instance.get("user/sign-in", formData);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}