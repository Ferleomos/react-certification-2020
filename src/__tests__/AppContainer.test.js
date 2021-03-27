import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App/App.component';

describe('validate app container works properly', () => {
    test('render app contains elements', () => {
        render(<App />);
        const appC = screen.getByRole('main');
        // screen.debug(appC);
        expect(appC).toHaveClass('container');
    });
});