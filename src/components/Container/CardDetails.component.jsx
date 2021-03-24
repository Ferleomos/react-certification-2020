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
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    overflow: hidden;
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
    font-size: 1.25rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    margin: 0px;
    line-height: 1;
`;

const DetailsDescription = styled.p`
    text-align: justify;
    color: rgba(0, 0, 0, 0.54);
    font-size: 0.875rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
`;

function CardDetails(props){
    return(
        <CardContainer>
            <CardHeader imgUrl={props.imgHeader}></CardHeader>
            <DetailsContainer>
                <DetailsTitle>{props.title}</DetailsTitle>
                <DetailsDescription>{props.description}</DetailsDescription>
            </DetailsContainer>
        </CardContainer>
    );
};

export default CardDetails;