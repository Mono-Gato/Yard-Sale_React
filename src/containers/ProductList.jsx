import React from 'react';
import { ProductItem } from '@components/ProductItem';
import '@styles/ProductList.scss'

function ProductList() {
    return (
        <section className="main__container">
            <div className="cards__container">
                <ProductItem />
            </div>
        </section>

    );
};

export { ProductList };