import React from 'react';
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
    background-color: rgba(255, 255, 255, 0.60);
    border: none;
`;

function SearchBar(){
    return(
        <SearchContainer>
            <SearchInput placeholder='Search...'></SearchInput>
        </SearchContainer>
    );
};

export default SearchBar;