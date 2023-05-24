import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Icon from "../../../assets/Home/homeIcon.png";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";

const Container = styled.section`
    background-color: var(--gradient-dark);
    width: 100%;
    height:auto;
    padding: 8rem 0 0 0;

    display:flex;
    flex-direction:column;
    align-items: center;
`;

const Content = styled.article`
    width: 60%;
    height:80vh;

    display:flex;
    flex-direction:column;
    align-items: center;
    gap:20px;
    
    .home-title{
        margin:0;

        font:var(--font-title);

        img{
            object-fit: fill;
            padding:0 1.9rem;
        }
    }

    .home-subtitle{    
        text-align: center;

        font:var(--font-subtitle);
    }
`;

const homePageContent = {
    'title':'Melhore suas habilidades!',
    'subtitle':'Uma maneira emocionante de melhorar suas habilidades de programação, competir com outros usuários   para alcançar o topo do ranking, e conseguir a sua primeira oportunidade no mercado de forma fácil.',
};

const buttonAction = () => {};

export default function Home(){

    return(
        <Container>

            <Content>
                <h1 className="home-title">
                    {homePageContent.title}
                    <img src={Icon} width={32}></img>
                </h1>

                <p className="home-subtitle">
                    {homePageContent.subtitle}
                </p>

                <Button className="banner" onClick={buttonAction}>
                    Comece agora
                </Button>
            </Content>

            <Banner />

            <Footer/>
        </Container>
    );
};

