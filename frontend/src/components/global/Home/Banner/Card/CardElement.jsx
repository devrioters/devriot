import React from "react";
import styled from "styled-components";
import Button from "../../../Button";
import Like from "../../../../../assets/Banner/like.png";
import Work from "../../../../../assets/Banner/work.png";
import Ranking from "../../../../../assets/Banner/ranking.png";

const Card = styled.article`
    width:300px;
    height: 300px;

    max-width: 300px;
    max-height:450px;
    padding: 2.5rem 1rem;

    display:flex;
    justify-content: space-between;
    align-items:center;
    flex-direction:column;

    color:black;
    background-color:var(--color-white);
    border-radius:12px;
    box-shadow: 0px 4px 9px  #0000004a;

    img{
        width:38px;
        margin:0 auto;
        object-fit: fill;
    }

    h1{
        text-align:center;
        
        font:var(--font-card-title);
    }

    p{
        text-align:center;
        font:var(--font-card-subtitle);
    }

    .card{
        width:fit-content;    
        transition:all .4s;
        border:none;
    }
    
    .card:hover{
        filter:brightness(.9);
    }
`

const cardsContent = [
    {
        icon: Like,
        title: 'Faça exercícios práticos',
        content: 'Com nossa plataforma você vai ter acesso a exercícios práticos, além de feedbacks de como você está se saindo a cada exercício.',
        footer: 'Evoluir nunca foi tão fácil!',
        buttonContent: 'Comece a codar'
    },
    {
        icon: Ranking,
        title: 'Sistema de ranking',
        content: 'A medida que você progride, seu ranking aumenta! Consequentemente, os exercícios vão ficando mais difíceis.',
        footer: 'Dispute nas ligas e eventos para cada ranking',
        buttonContent: 'Upe seu ranking'
    },
    {
        icon: Work,
        title: 'Vagas',
        content: 'Consiga vagas de emprego de modo simplificado por meio da nossa plataforma de vagas integrada.',
        footer: 'Nunca foi tão fácil conseguir a tão sonhada primeira vaga',
        buttonContent: 'Veja as vagas'
    },
];

const cardButton = () =>{};

const CardElement = ({ cardsContent }) => {
    return (
      <>
        {cardsContent.map((card, key) => (
          <Card key={key}>
            <img src={card.icon} alt="Ícone" />
            <h1>{card.title}</h1>
            <p>{card.content}</p>
            <p>{card.footer}</p>
            <Button className="card" onClick={cardButton}>{card.buttonContent}</Button>
          </Card>
        ))}
      </>
    );
  };
  
export default function CardItem(){
    return(
        <>
            <CardElement cardsContent={cardsContent}></CardElement>
        </>
    )
};