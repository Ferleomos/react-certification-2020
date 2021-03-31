import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
    flex: none;
    width: 25px;
    height: 25px;
`;

const Button = styled.button`
    background-color: transparent;
    color: transparent;
    border: none;
    display: inline-flex;
    position: relative;
    align-items: center;
    margin: 0px 25px 0px 15px;

    @media(max-width: 640px) {
        margin: 0px 0px 0px 10px;
    }
`;

function MenuIcon(){
    return(
        <Button data-testid="btnMenuIcon">
            <Icon viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </Icon>
        </Button>
    );
}

export default MenuIcon;