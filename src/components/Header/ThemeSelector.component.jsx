import React from 'react';
import styled from 'styled-components';

const ThemeContainer = styled.div`
    border: none;
    display: inline-flex;
    justify-content: flex-end;
    vertical-align: center;
    width: 100%;
    margin: auto;
    align-items: center;
    padding: 15px;

    @media(max-width: 640px) {
        display: none;
    }
`;

const ThemeLabel = styled.label`
    color: Black;
    font-weight: bold;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const ThemeButton = styled.input.attrs({type: 'checkbox'})`
   margin: 0px 15px;
`;

function ThemeSelector(){
    return(
        <ThemeContainer>
            <ThemeButton>

            </ThemeButton>
            <ThemeLabel aria-label="Dark Mode">Dark Mode</ThemeLabel>
        </ThemeContainer>
    );
};

export default ThemeSelector;