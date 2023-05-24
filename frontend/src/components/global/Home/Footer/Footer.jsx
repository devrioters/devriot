import React from "react";
import styled from "styled-components";
import Cards from "./Card/CardFooter";

const Container = styled.section`
    width:100%;
    height:auto;
    padding:0 0 5rem 0;
    
    background-color: var(--color-white);
    color:#000;

    display:flex;
    justify-content: center;
`;

export default function Footer(){
    return(
        <Container>
            <Cards/>
        </Container>
    );
};