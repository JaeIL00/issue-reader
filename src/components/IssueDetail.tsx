import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import { IssuePropsTypes } from "../types";

const DATE_UNIT = ["년", "월", "일"];

const IssueDetail = ({ issueData }: IssuePropsTypes) => {
    const createTime: string = issueData.created_at
        .slice(0, 9)
        .split("-")
        .map((date, idx) => date + DATE_UNIT[idx])
        .join("");

    //‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시
    return (
        <Container>
            <Header>
                <ProfileImg
                    src={issueData.user.avatar_url}
                    alt="프로필 이미지"
                />
                <HeaderTitleBox>
                    <GrayText size="0.6rem" color="#999">
                        {createTime}
                    </GrayText>
                    <Title>{issueData.user.login}</Title>
                </HeaderTitleBox>
                <CommentNumber>
                    <span>{issueData.comments}</span>
                </CommentNumber>
            </Header>

            <ContentsBox>
                <Title>
                    {issueData.title}
                    <GrayText size="1rem" color="#777">
                        {" " + "#" + issueData.number}
                    </GrayText>
                </Title>
                <br />
                <ReactMarkdown children={issueData.body} />
            </ContentsBox>
        </Container>
    );
};

const Container = styled.section`
    width: 70vw;
`;
const Header = styled.header`
    width: 70vw;
    height: 4vh;
    position: fixed;
    display: flex;
    align-items: center;
    padding-bottom: 0.3rem;
    border-bottom: solid 0.1rem #333;
    background-color: #fff;
`;
const ProfileImg = styled.img`
    height: 100%;
`;
const HeaderTitleBox = styled.div`
    height: 100%;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;
const Title = styled.h5`
    font-size: 1.3rem;
`;
const GrayText = styled.span<{ size: string; color: string }>`
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
`;
const CommentNumber = styled.span`
    margin: auto;
`;
const ContentsBox = styled.article`
    padding-top: 6vh;
    overflow: hidden;
    word-wrap: break-word;
`;

export default IssueDetail;
