import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { ErrorUserGuide, IssueDetail } from "../components";
import { issueResponseAtom } from "../recoil/atoms";

const IssueDetailPage = () => {
    const issueResponse = useRecoilValue(issueResponseAtom);

    const param = useParams();

    const detailData = issueResponse.filter(
        (issue) => issue.id + "" === param.issueId
    );

    if (!detailData[0]) return <ErrorUserGuide />;

    return <IssueDetail issueData={detailData[0]} />;
};

export default IssueDetailPage;
