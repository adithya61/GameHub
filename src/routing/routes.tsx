import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/pages/ErrorPage";
import GameDetailPage from "../components/pages/GameDetailPage";
import GamePage from "../components/pages/GamePage";

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <ErrorPage />,
    element: <App />,
    children: [
      { index: true, element: <GamePage /> },
      {
        path: "games/:slug",
        element: <GameDetailPage />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
