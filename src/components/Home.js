import React, { useEffect } from "react"
import styled from "styled-components"
import Header from './Header'
import ImageSlider from "./ImageSlider"
import Viewers from "./Viewers"
import Movies from "./Movies"
import db from "../firebase"
import { useDispatch } from "react-redux"
import { setMovies } from "../features/movie/movieSlice"

function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data()}
            })
            dispatch(setMovies(tempMovies));
        })
    }, [dispatch])


    return (
        <Container>
            <Header />
            <ImageSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: 100vh;
    padding: 0 calc(3.5 vw + 5px);
    position: relative;
    overflow-x: hidden;

    padding-bottom: 112px;

    &:before {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`
