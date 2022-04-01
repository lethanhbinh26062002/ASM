import { isAuthenticate } from '../utils/localStorage';
import instance from './instance';

export const list = () => {
    const url = `/products`;
    return instance.get(url)
}
const user = isAuthenticate();
export const add = (product: any ) => {
    const url = `/product/${user?.user._id}`;
    return instance.post(url, product,{
        headers:{
            "Authorization": `Bearer ${user?.token}`
        }
    });
}
export const remove = (_id: any) => {
    const url = `/products/${user?.user._id}/${_id}`;
    return instance.delete(url,{
        headers:{
            "Authorization": `Bearer ${user?.token}`
        }
    });
}
export const read = (_id: any) => {
    const url = `/products/${_id}`;
    return instance.get(url);
}
export const update = (product: any) => {
    const url = `/products/${user?.user._id}/${product._id}/edit`;
    return instance.put(url, product,{
        headers:{
            "Authorization": `Bearer ${user?.token}`
        }
    });
}