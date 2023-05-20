import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Icon from "../../../assets/Home/homeIcon.png";

const Main = styled.main`
    background-color: var(--gradient-dark);
    width: 100%;
    height:70vh;
    padding: 8rem 0;

    display:flex;
    flex-direction:column;
    align-items: center;
`;

const Content = styled.article`
    width: 70%;
    height:auto;
    
    display:flex;
    flex-direction:column;
    align-items: center;
    gap:20px;
    
    .home-title{
        margin:0;

        font:var(--font-title);

        img{
            padding:0 1.2rem;
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
        <Main>

            <Content>
                <h1 className="home-title">
                    {homePageContent.title}
                    <img src={Icon}></img>
                </h1>

                <p className="home-subtitle">
                    {homePageContent.subtitle}
                </p>

                <Button className="banner" onClick={buttonAction}>
                    Comece agora
                </Button>
            </Content>

        </Main>
    );
};

