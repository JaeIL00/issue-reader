import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { HomePage, IssueDetailPage } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: ":issueId",
                element: <IssueDetailPage />,
            },
        ],
    },
]);

export default router;
