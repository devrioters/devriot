import React, { useRef } from "react";
import styled from "styled-components";
import ArowLeft from "../../../../../assets/Home/Footer/arowLeft.svg"
import ArowRight from "../../../../../assets/Home/Footer/arowRight.svg"
import Bandeira from "../../../../../assets/Home/Footer/bandeira.svg"
import Globo from "../../../../../assets/Home/Footer/globo.svg"

import CardItem from "./CardItem";

const Wrapper = styled.section`
    width: 50%;
    height:auto;
    padding:1rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow-x: auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar{
        display: none;
        visibility: hidden;
    }
`;

const RowButtons = styled.div`
    width: 60%;
    padding:1rem 0;

    position: absolute;
    display:flex;
    justify-content: space-between;
`;

const ButtonsRow = styled.button`
    width: 5rem;
    height: 5rem;
    border-radius:500px;

    display: flex;
    align-items:center;
    justify-content: center;

    border:1px solid #707070;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    background-color: var(--color-white);
    color:#707070;
    will-change: scale;
    transition:all .4s;

    :hover{
        transform: scale(1.10);
        border-color: inherit;
    }
`

const cardsContent = [
    {
        icon: Bandeira,
        title: 'Aprimore',
        content: 'Não tem certeza se você está progredindo bem como programador? Empurre-se para os seus limites e mostre a si mesmo do que você realmente é feito.' 
    },
    {
        icon: Globo,
        title: 'Competir com colegas',
        content: 'Competir contra seus amigos, colegas e a comunidade em geral. Permita que a competição o motive a dominar seu ofício.' 
    },
];

export default function Card(){    
    const containerRef = useRef(null);

    const handleScroll = (direction) => {
        const container = containerRef.current;

        if (direction === 'left') {
          container.scrollLeft -= 200;
        } else {
          container.scrollLeft += 200;
        }
    };

    return(
        <Wrapper ref={containerRef} className="container" >

            {cardsContent.map((i, key) =>{
                return(
                    <CardItem icon={i.icon} title={i.title} content={i.content} key={key}/>
                );
            })};

            <RowButtons>
                <ButtonsRow onClick={() => handleScroll('left')}>
                    <img src={ArowLeft}/>
                </ButtonsRow>
                <ButtonsRow onClick={() => handleScroll('right')}>
                    <img src={ArowRight}/>
                </ButtonsRow>
            </RowButtons>
        </Wrapper>
    );
};
