import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../../../types/product';

type ProductManagerProps = {
  products: ProductType[];
  onRemove: (id: number) => void
}

const ProductManager = (props: ProductManagerProps) => {
  return (
    <><div className="col-lg-12 stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">List Product</h4>
          <button type="button" className="ml-0 btn btn-inverse-success btn-fw">
            <Link to={`/admin/product/add`}>Add Product</Link>
          </button>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th> # </th>
                <th> Product name </th>
                <th> Price </th>
                <th> Description </th>
                <th> Edit </th>
              </tr>
            </thead>
            <tbody>
              {props.products.map((item, index) => {
                return <tr className="table-info">
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price} USD</td>
                  <td>{item.description}</td>
                  <td>
                    <button type="button" className="btn btn-inverse-dark btn-fw">
                      <Link to={`/admin/product/${item.id}/edit`}>Edit</Link>
                    </button>
                    <span>                                                </span>
                    <button type="button" className="btn btn-inverse-danger btn-fw" onClick={() => props.onRemove(item.id)}>Remove</button>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div></>

  )
}

export default ProductManager