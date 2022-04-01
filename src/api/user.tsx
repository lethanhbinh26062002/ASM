import instance from "./instance";

export const listUsers = () => {
    const url = `/users`;
    return instance.get(url);
}
export const addUser = (user: any) => {
    const url = `/users`;
    return instance.post(url, user);
}
export const removeUser = (id: any) => {
    const url = `/users/${id}`;
    return instance.delete(url)
}
export const updateUser = (user: any) => {
    const url = `/users/${user.id}`;
    return instance.put(url, user)
}
export const realUser = (id: any) => {
    const url = `/users/${id}`;
    return instance.get(url)
}