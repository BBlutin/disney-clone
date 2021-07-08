import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { useHistory } from "react-router-dom"

import { selectUserName } from "../features/user/userSlice"
import { useSelector } from "react-redux"

function Login() {

    const userName = useSelector(selectUserName);
    const history = useHistory();

    useEffect(() => {
        if (userName) {
            history.push("/");
        }
    })

    return (
        <Container>
            <Header />
            <Wrap>
                <img className="logo" src="/images/logo.svg" alt="" />
                <h1>Tout ce que vous imaginez<br/> et encore +</h1>
                <Subtitle>
                    <h2>Maintenant avec</h2>
                    <img src="/images/star.png" width="91px" height="34px" alt="" />
                </Subtitle>
                <Price>
                    <Left>
                        <Text>
                            <h2>8.99 € <span>| Mois</span></h2>
                            <p>Sans engagement*. Voir conditions d'abonnement.</p>
                        </Text>
                        <button>S'INSCRIRE</button>
                    </Left>
                    <Right>
                        <Text>
                            <h2>89.90 € <span>| An</span></h2>
                            <p>Économisez plus de 15%**. Voir conditions d’abonnement.</p>
                        </Text>
                        <button>ECONOMISER SUR 12 MOIS</button>
                    </Right>
                </Price>
                <Info>
                    * Résiliation effective à la fin de la période de facturation en cours. ** Comparatif entre 12 mois d'abonnement mensuel et l'abonnement annuel.
                </Info>
            </Wrap>
        </Container>
    )
}

export default Login

const Container = styled.div`
  position: relative;
  height: 100vh;
  
  &::before {
        position: absolute;
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url("/images/login-background.jpg") center center / cover no-repeat fixed;

        z-index: -1;
  }
`;

const Wrap = styled.div`
    margin-left: 30px;
    height: calc(100vh - 75px);
    max-width: 680px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .logo {
        width: 150px;
    }
`;

const Price = styled.div`
    display: flex;
    align-items: stretch;
    width: 100%;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 15px;
    width: 50%;

    h2 {
        margin-top: 2px;
        margin-right: 15px;
        margin-bottom: 0;
    }

    span {
        font-size: 14px;
        opacity: 0.7;
    }

    p {
        font-size: 16px;
        margin-right: 15px; 
        opacity: 0.7;
        margin-top: 5px;
        font-weight: 400;
    }

    button {
        color: white;
        background: #0063e5;
        border: none;
        font-size: 17px;
        padding: 16.5px 14px;
        border-radius: 5px;

        cursor: pointer;

        &:hover {
            background: #0483ee;
        }
    }
`;

const Right = styled(Left)`
  
`;

const Subtitle = styled.div`
    display: flex;
    align-items: center;

    img {
        margin-left: 10px;
    }

`;

const Text = styled.div`
  
`;

const Info = styled.div`
    margin-top: 24px;
    font-size: 11px;
    color: hsla(0,0%,75.3%,.8);
`;
