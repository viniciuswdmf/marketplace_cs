import React from 'react';
import './custom.css';

const categories = [
    'Pistolas', 'Rifles', 'Snipers', 'Luvas', 'Facas', 
    'Escopetas', 'Metralhadoras', 'Agentes', 'Adesivos'
];

const CategoryMenu = (props) => {
    return (
        <div className="category-menu">
            {categories.map((category, index) => (
                <button
                    key={index}
                    className="category-button"
                    onClick={() => props.onSelectCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryMenu;
