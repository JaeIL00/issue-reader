import styled from "styled-components";

import loadingSpinnerSVG from "../../assets/loading-spinner.svg";

const LoadingSpinner = () => {
    return (
        <Container>
            <SpinnerBox>
                <img src={loadingSpinnerSVG} width="100%" height="100%" />
            </SpinnerBox>
            <Background />
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    margin-left: -15vw;
    display: flex;
    justify-content: center;
    align-items: center;
    touch-action: none;
`;
const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #e8e8e8;
    opacity: 0.4;
`;
const SpinnerBox = styled.div`
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 1.7rem;
    padding: 0.1rem;
    background-color: #fff;
    box-shadow: 0 0 8px 0 #a5a5a5;
    z-index: 1;
`;

export default LoadingSpinner;
