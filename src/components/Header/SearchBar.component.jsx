import React, { useState } from 'react';
import styled from 'styled-components';

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

const SearchBar = ({ initSearchQuery, onChange, disabled }) => {
    const [inputValue, setInputValue] = useState(initSearchQuery);

    const changeValue = (e) => {
        e.preventDefault();
        let value = e.target.value;
        setInputValue(value);
    };

    const actionEnter = (event) => {
        if (event.key === "Enter") {
            if(inputValue){
                onChange(inputValue);
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
            disabled={disabled}
            >
            </SearchInput>
        </SearchContainer>
    );
};

export default SearchBar;