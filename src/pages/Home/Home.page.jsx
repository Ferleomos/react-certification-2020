import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import VideoContainer from '../../components/Container/CardContainer.component';
import HeaderContainer from "../../components/Header";
import useVideoApi from "../../hooks/useVideoApi";
import './Home.styles.css';
import PanelViewContainer from '../../components/Container/PanelViewContainer.component'

const GridContainer = styled.div`
    display: ${props => props.videoView};
    flex-wrap: wrap;
    box-sizing: border-box;
    position: inherit;
    z-index: 1;
`;

const ContainerHeader = styled.div`
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
    border: none;
  
    h2{
      font-size: 3.5rem;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 300;
      line-height: 1;
      letter-spacing: -0.00833em;
    }
`;

const ContainerBody = styled.div`
    flex-grow: 0;
    /* max-width: 100%; */
    flex-basis: 100%;
    border: none;
    width: 100%;
    padding: 20px;
    margin: 0px auto;
    flex: 1 1 0%;
    display: flex;
    flex-flow: row wrap;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100vh;
`;


function HomePage() {
  const sectionRef = useRef(null);
  const [inputText, setText] = useState('penguin');
  const [loading, getData, loadedData] = useVideoApi();
  const [video, setVideo] = useState(null);

  useEffect(() => {
      getData(inputText, true);
      setVideo(null);
  }, [inputText]);

  return (
    <>
    <HeaderContainer
      onInputChange={setText}
      inputText={inputText}
      disabled={loading}
    ></HeaderContainer>
    <section className="homepage" ref={sectionRef}>
      <GridContainer videoView={video ? 'none' : 'block'}>
        <ContainerHeader>
          {!loadedData 
          ? <></>
          : <h2>Welcome to the Challenge!</h2>} 
        </ContainerHeader>
        <ContainerBody>
          <VideoContainer
            videoData={loadedData}
            loading={loading}
            setVideo={setVideo}
          ></VideoContainer>
        </ContainerBody>
      </GridContainer>
      <PanelViewContainer video={video} setVideo={setVideo}>

      </PanelViewContainer>
    </section>
    </>
  );
}

export default HomePage;
