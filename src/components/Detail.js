import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Header from './Header'

import { useParams } from 'react-router-dom'

import db from '../firebase'

function Detail() {

    const { id } = useParams();
    const [ movie, setMovie ] = useState('');

    useEffect(() => {
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                setMovie(doc.data());
            } else {
                //redirect to home page
            }
        })

    })

    return (
        <Container>
            <Header />
            {movie && (
            <>
                <Background>
                <img src={movie.backgroundImg} alt={movie.title} />
                <Gradient />
                </Background>
                <ImageTitle>
                    <img src={movie.titleImg} alt={movie.title} />
                </ImageTitle>
                <SubTitle>
                    {movie.subTitle}
                </SubTitle>
                <Controls>
                    <PlayButton>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>LECTURE</span>
                    </PlayButton>
                    <TrailerButton>
                        <span>BANDE-ANNONCE</span>
                    </TrailerButton>
                    <AddButton>
                        <span>+</span>
                    </AddButton>
                    <GroupButton>
                        <img 
                            src="/images/group-icon.png" 
                            alt="" 
                            onMouseOver={e => (e.currentTarget.src = '/images/group-icon-black.png')}
                            onMouseOut={e => (e.currentTarget.src ='/images/group-icon.png')}
                        />
                    </GroupButton>
                </Controls>
                <Description>
                    {movie.description}
                </Description>
            </>
            )}
        </Container>
    )
}

export default Detail

const Container = styled.main`
    min-height: 100vh;
    padding: 0 calc(3.5 vw + 5px);
    display: flex;
    flex-direction: column;
    padding-bottom: 112px;
    position: relative;
    overflow-x: hidden;

    &:before {
        background: rgb(26, 29, 41);
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    width: 100%;

    opacity: 0.8;

    img {
        width: 100vw;
    }

    z-index: -1;
`;

const Gradient = styled.div`
    background-image: radial-gradient(farthest-side at 73% 21%, transparent, rgb(26, 29, 41));
    position: absolute;
    inset: 0px;
`;

const ImageTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 30px;

    img {
        width: 35vw;
        max-width: 300px;
        min-width: 100px;
    }
`;

const SubTitle = styled.div`
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 28px;
    margin-top: 10px;
    font-size: 12px;
    max-width: 874px;
`;

const Controls = styled.div`
    margin-left: 40px;
    margin-right: 40px;
    display: flex;
    align-items: center;
`;

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 13px;
    font-weight: bold;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgba(249, 249, 249, 1);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    transition: all 150ms ease-in-out;

    &:hover {
        background-color: rgba(198, 198, 198, 1);
    }

    img {
        margin-right: 10px;
    }
`;

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: 1px solid white;

    &:hover {
        color: black;
        background-color: rgba(130, 130, 130, 1);
        border: 1px solid rgba(130, 130, 130, 1);
    }
`;

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    transition: all 150ms ease-in-out;

    &:hover {
        background-color: white;

        span {
            color: black;
        }
    }

    span {
        font-size: 30px;
        color: white;
    }


`;

const GroupButton = styled(AddButton)`
`;

const Description = styled.p`
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 28px;
    max-width: 874px;
    font-size: 17px;
`;