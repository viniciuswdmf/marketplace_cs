import React from 'react';
import { Link } from 'react-router';

const ProductCardList = ({ product, onDelete }) => {
    const handleDelete = () => {
        const confirmed = window.confirm('Tem certeza de que deseja excluir este item?');
        if (confirmed) {
            onDelete(product);
        }
    };

    return (
        <tr>
            <td>{product.nomeSkin}</td>
            <td>{product.qualidadeSkin}</td>
            <td>{product.descricaoSkin}</td>
            <td>{product.colecaoSkin}</td>
            <td>{product.nomeArma}</td>
            <td>{product.categoriaArma}</td>
            <td>${product.precoMedio}</td>
            <td>${product.melhorPreco}</td>
            <td>{product.siteMelhorPreco}</td>
            <td>{product.sitesDisponiveis.join(', ')}</td>
            <td><img src={product.urlImagem} alt={product.nomeSkin} className="img-thumbnail" /></td>
            <td>
                <Link to={`/weaponEdit/${product._id}`} className="btn btn-primary">Alterar</Link>
            </td>
            <td>
                <button className="btn btn-danger" onClick={handleDelete}>Excluir</button>
            </td>
        </tr>
    );
};

export default ProductCardList;
