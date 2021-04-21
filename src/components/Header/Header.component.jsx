import styled from 'styled-components';

const Header = styled.header`
    background-color: ${(props) => props.theme.hBackground};
    color: ${(props) => props.theme.hForeground};
    border-bottom: ${(props) => props.theme.headerBorder};
    display: flex;
    flex-direction: row;
    border: none;
    z-index: 1100;
    width: 100%;
    min-height: 64px;
    align-items: center;
    position: sticky;
    top: 0;
`;

export default Header;