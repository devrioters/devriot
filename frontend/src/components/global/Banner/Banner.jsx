import React from "react";
import styled from "styled-components";
import CardItem from "./Card/CardElement";
import Poster from "./Poster/Poster";

const Container = styled.section`
    width:100%;
    height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color:var(--color-white);
`
const CardZone = styled.section`
    width: 90%;
    height: auto;

    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction:row;
    gap:80px;
    
    position:relative;
    top:-120px;
`

export default function Banner(){
    return(
        <Container>
            <CardZone>
                <CardItem/>
            </CardZone>

            <Poster/>
        </Container>
    );
};