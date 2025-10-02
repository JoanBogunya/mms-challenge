import { BrowserRouter, Route, Routes } from "react-router-dom"
import IssuesSearchView from "../features/issueList/view/IssuesListView";
import NotFound from "./NotFound";

const AppRoutes = () => {
    return <BrowserRouter>
        <Routes>
            <Route index path="/" element={<IssuesSearchView />} />
            <Route path="/issue/:id" element={<>issue detail </>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
};

export default AppRoutes;