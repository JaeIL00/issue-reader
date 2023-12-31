import styled from "styled-components";
import { Link } from "react-router-dom";

import { IssuePropsTypes } from "../types";
import dateFormatting from "../utils/dateFormatting";

const IssueListItem = ({ issueData }: IssuePropsTypes) => {
    const createTime = dateFormatting(issueData.created_at);

    return (
        <li>
            <ItemLink to={`issue/${issueData.id}`}>
                <ProfileImg
                    src={issueData.user.avatar_url}
                    alt="이슈 등록자 프로필 사진"
                />
                <TextBox>
                    <TitleBox>
                        <TitleLimitBox>
                            <IssueTitle>{issueData.title}</IssueTitle>
                        </TitleLimitBox>
                        <IssueNumber>{"#" + issueData.number}</IssueNumber>
                    </TitleBox>
                    <div>
                        <span>{issueData.user.login}</span>
                        <IssueCreateDate>{createTime}</IssueCreateDate>
                    </div>
                </TextBox>
                <CommentsBox>
                    <span>{issueData.comments}</span>
                </CommentsBox>
            </ItemLink>
        </li>
    );
};

const ItemLink = styled(Link)`
    background-color: transparent;
    width: 100%;
    height: 4rem;
    padding: 0.4rem 0.5rem;
    margin-bottom: 1.2rem;
    display: flex;
    border: solid 0.1rem #666;
    border-radius: 0.7rem;
    text-align: left;
    color: #333;
    text-decoration: none;
`;
const ProfileImg = styled.img`
    height: 100%;
    border-radius: 2rem;
    margin: auto 0;
    box-shadow: 0 0 2px 1px rgb(85, 85, 85, 0.3);
`;
const TextBox = styled.div`
    width: 70%;
    height: 100%;
    padding-left: 0.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const TitleBox = styled.div`
    display: flex;
    align-items: center;
`;
const TitleLimitBox = styled.div`
    max-width: 60%;
    margin-right: 0.3rem;
`;
const IssueTitle = styled.h3`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0.8rem;
    font-weight: 600;
`;
const IssueNumber = styled.span`
    font-size: 0.6rem;
    color: #888;
`;
const IssueCreateDate = styled.span`
    font-size: 0.5rem;
    color: #888;
    margin-left: 0.5rem;
`;
const CommentsBox = styled.div`
    margin: auto;
`;

export default IssueListItem;
