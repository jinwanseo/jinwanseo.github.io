import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages/Root";
import SpeechComponent from "../../pages/Speech";

console.log(process.env.PUBLIC_URL);

const router = createBrowserRouter(
  [
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
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

export default router;
