import { useEffect, useState } from "react";

import getIssueListFetch from "../apis";
import { GithubResponseTypes } from "../types";
import IssueListItem from "./IssueListItem";
import AdImg from "./AdImg";

const IssueList = () => {
    const [issueListArr, setIssueListArr] = useState<
        GithubResponseTypes[] | null
    >(null);

    const getIssueListData = async () => {
        const response = await getIssueListFetch();
        setIssueListArr(response);
    };

    useEffect(() => {
        getIssueListData();
    }, []);

    if (issueListArr) {
        return (
            <ul>
                {issueListArr.map((issueData, idx) => {
                    if ((idx + 1) % 5)
                        return (
                            <IssueListItem
                                key={issueData.id}
                                issueData={issueData}
                            />
                        );
                    else return <AdImg key={issueData.number} />;
                })}
            </ul>
        );
    } else return <span>asdf</span>;
};

export default IssueList;
