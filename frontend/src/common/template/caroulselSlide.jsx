import React from 'react';

const CarouselSlide = ({ image, isActive }) => (
    <a
        href={image.link}
        className={`carousel-slide ${isActive ? 'active' : ''}`}
        style={{ backgroundImage: `url(${image.url})` }}
    ></a>
);

export default CarouselSlide;
