import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navigation from "./components/navigation";
import { RouterProvider } from "react-router-dom";
import router from "./config/router";

function App() {
  return (
    <>
      <div className=""></div>
      <div className="mt-20">
        <RouterProvider router={router}>
          <Navigation></Navigation>
        </RouterProvider>
      </div>
    </>
  );
}

export default App;
