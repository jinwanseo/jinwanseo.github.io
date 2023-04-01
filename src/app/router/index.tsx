import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages/Root";
import SpeechComponent from "../../pages/Speech";

console.log(window.location.origin);

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
    ...(window.location.origin.includes("localhost")
      ? {}
      : { basename: window.location.origin }),
  }
);

export default router;
