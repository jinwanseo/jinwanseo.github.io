import React from "react";
import { Route, Routes } from "react-router-dom";
import Root from "../../pages/Root";
import SpeechComponent from "../../pages/Speech";

function Router(props) {
  return (
    <Routes>
      <Route path={"/"} element={<Root />}>
        <Route path="speech" element={<SpeechComponent />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
