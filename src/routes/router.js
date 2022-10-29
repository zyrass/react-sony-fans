import { createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import EmulationPage from "../pages/EmulationPage/Emulation";
import Playstation1 from "../pages/EmulationPage/pages/Playstation1/Playstation1";
import Playstation2 from "../pages/EmulationPage/pages/Playstation2/Playstation2";
import Playstation3 from "../pages/EmulationPage/pages/Playstation3/Playstation3";
import Playstation4 from "../pages/EmulationPage/pages/Playstation4/Playstation4";
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
        path: "ps2",
        element: <Playstation2 />,
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
        children: [
          {
            path: "psx",
            element: <Playstation1 />,
          },
          {
            path: "ps2",
            element: <Playstation2 />,
          },
          {
            path: "ps3",
            element: <Playstation3 />,
          },
          {
            path: "ps4",
            element: <Playstation4 />,
          },
        ],
      },
    ],
  },
]);
