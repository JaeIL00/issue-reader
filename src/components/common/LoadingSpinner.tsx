import styled from "styled-components";

import loadingSpinnerSVG from "../../assets/loading-spinner.svg";

const LoadingSpinner = () => {
    return (
        <Container>
            <SpinnerBox>
                <img
                    src={loadingSpinnerSVG}
                    alt="로딩 이미지"
                    width="100%"
                    height="100%"
                />
            </SpinnerBox>
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
    z-index: 3;
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
