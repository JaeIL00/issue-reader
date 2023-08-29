import { useEffect, useState } from "react";

import getIssueListFetch from "../apis";
import { GithubResponseTypes } from "../types";

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
            <ul
                style={{
                    backgroundColor: "tomato",
                    height: "100%",
                    width: "100%",
                }}
            >
                {issueListArr.map((issue) => (
                    <></>
                ))}
            </ul>
        );
    } else return <span>asdf</span>;
};

export default IssueList;
