import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { read, update } from '../../../api/product';
import { ProductType } from '../../../types/product';

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = ProductType;

const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const { id } = useParams();
    console.log(id);

    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
            console.log(data);

        }
        getProduct();
    }, [id]);
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false)
    const uploadImage = async (e: { target: { files: any; }; }) => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'ezcazcxt')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dwug4n0c9/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()
        const url = file.secure_url
        console.log(url);
        setImage(file.secure_url)
        console.log(image);
        setLoading(false)
    }
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        props.onUpdate(data)
        navigate("/admin/products");
    }
    return (
        <><div className="col-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="text-left card-title">Edit Product</h4>
                    <br />
                    <form className="forms-sample" onSubmit={handleSubmit(onSubmit)}>
                        <div className="text-left form-group">
                            <label>Name</label>
                            <input type="text" {...register('name', { required: true })} className="form-control" placeholder="Name" />
                            <br />
                            {errors.name && <span className="text-base badge badge-warning">Nh???p t??n s???n ph???m</span>}
                        </div>
                        <div className="text-left form-group">
                            <label>Price</label>
                            <input type="number" min="0" {...register('price', { required: true })} className="form-control" placeholder="Price" />
                            <br />
                            {errors.price && <span className="text-base badge badge-warning">Nh???p gi?? s???n ph???m</span>}
                        </div>
                        <div className="form-group">
                            <label>File upload</label>
                            <br />
                            <input type="file" onChange={uploadImage} className="file-upload-browse btn btn-gradient-primary" />
                            <input type="text" {...register('img')} value={image} />
                            <div>
                                {loading ? <p>Loading...</p> : <img src={image} style={{ width: '300px' }} />}
                            </div>
                            {errors.img && <span className="text-base badge badge-warning">Th??m ???nh s???n ph???m</span>}
                        </div>
                        <div className="text-left form-group">
                            <label>Description</label>
                            <textarea className="form-control" {...register('description', { required: true })} rows={8} />
                            <br />
                            {errors.description && <span className="text-base badge badge-warning">Nh???p m?? t??? s???n ph???m</span>}
                        </div>
                        <button className="text-left btn btn-gradient-primary mr-2">Update</button>
                    </form>
                </div>
            </div>
        </div></>
    )
}

export default ProductEdit