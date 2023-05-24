import React from "react";
import styled from "styled-components";
import ImgDev from "../../../../../assets/Banner/img_dev.png";

const Container = styled.article`
    width: 60%;
    height: 200px;
    max-width:1080px;
    max-height: 400px;
    padding:5rem;

    display:flex;
    flex-direction: column;
    gap:30px;
    position: relative;

    background-color:var(--gradient-dark);
    border-radius:8px;
`;

const PostTitle = styled.h1`
    width: 50%;

    text-align: justify;
    font:var(--font-title);
`;

const PostContent = styled.p`
    width: 50%;

    text-align: justify;
    font:var(--font-card-subtitle);
`;

const Img = styled.img`
    width: 350px;
    object-fit: fill;

    position: absolute;
    right: 50px;
    top:-50px;
`;

export default function Poster(){
    return(
        <Container>
            <PostTitle>
                Saia na frente
            </PostTitle>
            <PostContent>
                Aproveite a aba “Participe” para fazer parte de 
                bootcamps, cursos e mentorias onlines totalmentes 
                gratuitas.
                Fique por dentro da maioria dos cursos que estão 
                acontecendo nesse exato momento 
                e dê um boost na sua carreira profissional.
            </PostContent>

            <Img src={ImgDev}></Img>
        </Container>
    );
};

