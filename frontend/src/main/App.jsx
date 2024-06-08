
import React from 'react';
import Header from '../common/template/header';
import Menu from '../common/template/menu.jsx';
import Footer from '../common/template/footer';
import Routes from './routes';
import ProductGrid from '../common/products/ProductGrid.jsx';

const products = [
    {
        name: 'Fancy Product',
        price: '$40.00 - $80.00',
        image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        link: '#',
        buttonText: 'View options',
    },
    {
        name: 'Special Item',
        oldPrice: '$20.00',
        price: '$18.00',
        image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        link: '#',
        buttonText: 'Add to cart',
        sale: true,
        rating: 5,
    },
    {
        name: 'Sale Item',
        oldPrice: '$50.00',
        price: '$25.00',
        image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        link: '#',
        buttonText: 'Add to cart',
        sale: true,
    },
    {
        name: 'Popular Item',
        price: '$40.00',
        image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        link: '#',
        buttonText: 'Add to cart',
        rating: 5,
    },
    // Adicione mais produtos conforme necessário
];

const App = () => {

    return (
        <div>
            <Menu />
            <Header />
            <ProductGrid products={products} />
            <Footer />
        </div>
    );
};

export default App;
