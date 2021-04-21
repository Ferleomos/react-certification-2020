import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
    fill: ${(props) => props.theme.hForeground};
`;

const UserButton = styled.button`
    border: none;
    border-radius: 50%;
    height: 40px;
    min-width: 40px;
    background-color: #bdbdbd;
    color: transparent;
    display: inline-flex;
    margin: 0px 20px;
    justify-content: center;
    vertical-align: center;
    align-items: center;
    align-content: center;
    outline: none;
    
    @media(max-width: 640px) {
        display: none;
    }
`;

function SessionButton(){
    return(
        <UserButton>
            <Icon viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </Icon>
        </UserButton>
    );
};

export default SessionButton;