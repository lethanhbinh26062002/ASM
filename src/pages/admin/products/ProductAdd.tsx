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
  const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
    props.onAdd(dataInput);
    // chuyển trang
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
              <input type="text" {...register('name')} className="form-control" placeholder="Name" />
            </div>
            <div className="text-left form-group">
              <label>Price</label>
              <input type="number" {...register('price')} className="form-control" placeholder="Price" />
            </div>
            <div className="text-left form-group">
              <label>Description</label>
              <textarea className="form-control" {...register('description')} rows={8} />
            </div>
            <button className="text-left btn btn-gradient-primary mr-2">Add product</button>
          </form>
        </div>
      </div>
    </div></>
  )
}

export default ProductAdd