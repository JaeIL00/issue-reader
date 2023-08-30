import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { IssueDetail } from "../components";
import { issueResponseAtom } from "../recoil/atoms";

const IssueDetailPage = () => {
    const va = useRecoilValue(issueResponseAtom);

    const param = useParams();

    const detailData = va.filter((issue) => issue.id + "" === param.issueId);

    return <IssueDetail issueData={detailData[0]} />;
};

export default IssueDetailPage;
