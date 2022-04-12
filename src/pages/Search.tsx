import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { search } from '../api/product';
import { ProductType } from '../types/product';
type ProductSearch = {
  products: ProductType[];
}

const Search = (props: ProductSearch) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {props.products.map((item) => {
          return <div className="col">
            <div className="card h-100">
              <Link to={`/product/${item._id}`}>
                <img src="https://media3.scdn.vn/img4/2021/04_01/KSFnjFifYLiUGe8sGQdZ.jpg" className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <Link to={`/product/${item._id}`}>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price} USD</p>
                </Link>
              </div>
              <div className="card-footer">
                <small className="text-muted">{item._id}</small>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Search