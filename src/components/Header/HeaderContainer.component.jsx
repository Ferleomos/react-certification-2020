import React from 'react';
import Header from './Header.component';
import MenuIcon from "./MenuButton.component";
import SearchBar from './SearchBar.component';
import ThemeSelector from './ThemeSelector.component';
import SessionButton from './SessionButton.component';

function HeaderContainer({onInputChange, inputText, disabled}){
    return(
        <Header>
            <MenuIcon></MenuIcon> 
            <SearchBar 
              initSearchQuery={inputText} 
              onChange={onInputChange}
              disabled={disabled}
            ></SearchBar>
            <ThemeSelector></ThemeSelector>
            <SessionButton></SessionButton>
        </Header>
    );
};

export default HeaderContainer;