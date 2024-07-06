import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
    return (
        <div className="card h-100">
            <Link to={`/weaponDetails/${product._id}`}>
                <img className="card-img-top" src={product.urlImagem} alt={product.nomeSkin} />
            </Link>
            <div className="card-body p-4">
                <div className="text-center">
                    <Link to={`/weaponDetails/${product._id}`}>
                        <h5 className="fw-bolder">{product.nomeSkin}</h5>
                    </Link>
                    <p>Qualidade: {product.qualidadeSkin}</p>
                    <p>Preço Médio: ${product.precoMedio}</p>
                    <p>Melhor Preço: ${product.melhorPreco}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
