import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    padding: 10px;
    min-height: 120px;
    border: none;
    width: 100%;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: ${(props) => props.theme.hForeground};
    border-radius: 2px;
    box-shadow: 0px 5px 10px #84909b;

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
    height: 100%;
    width: 40%;
    float: left;
`;

const CardTitle = styled.h4`
    text-align: justify;
    font-size: 0.95rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    margin: 0px;
    line-height: 1;
    width: 60%;
    float: right;
    padding: 0px 0px 0px 15px;
    color: ${(props) => props.theme.hBackground};
`;

function RelatedVideoContainer({ snippet, ...props }){
    
    if(!snippet){
        return null;
    }

    return(
        <CardContainer as="button" {...props}>
            <CardHeader imgUrl={snippet?.thumbnails?.default?.url}></CardHeader>
            <CardTitle>{snippet?.title}</CardTitle>
        </CardContainer>
    );
};

export default RelatedVideoContainer;