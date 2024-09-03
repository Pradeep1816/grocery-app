import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DynemicRouter from "./components/DynemicRouter";
import Login from "./components/auth/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/*" element={<DynemicRouter />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
