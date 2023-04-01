import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages/Root";
import SpeechComponent from "../../pages/Speech";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "speech",
        element: <SpeechComponent />,
      },
    ],
  },
]);

export default router;
