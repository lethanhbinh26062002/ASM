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
      <div>{product?.name}</div>
      <div>{product?.price}</div>
      <div>{product?.description}</div>
    </>
  )
}

export default ProductDetail