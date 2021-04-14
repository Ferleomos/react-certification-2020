import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import App from './App.component';
import videoApi from '../../providers/Youtube/Video.provider';
import mockYoutubeData from '../../mock/youtubeData';
import useVideoApi from "../../hooks/useVideoApi";

jest.mock('../../providers/Youtube/Video.provider', () => ({
    getVideoData: jest.fn(),
}));
jest.mock('../../hooks/useVideoApi', () => jest.fn(() => [false, jest.fn, mockYoutubeData]));

describe('validate app container works properly', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        
        videoApi.getVideoData.mockImplementation(async () => {
          return mockYoutubeData;
        });
    });

    test('render app contains elements', () => {
        render(<App />);
        const appC = screen.getByRole('main');
        expect(appC).toBeInTheDocument();
        expect(appC).toHaveClass('container');
    });

    test('disable search bar when loading', async  () => {
        useVideoApi.mockImplementation(() => [true, jest.fn(), null]);
        
        render(<App />);
        const inputSearch = screen.getByRole('textbox', { selector: 'input'});
        expect(inputSearch).toHaveAttribute('disabled');
    });
});