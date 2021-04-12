import React from 'react'
import { productDetailsData } from '../../common/constants'
import Product from '../card/product'
import './products.css'

export default function Products({ product,showSnackBar }) {
  // Only show 5 products
const topFiveProducts = [...productDetailsData].slice(72,80);
  return (
    <div className="products_container">
        <h1 className="products_container-title">Best Sellers</h1>
        <div className="products_container-cards">
        {
          topFiveProducts.map(product => {
            return <Product key={product.id} product={product} showSnackBar={showSnackBar}/>
          })
        }
        </div>
    </div>
  )
}