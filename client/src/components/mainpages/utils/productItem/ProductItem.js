import React from 'react'
import BtnRender from './BtnRender'
import MetaData from '../MetaData'
function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

    return (
        <>
        <MetaData title= "Login"/>
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }
            <img src={product.images.url} alt="" />

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>Rs.    {product.price}</span>
                <p>{product.description}</p>
            </div>

            
            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
        </>
    )
}

export default ProductItem