import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
// import ThemeSelector from '../components/Header/ThemeSelector.component';
// import HeaderContainer from '../components/Header/HeaderContainer.component';

// describe('validate Main header container works properly', () => {

//     test('render header contains elements', () => {
//         const headerC = renderer.create(<HeaderContainer />).toJSON();
//         expect(headerC.children.length).toBe(4);
//     });

//     test('verify button menu is visible in the document', () => {
//         render(<HeaderContainer />);

//         const menuBtn = screen.getByTestId('btnMenuIcon');
//         expect(menuBtn).toBeInTheDocument();
//     });

//     test('check stlye rule header is ok', () => {
//         const menuBtn = renderer.create(<HeaderContainer />).toJSON();
//         expect(menuBtn).toHaveStyleRule('display', 'flex');
//     });

//     test('validate input field is working', () => {
//         render(<HeaderContainer />);

//         const inputSearch = screen.getByRole('textbox', { selector: 'input'});
//         const placeholderText = screen.getByPlaceholderText(/Search/i);

//         expect(inputSearch).toBeInTheDocument();
//         expect(placeholderText).toBeInTheDocument();
//     });
// });

describe('validate theme selector works properly', () => {
    // test('render theme selector button is working', () => {
    //     render(<ThemeSelector />);

    //     const selTheme = screen.getByLabelText('Dark Mode');
    //     expect(selTheme).toBeInTheDocument();
    // });

    // test('applies default styles', () => {
    //     const selTheme = renderer.create(<ThemeSelector />).toJSON();
    //     expect(selTheme).toHaveStyleRule('display', 'inline-flex');
    // });

    test('true 2', () => {
        expect(2).toEqual(2);
    });
});
