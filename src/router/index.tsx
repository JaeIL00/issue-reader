import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { HomePage, IssueDetailPage, NotFoundPage } from "../pages";

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
                path: "issue/:issueId",
                element: <IssueDetailPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

export default router;
