import React from 'react'
import { ProductType } from '../types/product'
import { Link } from 'react-router-dom';
type Props = {
  products: ProductType[];
}

const HomePage = (props: Props) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {props.products.map((item) => {
        return <div className="col">
          <div className="card h-100">
            <Link to={`/product/${item.id}`}>
              <img src="https://media3.scdn.vn/img4/2021/04_01/KSFnjFifYLiUGe8sGQdZ.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <Link to={`/product/${item.id}`}>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
              </Link>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      })}
    </div>
  )
}

export default HomePage