import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 345px;
    height: 345px;
    margin: 10px;
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 5px 10px #84909b;
    overflow: hidden;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0px;

    &:hover{
        box-shadow: 0px 15px 25px -5px #84909b;
        transform: scale(1.03);
    }
    &:active{
        box-shadow: 0px 4px 8px #5f6461;
        transform: scale(0.98);
    }
`;

const CardHeader = styled.div`
    border: none;
    background-image: url(${props => props.imgUrl});
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 140px;
`;

const DetailsContainer = styled.div`
    flex-direction: row;
    padding: 16px;
`;

const DetailsTitle = styled.h2`
    text-align: justify;
    font-size: 1.10rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    margin: 0px;
    line-height: 1;
`;

const DetailsDescription = styled.p`
    text-align: justify;
    color: rgba(0, 0, 0, 0.54);
    font-size: 0.82rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
`;

function CardDetails({ snippet: { thumbnails, title, description }, ...props }){
    return(
        <CardContainer as="button" {...props}>
            <CardHeader imgUrl={thumbnails?.medium?.url}></CardHeader>
            <DetailsContainer>
                <DetailsTitle>{title}</DetailsTitle>
                <DetailsDescription>{description}</DetailsDescription>
            </DetailsContainer>
        </CardContainer>
    );
};

export default CardDetails;