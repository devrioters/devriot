import React from "react";
import styled from "styled-components";
import cSharpIcon from "../../../../../assets/Banner/languageIcons/cSharp.svg";
import cPlusIcon from "../../../../../assets/Banner/languageIcons/cPlus.svg";
import javaIcon from "../../../../../assets/Banner/languageIcons/java.svg";
import jsIcon from "../../../../../assets/Banner/languageIcons/js.svg";
import pythonIcon from "../../../../../assets/Banner/languageIcons/python.svg";
import promptImage from "../../../../../assets/Banner/prompt.svg";

const Container = styled.article`
    width: 65%;
    height: 200px;
    max-width:1080px;
    max-height: 400px;
    padding:7rem;

    margin:9rem 0 8rem 0;
    
    display:flex;
    flex-direction: column;
    gap:30px;
    position: relative;

    background-color:var(--gradient-dark);
    border-radius:8px;
`;

const PostTitle = styled.h1`
    width: 50%;

    text-align: center;
    font:var(--font-title);
`;

const PostContent = styled.p`
    width: 50%;

    text-align: justify;
    font:var(--font-card-subtitle);
`;

const Img = styled.img`
    object-fit: contain;

    position: absolute;
    right:-50px;
    top:-30px;
`;

const ImgIcons = styled.img`
    width:80px;

    position:absolute;
    top:${props => props.top};
    left:${props => props.left};
`;

const Icons = [
    {
        python:pythonIcon,
    },
    {
        js:jsIcon
    },
    {
        java:javaIcon
    },
    {
        cPlus:cPlusIcon
    },
    {
        cSharp:cSharpIcon
    },
]

export default function Poster2(){
    return(
        <Container>
            <PostTitle>
                Do seu jeito
            </PostTitle>
            <PostContent>
                Oferecemos suporte a 14 linguagens de codificação populares. Em nosso núcleo, DevRiot é sobre desenvolvedores. Nossas poderosas ferramentas de desenvolvimento, como o Playground, ajudam você a testar, depurar e até escrever seus próprios projetos online.
            </PostContent>

            <Img src={promptImage} width={400}/>

            {Icons.map((icon, key)=>{
                const index = Object.keys(icon)[0];
                const value = icon[index];

                const bannerWidth = 500;
                const bannerHeight = 200;
                const iconSize = 60;

                const x = Math.random() * (bannerWidth - iconSize) + 'px';
                const y = Math.random() * (bannerHeight - iconSize)  + 'px';

                return(
                    <ImgIcons src={value} key={key} top={y} left={x}/>
                );
            })}

        </Container>
    );
};