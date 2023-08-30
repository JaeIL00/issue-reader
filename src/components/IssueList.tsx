import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import getIssueListFetch from "../apis";
import { GithubResponseTypes } from "../types";
import IssueListItem from "./IssueListItem";
import AdImg from "./common/AdImg";
import LoadingSpinner from "./common/LoadingSpinner";
import { issueResponseAtom } from "../recoil/atoms";

const IssueList = () => {
    const setIssueResponseAtom = useSetRecoilState(issueResponseAtom);

    const pageNumber = useRef<number>(1);
    const observer = useRef<IntersectionObserver>();

    const [target, setTarget] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [issueListArr, setIssueListArr] = useState<GithubResponseTypes[]>([]);

    const fetchIssueList = async () => {
        try {
            setIsLoading(true);
            const response = await getIssueListFetch(pageNumber.current);
            if (response[0]) {
                setIssueResponseAtom((prev) => [...prev, ...response]);
                setIssueListArr((prev) => [...prev, ...response]);
                pageNumber.current += 1;
            }
        } catch (error) {
            alert(error);
        } finally {
            setIsLoading(false);
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

    const observeTarget = () => {
        if (target) {
            observer.current = new IntersectionObserver(intersectionCallback);
            observer.current.observe(target);
        }
    };

    useEffect(() => {
        observeTarget();
    }, [target]);

    return (
        <>
            {isLoading && <LoadingSpinner />}
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
        </>
    );
};

const ObserveTarget = styled.div`
    width: 100%;
    height: 1rem;
`;

export default IssueList;
