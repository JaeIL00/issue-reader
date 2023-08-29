import { Outlet } from "react-router-dom";
import styled from "styled-components";

const RootLayout = () => {
    return (
        <GlobalContainer>
            <GlobalHeader>
                <h1>React Issues</h1>
            </GlobalHeader>
            <main>
                <Outlet />
            </main>
        </GlobalContainer>
    );
};

const GlobalContainer = styled.div`
    padding-top: 8vh;
    max-width: 40vw;
    margin: 0 auto;
`;
const GlobalHeader = styled.header`
    display: flex;
    justify-content: center;
    font-size: 2.4rem;
`;

export default RootLayout;
