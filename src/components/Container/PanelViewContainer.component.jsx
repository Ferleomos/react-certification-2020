import React, { useEffect } from 'react';
import styled from 'styled-components';
import RelatedVideoContainer from "../Container/RelatedVideoDetails.component";
import useVideoApi from "../../hooks/useVideoApi";

const PanelContainer = styled.div`
  position: inherit;
  width: 75%;
  height: 100%;
  background-color: rgba(255, 255, 255);
  z-index: 3;
  cursor: default;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  float: left;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  cursor: default;
  overflow-y: auto;
  align-items: flex-end;
  width: 100%;
  height: 50%;
`;

const CloseButton = styled.button`
  background-color: rgba(255,255,255,0.55);
  width: 48px;
  height: 22px;
  position: fixed;
  display: flex;
  align-content: center;
  align-items: center;
  border-radius: 15px;
  outline: none;
  border: none;
  margin-top: -10px;
  margin-right: -15px;
  cursor: pointer;
`;

const Video = styled.iframe`
    min-height: 300px;
    /* min-width: 450px; */
    outline: none;
    border: none;
    height: 100%;
    width: 100%;
`;

const VideoTitle = styled.div`
    text-align: justify;
    font-size: 1.5rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    margin: 0px;
    line-height: 1;
    margin: 20px 0px 0px 0px;
    padding: 10px 10px 0px 10px;
    text-align: start;
    align-items: flex-start;
    width: 100%;
    align-content: flex-start;
`;

const VideoDescription = styled.p`
    text-align: justify;
    color: rgba(0, 0, 0, 0.54);
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    width: 100%;
    padding: 0px 10px 0px 10px;
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
`;

const Related = styled.aside`
  background-color: rgba(255, 255, 255);;
  width: 25%;
  height: 100%;
  float: right;
  display: flex !important;
  z-index: 3 !important;
  align-items: center;
  align-content: center;
  flex-direction: column;
  position: inherit;
  overflow-y: auto;
`;

function PanelViewContainer ({video, setVideo}) {
  const [loading, getData, loadedData] = useVideoApi();
  let mainVideoId = video?.id?.videoId ?? null;

  useEffect(() => {
    console.log('call from Related');
    getData(mainVideoId, false);
  }, [mainVideoId]);
  
  if (!video) {
      return null;
  }

  const closePanel = () =>{
    setVideo(null);
  };

  return(
    <>
      <PanelContainer>
        <Container>
          <CloseButton
          onClick={closePanel}>
            Close
          </CloseButton>
          <Video
          title={video.title}
          src={`https://www.youtube.com/embed/${mainVideoId}`}>
          </Video>
        </Container>
        <VideoTitle>{video.snippet.title}</VideoTitle>
        <VideoDescription>{video.snippet.description}</VideoDescription>
      </PanelContainer>
      <Related>
      {!loading &&
        loadedData &&
        loadedData.map((item, key) => (
            <RelatedVideoContainer 
              key={key}
              {...item}
              onClick={() => setVideo(item)}>
            </RelatedVideoContainer>
        ))
      }
      </Related>
    </>
  );
};

export default PanelViewContainer;