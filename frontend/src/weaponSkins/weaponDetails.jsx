import React from 'react';
import './weaponDetailsPage.css'; // Importe o CSS

const WeaponDetails = ({ product }) => {
    return (
        <div className="weapon-details-container">
            <h2 className="weapon-details-title">Detalhes da Skin</h2>
            <div className="weapon-details-row">
                <div className="weapon-details-image-col">
                    <img src={product.urlImagem} alt={product.nomeSkin} className="weapon-details-image" />
                </div>
                <div className="weapon-details-info-col weapon-details-info">
                    <h3 className="weapon-details-info-title">{product.nomeSkin}</h3>
                    <p><strong>Qualidade:</strong> {product.qualidadeSkin}</p>
                    <p><strong>Descrição:</strong> {product.descricaoSkin}</p>
                    <p><strong>Coleção:</strong> {product.colecaoSkin}</p>
                    <p><strong>Nome da Arma:</strong> {product.nomeArma}</p>
                    <p><strong>Categoria da Arma:</strong> {product.categoriaArma}</p>
                    <p><strong>Preço Médio:</strong> ${product.precoMedio}</p>
                    <p><strong>Sites Disponíveis:</strong> {product.sitesDisponiveis}</p>
                    <p><strong>Melhor Preço:</strong> ${product.melhorPreco}</p>
                    <p><strong>Site com Melhor Preço:</strong> {product.siteMelhorPreco}</p>
                </div>
            </div>
        </div>
    );
};

export default WeaponDetails;
