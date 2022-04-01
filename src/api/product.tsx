import instance from './instance';

export const list = () => {
    const url = `/products`;
    return instance.get(url)
}
export const add = (product: any,_id: string| number) => {
    const url = `/products/${_id}`;
    return instance.post(url, product);
}
export const remove = (_id: any) => {
    const url = `/products/${_id}`;
    return instance.delete(url);
}
export const read = (_id: any) => {
    const url = `/products/${_id}`;
    return instance.get(url);
}
export const update = (product: any) => {
    const url = `/products/${product._id}/edit`;
    return instance.put(url, product);
}