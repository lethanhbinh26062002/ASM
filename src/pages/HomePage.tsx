import React from 'react'
import { ProductType } from '../types/product'
import { Link } from 'react-router-dom';
type Props = {
  products: ProductType[];
}

const HomePage = (props: Props) => {
  return (
    <><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://intphcm.com/data/upload/banner-thoi-trang-nam-dep.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://dathangnhanh.net.vn/uploads/news/2018_02/banner-top-trang-chu-1-slide-19.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://lh4.googleusercontent.com/-qW3mCh8EuAg/YUNWrZEC8tI/AAAAAAAAAt0/zheiI52e8DIXUYI1ggoeiIHYRCekpMdCwCLcBGAsYHQ/s0/BANNER%2BWEB.11112.1.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <p style={{marginTop: 35}} />


    <div className="row row-cols-1 row-cols-md-4 g-4 mt-10">
        {props.products.map((item) => {
          return <div className="col">
            <div className="card h-100">
              <Link to={`/product/${item._id}`}>
                <img src="https://media3.scdn.vn/img4/2021/04_01/KSFnjFifYLiUGe8sGQdZ.jpg" className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <Link to={`/product/${item._id}`}>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price}</p>
                </Link>
              </div>
              <div className="card-footer">
                <small className="text-muted">{item._id}</small>
              </div>
            </div>
          </div>;
        })}
      </div></>
  )
}

export default HomePage