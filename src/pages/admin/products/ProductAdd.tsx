import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { ProductType } from "../../../types/product";

type Inputs = ProductType;

type ProductAddProps = {
  onAdd: (product: Inputs) => void
}
const ProductAdd = (props: ProductAddProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  // sử dụng hook useNavigate để chuyển sang
  const navigate = useNavigate()
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
  const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
    props.onAdd(dataInput);
    // chuyển trang
    navigate("/admin/products");
  }
  return (
    <>
      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="text-left card-title">Add Product</h4>
            <br />
            <form className="forms-sample" onSubmit={handleSubmit(onSubmit)}>
              <div className="text-left form-group">
                <label>Name</label>
                <input type="text" {...register('name')} className="form-control" placeholder="Name" />
                {errors.name && <span className="text-base badge badge-warning">Nhập tên sản phẩm</span>}
              </div>
              <div className="text-left form-group">
                <label>Price</label>
                <input type="number" {...register('price')} className="form-control" placeholder="Price" />
                {errors.price && <span className="text-base badge badge-warning">Nhập giá sản phẩm</span>}
              </div>
              <div className="form-group">
                <label>File upload</label>
                <br />
                <input type="file" onChange={uploadImage} className="file-upload-browse btn btn-gradient-primary" />
                <input type="text" {...register('img')} value={image} />
                <div>
                  {loading ? <p>Loading...</p> : <img src={image} style={{ width: '300px' }} />}
                </div>
                {errors.img && <span className="text-base badge badge-warning">Thêm ảnh sản phẩm</span>}
              </div>
              <div className="text-left form-group">
                <label>Description</label>
                <textarea className="form-control" {...register('description')} rows={8} />
                {errors.description && <span className="text-base badge badge-warning">Nhập mô tả sản phẩm</span>}
              </div>
              <button className="text-left btn btn-gradient-primary mr-2">Add product</button>
            </form>
          </div>
        </div>
      </div></>
  )
}

export default ProductAdd
function usestate(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}

