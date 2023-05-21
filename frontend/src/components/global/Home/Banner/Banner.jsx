import React from "react";
import styled from "styled-components";
import CardItem from "./Card/CardElement";
import Poster from "./Posters/Poster";
import Poster2 from "./Posters/Poster2.jsx";

const Container = styled.section`
    width:100%;
    height: auto;
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
            <Poster2/>
        </Container>
    );
};