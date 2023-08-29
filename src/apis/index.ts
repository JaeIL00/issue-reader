import { Octokit } from "octokit";
import { GithubResponseTypes } from "../types";

const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
});

const getIssueListFetch = async () => {
    return await octokit
        .request("get /repos/{owner}/{repo}/issues", {
            owner: "facebook",
            repo: "react",
        })
        .then((res) => {
            return res.data;
        })
        .catch(() => alert("Error : Please try again"));
};

export default getIssueListFetch;
