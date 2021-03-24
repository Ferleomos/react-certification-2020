import React from 'react';
import styled from 'styled-components';
import { mockYoutubeData } from '../../mock/youtubeData.js';
import CardDetails from './CardDetails.component';

const CardContainer = styled.div`
    margin: 0px auto;
    flex: 1 1 0%;
    display: flex;
    flex-flow: row wrap;
    border: none;
    justify-content: center;
`;

function VideoContainer(){
    // console.log(mockYoutubeData);

    return(
        <CardContainer>
            {mockYoutubeData.map((item, key) => (
                <CardDetails 
                key={key}
                id={item.id.channelId}
                title={item.snippet.title}
                description={item.snippet.description}
                imgHeader={item.snippet.thumbnails.medium.url}>
                </CardDetails>
            ))}
        </CardContainer>
    );
};

export default VideoContainer;