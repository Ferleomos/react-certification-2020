import React from 'react';
import Header from './Header.component';
import MenuIcon from "./MenuButton.component";
import SearchBar from './SearchBar.component';
import ThemeSelector from './ThemeSelector.component';
import SessionButton from './SessionButton.component';

function HeaderContainer({disabled}){
    return(
        <Header>
            <MenuIcon/>
            <SearchBar disabled={disabled}/>
            <ThemeSelector/>
            <SessionButton/>
        </Header>
    );
};

export default HeaderContainer;