import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from "../../providers/StateManagement/StateGlobal.provider";

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
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const ThemeButton = styled.input.attrs({type: 'checkbox'})`
   margin: 0px 15px;
`;

function ThemeSelector(){
     const { dispatch, state } = useGlobalContext();
     const { theme } = state;
    
    return(
        <ThemeContainer>
            <ThemeButton
            onClick={() => {
                dispatch({
                    type: 'setGlobalTheme',
                    value: theme === 'light' ? 'dark' : 'light',
                })
            }} />
            <ThemeLabel aria-label="Dark Mode">Dark Mode</ThemeLabel>
        </ThemeContainer>
    );
};

export default ThemeSelector;