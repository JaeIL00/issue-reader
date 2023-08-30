import { atom } from "recoil";
import { issueResponseAtomTypes } from "../types";

export const issueResponseAtom = atom<issueResponseAtomTypes>({
    key: "issueResponseAtom",
    default: {
        pageNumber: 1,
        issueList: [],
    },
});
