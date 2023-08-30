import { atom } from "recoil";
import { GithubResponseTypes } from "../types";

export const issueResponseAtom = atom<GithubResponseTypes[]>({
    key: "issueResponseAtom",
    default: [],
});
