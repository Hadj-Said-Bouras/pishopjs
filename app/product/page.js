import React from 'react'
import SinglProduct from '../../components/singleproduct'
import ProductsList from '../../components/products'
import ItemsHead from '../../components/itemshead'

function Product() {
    const relatedProducts = [
        {product:'Gamming Mouse', originalprice:'$120', compairedprice:'$160' },
        {product:'Gamming Mouse', originalprice:'$120', compairedprice:'$160' },
        {product:'Gamming Mouse', originalprice:'$120', compairedprice:'$160' },
        {product:'Gamming Mouse', originalprice:'$120', compairedprice:'$160' },
        {product:'Gamming Mouse', originalprice:'$120', compairedprice:'$160' },
    ]
  return (
    <div>
        <SinglProduct />
        <div className='flex flex-col   mt-80 gap-20'>
          <ItemsHead title='Related Items'/>
          <div className='flex flex-row justify-center flex-wrap'>

        {relatedProducts.map((product, index) => (
          
          <ProductsList key={index} product={product.product} originalprice={product.originalprice} compairedprice={product.compairedprice} />
          ))}
          </div>
        </div>
    </div>
    
  )
}

export default Product