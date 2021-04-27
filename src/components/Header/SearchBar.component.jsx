import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from "../../providers/StateManagement/StateGlobal.provider";

const SearchContainer = styled.div`
    border: none;
    display: inline-flex;
    width: 100%;
    margin: auto;
    margin-left: 25px;

    @media(max-width: 640px) {
        margin: 0px 10px 0px 5px;
    }

    @media(max-width: 400px) {
        justify-content: center;
    }
`;

const SearchInput = styled.input`
    width: 100%;
    max-width: 260px;
    min-height: 35px;
    max-height: 35px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.hForeground};
    border: none;
    padding-left: 20px;
    outline: none;
    color: ${(props) => props.theme.hBackground};
    font-weight: bold;
`;

const SearchBar = ({ disabled }) => {
    const [inputValue, setInputValue] = useState('');
    const { dispatch } = useGlobalContext();

    const changeValue = (e) => {
        e.preventDefault();
        let value = e.target.value;
        setInputValue(value);
    };

    const actionEnter = (event) => {
        if (event.key === "Enter") {
            if(inputValue){
                dispatch({ 
                    type: 'setQuerySearch', 
                    value: inputValue
                });
            }
        }
    };

    return(
        <SearchContainer>
            <SearchInput 
            type="text"
            placeholder='Search...'
            onChange={changeValue}
            value={inputValue}
            onKeyDown={actionEnter}
            disabled={disabled} />
        </SearchContainer>
    );
};

export default SearchBar;