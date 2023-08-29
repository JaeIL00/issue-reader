import { useEffect } from "react";
import getIssueListFetch from "../apis";

const HomePage = () => {
    useEffect(() => {
        getIssueListFetch();
    }, []);

    return <></>;
};

export default HomePage;
