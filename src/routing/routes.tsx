import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GamePage from "../components/GamePage";
import GameDetailPage from "../components/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <GamePage /> },
      {
        path: "games/:id",
        element: <GameDetailPage />,
      },
    ],
  },
]);

export default router;
