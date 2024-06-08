import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
    console.log('Products in grid:', products);

    if (!products) {
        return <div>Loading products...</div>;
    }

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {products.map((product, index) => (
                        <div className="col mb-5" key={index}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
