import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { ErrorUserGuide, IssueDetail } from "../components";
import { issueResponseAtom } from "../recoil/atoms";

const IssueDetailPage = () => {
    const { issueList } = useRecoilValue(issueResponseAtom);

    const param = useParams();

    const detailData = issueList.filter(
        (issue) => issue.id + "" === param.issueId
    );

    if (!detailData[0]) return <ErrorUserGuide />;

    return <IssueDetail issueData={detailData[0]} />;
};

export default IssueDetailPage;
