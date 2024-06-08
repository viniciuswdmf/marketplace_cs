import React from 'react';

const ProductCard = ({ product }) => {

    return (
        <div className="card h-100">
            {product.sale && <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>}
            <img className="card-img-top" src={product.image} alt={product.name} />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{product.name}</h5>
                    {product.rating && (
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            {Array.from({ length: product.rating }).map((_, i) => (
                                <div className="bi-star-fill" key={i}></div>
                            ))}
                        </div>
                    )}
                    {product.oldPrice && <span className="text-muted text-decoration-line-through">{product.oldPrice}</span>}
                    {product.price}
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href={product.link}>{product.buttonText}</a></div>
            </div>
        </div>
    );
};

export default ProductCard;
