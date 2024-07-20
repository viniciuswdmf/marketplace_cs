import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        };

        this.images = [
            {
                url: 'https://thumbs.dreamstime.com/b/imagem-de-fundo-bonita-do-c%C3%A9u-da-natureza-64743176.jpg',
                link: 'http://localhost:8080/#/profile',
            },
            {
                url: 'https://files.tecnoblog.net/wp-content/uploads/2022/09/stable-diffusion-imagem.jpg',
                link: 'http://localhost:3000',
            },
            {
                url: 'https://media.licdn.com/dms/image/C4E03AQGZxRVPLcY94g/profile-displayphoto-shrink_100_100/0/1622840864995?e=1726704000&v=beta&t=_quSOFtk-gL7VePELFJA2pEI_jDwvC-PZBBGZTYXCCo',
                link: 'https://www.linkedin.com/in/brian-monteiro-rodrigues/',
            },
        ];

        this.goToPrev = this.goToPrev.bind(this);
        this.goToNext = this.goToNext.bind(this);
        this.autoSlide = this.autoSlide.bind(this);
    }

    componentDidMount() {
        this.autoSlide();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    autoSlide() {
        this.interval = setInterval(() => {
            this.goToNext();
        }, 7000); // 7 segundos
    }

    goToPrev() {
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex === 0) ? this.images.length - 1 : prevState.currentIndex - 1
        }));
    }

    goToNext() {
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex === this.images.length - 1) ? 0 : prevState.currentIndex + 1
        }));
    }

    render() {
        const { currentIndex } = this.state;
        const currentImage = this.images[currentIndex];

        return (
            <header className="carousel-container">
                <div className="carousel">
                    <a
                        href={currentImage.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className="carousel-slide active"
                        style={{ backgroundImage: `url(${currentImage.url})` }}
                    ></a>
                    <div className="carousel-controls">
                        <button className="carousel-control prev" onClick={this.goToPrev}>
                            ‹
                        </button>
                        <button className="carousel-control next" onClick={this.goToNext}>
                            ›
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
