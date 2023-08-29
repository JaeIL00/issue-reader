import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
});

const getIssueListFetch = async () => {
    return octokit.request("get /repos/{owner}/{repo}/issues", {
        owner: "facebook",
        repo: "react",
    });
};

export default getIssueListFetch;
