import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import getIssueListFetch from "../apis";
import { GithubResponseTypes } from "../types";
import IssueListItem from "./IssueListItem";
import AdImg from "./AdImg";

const IssueList = () => {
    const pageNumber = useRef<number>(1);
    const observer = useRef<IntersectionObserver>();

    const [target, setTarget] = useState<any>();
    const [issueListArr, setIssueListArr] = useState<GithubResponseTypes[]>([]);

    const fetchIssueList = async () => {
        try {
            const response = await getIssueListFetch(pageNumber.current);
            if (response[0]) {
                setIssueListArr((prev) => [...prev, ...response]);
                pageNumber.current += 1;
            }
        } catch (error) {
            alert(error);
        }
    };

    const intersectionCallback = async (
        entry: IntersectionObserverEntry[],
        observer: IntersectionObserver
    ) => {
        if (entry[0].isIntersecting) {
            observer.unobserve(entry[0].target);
            await fetchIssueList();
            observer.observe(entry[0].target);
        }
    };

    useEffect(() => {
        if (target) {
            observer.current = new IntersectionObserver(intersectionCallback);
            observer.current.observe(target);
        }
    }, [target]);

    return (
        <ul>
            {issueListArr.map((issueData, idx) => {
                const isAdBanner = (idx + 1) % 5;
                if (isAdBanner)
                    return (
                        <IssueListItem
                            key={issueData.id}
                            issueData={issueData}
                        />
                    );
                else return <AdImg key={issueData.number} />;
            })}
            <ObserveTarget ref={setTarget} />
        </ul>
    );
};

const ObserveTarget = styled.div`
    width: 100%;
    height: 1rem;
`;

export default IssueList;
