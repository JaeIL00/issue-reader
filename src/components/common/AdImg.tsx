import styled from "styled-components";
import wantedAdImgSrc from "../../assets/wanted-ad.jpeg";
import { Suspense, useState } from "react";

const AdImg = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <Container>
            <a href="https://www.wanted.co.kr/">
                <WantedImg
                    src={wantedAdImgSrc}
                    alt="원티드 광고 이미지"
                    onLoad={() => setIsLoading(false)}
                />
            </a>
            {isLoading && <Skeleton />}
        </Container>
    );
};
const Container = styled.figure`
    position: relative;
    width: 100%;
    height: 15rem;
    overflow: hidden;
`;
const WantedImg = styled.img`
    width: 100%;
`;
const Skeleton = styled.img`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 96%;
    background-color: #c7c7c7;
`;

export default AdImg;
