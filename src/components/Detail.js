import React from 'react'
import styled from "styled-components"
import Header from './Header'

function Detail() {
    return (
        <Container>
            <Header />
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9C5071904A764968A80703D20149CFA14FF0F570E023BB46065419B308260C69/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
                <Gradient />
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2B51D6A65271332D3250717796ECC2B35A50A2A0056881F982C46F5ED93E34D5/scale?width=1440&aspectRatio=1.78" alt="" />
            </ImageTitle>
            <SubTitle>
                2021 - Science-fiction, Fantastique, Action et aventure
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
            <Resume>
                Le redoutable méchant Loki (Tom Hiddleston) reprend son rôle de Dieu de la Malice dans "Loki",  la nouvelle série des studios Marvel qui se déroule après "Avengers : Endgame". Kate Herron en est la réalisatrice et Michael Waldron le principal scénariste.
            </Resume>
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

const Resume = styled.p`
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 28px;
    max-width: 874px;
    font-size: 17px;
`;