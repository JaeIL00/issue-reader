import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import getIssueListFetch from "../apis";
import IssueListItem from "./IssueListItem";
import AdImg from "./common/AdImg";
import LoadingSpinner from "./common/LoadingSpinner";
import { issueResponseAtom } from "../recoil/atoms";

const IssueList = () => {
    const [{ pageNumber, issueList }, setIssueResponseAtom] =
        useRecoilState(issueResponseAtom);

    const [target, setTarget] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchIssueList = async () => {
        try {
            setIsLoading(true);
            const response = await getIssueListFetch(pageNumber);
            if (response[0]) {
                setIssueResponseAtom((prev) => ({
                    pageNumber: prev.pageNumber + 1,
                    issueList: [...prev.issueList, ...response],
                }));
            }
        } catch (error) {
            alert(error);
        } finally {
            setIsLoading(false);
        }
    };

    const io = new IntersectionObserver(async (entry) => {
        if (entry[0].isIntersecting) {
            await fetchIssueList();
        }
    });

    useEffect(() => {
        if (!target) return;
        io.observe(target);

        return () => {
            io.unobserve(target);
        };
    }, [target, pageNumber]);

    return (
        <>
            {isLoading && <LoadingSpinner />}
            <ul>
                {issueList.map((issueData, idx) => {
                    const isListItem = (idx + 1) % 5;
                    if (isListItem)
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
