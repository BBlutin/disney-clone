import React from 'react'
import styled from 'styled-components';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <video loop autoPlay playsInline>
                    <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
                </video>
                <Logo>
                    <img src="/images/viewers-disney.png" alt="" />
                </Logo>
            </Wrap>
            <Wrap>
                <video loop autoPlay playsInline>
                    <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
                </video>
                <Logo>
                    <img src="/images/viewers-pixar.png" alt="" />
                </Logo>
            </Wrap>
            <Wrap>
                <video loop autoPlay playsInline>
                    <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
                </video>
                <Logo>
                    <img src="/images/viewers-marvel.png" alt="" />
                </Logo>
            </Wrap>
            <Wrap>
                <video loop autoPlay playsInline>
                    <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
                </video>
                <Logo>
                    <img src="/images/viewers-starwars.png" alt="" />
                </Logo>
            </Wrap>
            <Wrap>
                <video loop autoPlay playsInline>
                    <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
                </video>
                <Logo>
                    <img src="/images/viewers-national.png" alt="" />
                </Logo>
            </Wrap>
            <Wrap>
                <video loop autoPlay playsInline>
                    <source src="/videos/1608169994-brand-star.mp4" type="video/mp4" />
                </video>
                <Logo>
                    <img src="/images/viewers-star.png" alt="" />
                </Logo>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    padding: 0 48px 0 48px;
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(6, minmax(0, 1fr));

    @media only screen and (max-width: 800px) {
        padding: 0 42px 0 42px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`;

const Logo = styled.div`
    position: relative;
    height: 100%;
`;


const Wrap = styled.div`

    position: relative;
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 7px;
        background-image: linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50));
        transition: all 250ms ease-in-out;

        &:hover {
            background-image: none;
        }
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }

    video {
        border-radius: 7px;
        position: absolute;
        object-fit: fill;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
`;