import React from 'react'
import { productDetailsData } from '../../common/constants'
import Product from '../card/product'
import './products.css'

function Products() {
  return (
    <div className="products_container">
        <h1 className="products_container-title">Best Sellers</h1>
        <div className="products_container-cards">
        {
          productDetailsData.map(product => {
            return <Product key={product.id} product={product} />
          })
        }
        </div>
    </div>
  )
}

export default Products;