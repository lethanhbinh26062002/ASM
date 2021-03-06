import { Link } from 'react-router-dom';
import { ProductType } from '../../../types/product';

type ProductManagerProps = {
  products: ProductType[];
  onRemove: (_id: number | string) => void
  
}

const userLocal = JSON.parse(localStorage.getItem("user") as string);
// const UserId = userLocal.user._id;
// console.log(UserId);

const ProductManager = (props: ProductManagerProps) => {
  return (
    <div className="col-lg-12 stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">List Product</h4>
          <button type="button" className="ml-0 btn btn-inverse-success btn-fw">
            <Link to={`/admin/products/${userLocal.user._id}`}>Add Product</Link>
          </button>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th> # </th>
                <th> Image </th>
                <th> Product name </th>
                <th> Price </th>
                <th> Description </th>
                <th> Edit </th>
              </tr>
            </thead>
            <tbody>
              {props.products.map((item, index) => {
                return <tr className="table">
                  <td>{index + 1}</td>
                  <td><img src={item.img} style={{ width: '300px', height: '300px' }} /></td>
                  <td>{item.name}</td>
                  <td>{item.price} USD</td>
                  <td>{item.description}</td>
                  <td>
                    <button type="button" className="btn btn-inverse-dark btn-fw">
                      <Link to={`/admin/products/${userLocal.user._id}/${item._id}/edit`}>Edit</Link>
                    </button>
                    <span>                                                </span>
                    <button type="button" className="btn btn-inverse-danger btn-fw" onClick={() => props.onRemove(item._id)}>Remove</button>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default ProductManager