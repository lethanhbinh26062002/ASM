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
    const { register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    },[id]);

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        props.onUpdate(data)
        navigate("/admin/product");
    }
  return (
    <><div className="col-12 grid-margin stretch-card">
              <div className="card">
                  <div className="card-body">
                      <h4 className="text-left card-title">Add Product</h4>
                      <br />
                      <form className="forms-sample" onSubmit={handleSubmit(onSubmit)}>
                          <div className="text-left form-group">
                              <label>Name</label>
                              <input type="text" {...register('name', { required: true })} className="form-control" placeholder="Name" />
                              <br />
                              {errors.name && <span className="text-base badge badge-warning">Nhập tên sản phẩm</span>}
                          </div>
                          <div className="text-left form-group">
                              <label>Price</label>
                              <input type="number" min="0" {...register('price', { required: true })} className="form-control" placeholder="Price" />
                              <br />
                              {errors.price && <span className="text-base badge badge-warning">Nhập giá sản phẩm</span>}
                          </div>
                          <div className="text-left form-group">
                              <label>Description</label>
                              <textarea className="form-control" {...register('description', { required: true })} rows={8} />
                              <br />
                              {errors.description && <span className="text-base badge badge-warning">Nhập mô tả sản phẩm</span>}
                          </div>
                          <button className="text-left btn btn-gradient-primary mr-2">Update</button>
                      </form>
                  </div>
              </div>
          </div></>
  )
}

export default ProductEdit