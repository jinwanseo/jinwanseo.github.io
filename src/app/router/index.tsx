import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages/Root";
import SpeechComponent from "../../pages/Speech";

console.log(window.location.origin);

const router = createBrowserRouter([
  {
    path: "/",
    element: <SpeechComponent />,
    // children: [
    //   {
    //     path: "speech",
    //     element:
    //   },
    // ],
  },
]);

export default router;
