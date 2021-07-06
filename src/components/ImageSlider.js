import React from "react"
import styled from "styled-components"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        cssEase: 'linear',
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider/1.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider/2.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider/3.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider/4.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider/5.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider/6.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider/7.jpg" alt="" />
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider

const Carousel = styled(Slider)`
    padding-top: 20px;
    margin: 0 35px 0 35px;

    ul li button {
        &:before {
            font-size: 10px;
            opacity: 1;
            color: rgb(150, 158, 171);
        }
    }

    .slick-dots {
        bottom: 10px;
        display: block;
        list-style: none;
        margin: 0px;
        padding: 0px;
        position: absolute;
        right: 20px;
        text-align: right;
        width: 100%;

        z-index: 10;

        @media only screen and (min-width: 1026px) {
            bottom: 20px;
            right: 40px;
        }

        li {
            margin: 0;
        }
    }

    li.slick-active button::before {
        color: white;
    }

    .slick-list {
        overflow: visible;
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
`

const Wrap = styled.div`

    cursor: pointer;

    border: 7px solid transparent;
    border-radius: 5px;

    @media only screen and (min-width: 1026px) {
        border: 10px solid transparent;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            outline: 4px solid rgba(245, 245, 245, 0.8);
        }
    }
`
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