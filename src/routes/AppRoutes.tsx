import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, ScrollRestoration } from "react-router-dom"
import IssuesSearchView from "../features/issueList/view/IssuesListView";
import NotFound from "./NotFound";
import IssueDetailView from "../features/issueDetail/view/IssueDetailView";

const Root = () => (
    <>
        <Outlet />
        <ScrollRestoration getKey={(location) => location.pathname} />
    </>
)

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<IssuesSearchView />} />
            <Route path="issue/:id" element={<IssueDetailView />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

const AppRoutes = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;