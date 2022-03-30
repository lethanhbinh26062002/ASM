import instance from "./instance";

export const addUser = (user: any) => {
    const url = `/users`;
    return instance.post(url, user);
}