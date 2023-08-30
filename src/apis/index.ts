import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
});

const getIssueListFetch = async (pageNumber: number) => {
    return await octokit
        .request(`get /repos/{owner}/{repo}/issues?page=${pageNumber}`, {
            owner: "facebook",
            repo: "react",
            state: "open",
            sort: "comments",
            per_page: "15",
        })
        .then((res) => {
            return res.data;
        })
        .catch(() => alert("Error : Please try again"));
};

export default getIssueListFetch;
