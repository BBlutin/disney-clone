import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { selectMovies } from "../features/movie/movieSlice"
import { useSelector } from "react-redux"

function Movies() {

    const movies = useSelector(selectMovies);

    let settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        lazyLoad: true,
        arrows: true,
        autoplay: false,
        cssEase: 'linear',
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
        ]
    }
    

    return (
        <Container>
            <h4>Nouveau sur Disney+</h4>
            <Carousel {...settings}>
                { movies && 
                    movies.map((movie) => (
                        <Wrap key={movie.id}>
                            <Link to={`detail/${movie.id}`}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    ))
                }
                <Wrap></Wrap>
            </Carousel>
            <h4>Notre sélection pour vous</h4>
            <Carousel {...settings}>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BB9176F5C8CAF15D28E2592293F35C9532F59D9AA4218D4A631A09A77AD950FD/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BB9176F5C8CAF15D28E2592293F35C9532F59D9AA4218D4A631A09A77AD950FD/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BB9176F5C8CAF15D28E2592293F35C9532F59D9AA4218D4A631A09A77AD950FD/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BB9176F5C8CAF15D28E2592293F35C9532F59D9AA4218D4A631A09A77AD950FD/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BB9176F5C8CAF15D28E2592293F35C9532F59D9AA4218D4A631A09A77AD950FD/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="" />
                </Wrap>
            </Carousel>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    margin-top: 40px;

    h4 {
        margin-top: 24px;
        margin-left: 42px;
        margin-bottom: 8px;
    }
`;

const Carousel = styled(Slider)`

    margin: 0 35px 0 35px;

    .slick-list {
        overflow: visible;
        margin: 0 -5px;
    }

    .slick-slide {
        padding: 0 5px;
    }

    .slick-arrow{
        height: 100%;
        display: flex;
        justify-content: center;
        opacity: 0!important;
        transition: all .25s ease-in-out; 

        width: calc(3.5vw + 24px);

        z-index: 1;

        &:hover {
            opacity: 1!important;
        }

        &.slick-prev {
            left: -40px;
        }

        &.slick-next {
            right: -40px;
        }
    }

    .slick-prev:before, .slick-next:before  {
        content: '' !important;
    }

    button {
        z-index: 1;
    }
`;

const Wrap = styled.div`
    cursor: pointer;

    border: 4px solid transparent;
    border-radius: 3px;

    @media only screen and (min-width: 1026px) {
        border: 7px solid transparent;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 2px;
        backface-visibility: hidden;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        transition-timing-function: ease-out;
        -webkit-font-smoothing: subpixel-antialiased;

        &:hover {
            transform: scale(1.05);
            outline: 3px solid rgba(245, 245, 245, 0.8);
        }
    }
`;

const PrevArrow = (props) => {
    const { className, onClick } = props
    return (
        <div 
            className={className}
            onClick={onClick}
        >
            <img width="26px" src="/images/left-arrow.svg" alt="" />
        </div>
    );
}

const NextArrow = (props) => {
    const { className, onClick } = props
    return (
        <div 
            className={className}
            onClick={onClick}
        >
            <img width="26px" src="/images/right-arrow.svg" alt="" />
        </div>
    );
}