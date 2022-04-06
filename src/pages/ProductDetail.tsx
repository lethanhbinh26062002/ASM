import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../api/product';
import { ProductType } from '../types/product';

type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProduct(data);
    }
    getProduct();
  }, [id])
  
  return (
    <>
      <div><img src="https://media3.scdn.vn/img4/2021/04_01/KSFnjFifYLiUGe8sGQdZ.jpg" className="card-img-top" style={{width: 350}} alt="" /></div>
      <div><span>Tên sản phẩm : </span>{product?.name}</div>
      <div><span>Giá : </span>{product?.price}</div>
      <div><span>Mô tả </span>{product?.description}</div>
      <div><button className="text-left btn btn-gradient-primary mr-2">Add to card</button></div>
    </>
  )
}

export default ProductDetail