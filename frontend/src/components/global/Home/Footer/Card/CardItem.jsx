import React from "react";
import styled from "styled-components";

const Card = styled.article`
    width: auto;
    height: 290px;
    max-width: 240px;
    max-height: 450px;
    padding:0 3rem;
    margin:0 2rem;

    border-radius:.5rem;
    flex-shrink: 0;
    box-shadow: 0px 3px 6px #8B8CE3;

    color:#000;
    font-family: 'Montserrat';

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: justify;
`;

const Content = styled.p`
    padding:1rem;
    font-size: 1.5rem;
`;

const Title = styled.h1`  
    text-align: center;
    width: 100%;
    font-size: 2.3rem;
    
`
export default function CardItem(props){
    return(
        <Card>
            <img src={props.icon}/>
            <Title>{props.title}</Title>
            <Content>{props.content}</Content>
        </Card>
    );
}
