import React, { useRef } from 'react';
//import { Link, useHistory } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CardContainer from '../../components/Container';

//import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
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
  //const history = useHistory();
  const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  return (
    <section className="homepage" ref={sectionRef}>
      <GridContainer>
        <ContainerHeader>
          <h2>Welcome to the Challenge!</h2>
        </ContainerHeader>
        <ContainerBody>
          <CardContainer></CardContainer>
        </ContainerBody>
      </GridContainer>
      
      {/* {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )} */}
    </section>
  );
}

export default HomePage;
