import React from 'react';
import styled from 'styled-components';
import CardDetails from './CardDetails.component';

const CardContainer = styled.div`
    margin: 0px auto;
    flex: 1 1 0%;
    display: flex;
    flex-flow: row wrap;
    border: none;
    justify-content: center;
`;

function VideoContainer({loading, videoData, setVideo}){
    return(
        <CardContainer>
            {!loading &&
                videoData &&
                videoData.map((item, key) => (
                    <CardDetails 
                        key={key}
                        {...item}
                        onClick={() => setVideo(item)}>
                    </CardDetails>
                ))
            }
        </CardContainer>
    );
};

export default VideoContainer;