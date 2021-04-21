import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import VideoContainer from "./CardContainer.component";
import {mockYoutubeData} from '../../mock/youtubeData';


describe('validate cards works properly', () => {

    test('render cards contains elements', () => {
        const videoData = mockYoutubeData;
        
        render(<VideoContainer 
            loading={false}
            videoData={videoData}/>);
        
        const appC = screen.getAllByRole('heading');
        expect(appC).not.toBe(null);
    });
});




