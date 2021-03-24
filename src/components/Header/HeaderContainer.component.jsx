import React from 'react';
import Header from './Header.component';
import MenuIcon from "./MenuButton.component";
import SearchBar from './SearchBar.component';
import ThemeSelector from './ThemeSelector.component';
import SessionButton from './SessionButton.component';

function HeaderContainer(){

    // console.log('%c Create my components', 'color: cornflowerblue; font-weight:bold');
    // console.table(['a','b','c']);

    return(
        <Header>
            <MenuIcon></MenuIcon> 
            <SearchBar></SearchBar>
            <ThemeSelector></ThemeSelector>
            <SessionButton></SessionButton>
        </Header>
    );
};

export default HeaderContainer;