import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";

import getIssueListFetch from "../apis";
import IssueListItem from "./IssueListItem";
import AdImg from "./common/AdImg";
import LoadingSpinner from "./common/LoadingSpinner";
import { issueResponseAtom } from "../recoil/atoms";

const IssueList = () => {
    const { pageNumber, issueList } = useRecoilValue(issueResponseAtom);
    const setIssueResponseAtom = useSetRecoilState(issueResponseAtom);

    const observer = useRef<IntersectionObserver>();

    const [target, setTarget] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchIssueList = async () => {
        try {
            setIsLoading(true);
            const response = await getIssueListFetch(pageNumber);
            if (response[0]) {
                setIssueResponseAtom((prev) => {
                    return {
                        issueList: [...prev.issueList, ...response],
                        pageNumber: prev.pageNumber + 1,
                    };
                });
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
    }, [target, observeTarget]);

    return (
        <>
            {isLoading && <LoadingSpinner />}
            <ul>
                {issueList.map((issueData, idx) => {
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
