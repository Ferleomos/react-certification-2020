import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/Header/Header.component';
import MenuIcon from '../components/Header/MenuButton.component';
import SessionButton from '../components/Header/SessionButton.component';
import ThemeSelector from '../components/Header/ThemeSelector.component';
import SearchBar from '../components/Header/SearchBar.component';
import HeaderContainer from '../components/Header/HeaderContainer.component';

describe('validate header container works properly', () => {
    test('render header contains elements', () => {
        const headerC = renderer.create(<HeaderContainer />).toJSON();
        expect(headerC.children.length).toBe(4);
    });
});

describe('validate header works properly', () => {

    test('render header is working', () => {
        render(<Header />);
        const heading = screen.getByRole('banner');
        expect(heading).toBeInTheDocument();
    });

    test('applies default styles', () => {
        const hdr = renderer.create(<Header />).toJSON();

        expect(hdr).toHaveStyleRule('min-height', '64px');
        expect(hdr).toHaveStyleRule('display', 'flex');
    });
});

describe('validate menu button renders', () => {

    test('render button properly', () => {
        render(<MenuIcon />);

        const btnIcon = screen.getByRole('button');
        expect(btnIcon).toBeInTheDocument();
    });

    test('render menu is working', () => {
        const menuBtn = renderer.create(<MenuIcon />).toJSON();
        expect(menuBtn).toHaveStyleRule('background-color', 'transparent');
    });
});

describe('validate session button works properly', () => {

    test('render session button is working', () => {
        render(<SessionButton />);

        const snButton = screen.getByRole('button');
        expect(snButton).toBeInTheDocument();
    });

    test('applies default styles', () => {
        const snButton = renderer.create(<SessionButton />).toJSON();
        expect(snButton).toHaveStyleRule('display', 'inline-flex');
    });
});

describe('validate search bar renders', () => {

    test('render search bar works properly', () => {
        render(<SearchBar />);
        
        const inputSearch = screen.getByRole('textbox', { selector: 'input'});
        const placeholderText = screen.getByPlaceholderText(/Search/i);

        expect(inputSearch).toBeInTheDocument();
        expect(placeholderText).toBeInTheDocument();
    });
});

describe('validate theme selector works properly', () => {
    test('render theme selector button is working', () => {
        render(<ThemeSelector />);
        
        const selTheme = screen.getByLabelText('Dark Mode');
        expect(selTheme).toBeInTheDocument();
    });

    test('applies default styles', () => {
        const selTheme = renderer.create(<ThemeSelector />).toJSON();
        expect(selTheme).toHaveStyleRule('display', 'inline-flex');
    });
});
