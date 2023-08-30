import styled from "styled-components";
import wantedAdImgSrc from "../../assets/wanted-ad.jpeg";

const AdImg = () => {
    return (
        <a href="https://www.wanted.co.kr/">
            <WantedImg src={wantedAdImgSrc} alt="원티드 광고 이미지" />
        </a>
    );
};
const WantedImg = styled.img`
    width: 100%;
`;

export default AdImg;
