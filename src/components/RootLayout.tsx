import { Outlet } from "react-router-dom";
import styled from "styled-components";

const RootLayout = () => {
    return (
        <GlobalContainer>
            <GlobalHeader>
                <h1>React Issues</h1>
            </GlobalHeader>
            <Main>
                <Outlet />
            </Main>
        </GlobalContainer>
    );
};

const GlobalContainer = styled.div`
    background-color: #fff;
    max-width: 70vw;
    margin: 0 auto;
`;
const GlobalHeader = styled.header`
    width: 72vw;
    padding-top: 8vh;
    margin-left: -1vw;
    font-size: 2.4rem;
    position: fixed;
    text-align: center;
    background-color: #fff;
`;
const Main = styled.main`
    padding-top: 15.6vh;
`;

export default RootLayout;
