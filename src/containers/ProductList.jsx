import React from 'react';
import { ProductItem } from '@components/ProductItem';
import { useGetProducts } from '@hooks/useGetProducts';
import '@styles/ProductList.scss'

const API = 'http://api.escuelajs.co/api/v1/products'

function ProductList() {

    const products = useGetProducts(API)

    return (
        <section className="main__container">
            <div className="cards__container">
                {
                    products.map(product => (
                        <ProductItem 
                            key = {product.id} 
                            price = {product.price}
                            title = {product.title}
                            images = {product.images}
                        />
                        
                    )
                    )
                }
                
            </div>
        </section>

    );
};

export { ProductList };