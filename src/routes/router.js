import { createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import EmulationPage from "../pages/EmulationPage/Emulation";
import GamesPage from "../pages/GamesPage/GamesPage";
import HomePage from "../pages/HomePage/HomePage";
import StoryPage from "../pages/StoryPage/StoryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/story",
        element: <StoryPage />,
      },
      {
        path: "/games",
        element: <GamesPage />,
      },
      {
        path: "/emulation",
        element: <EmulationPage />,
      },
    ],
  },
]);
