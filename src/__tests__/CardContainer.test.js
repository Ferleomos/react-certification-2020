import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import CardDetails from "../components/Container/CardDetails.component";

describe('validate cards works properly', () => {

    test('render cards contains elements', () => {
        render(<CardDetails />);
        
        const appC = screen.getByRole('heading');
        expect(appC).toBeInTheDocument();
    });

    test('applies default styles', () => {
        const hdr = renderer.create(<CardDetails />).toJSON();
        expect(hdr).toHaveStyleRule('overflow', 'hidden');
    });
});




