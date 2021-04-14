import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PanelViewContainer from "./PanelViewContainer.component";
import { mockYoutubeData } from "../../mock/youtubeData";
import { mockVideoData } from "../../mock/videoDataTest";

jest.mock('../../hooks/useVideoApi', () => jest.fn(() => [false, jest.fn, mockVideoData]));

describe('panel view is working', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('render main video panel', () => {
        render(<PanelViewContainer video={mockYoutubeData?.[0]}/>);
        expect(document.querySelectorAll('iframe').length).toBe(1);
    });

    test('render component title properly', () =>{
        render(<PanelViewContainer video={mockYoutubeData?.[0]}/>);
        expect(screen.queryByText(/^Wizeline$/i).tagName).toBe('DIV');
    });

    test('call setter properly', () =>{
        const mockSetVideo = jest.fn();
        render(<PanelViewContainer 
            video={mockYoutubeData?.[0]} 
            setVideo={mockSetVideo}/>);
        expect(mockSetVideo.mock.calls.length).toBe(0);
        fireEvent.click(screen.getByText(/^Wizeline$/i));
        expect(mockSetVideo.mock.calls.length).toBe(0);
        fireEvent.click(screen.getByText(/^Close$/i));
        expect(mockSetVideo.mock.calls.length).toBe(1);
    });
});