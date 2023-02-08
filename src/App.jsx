import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import GeneralInfo from "./pages/GeneralInfo";
import Education from "./pages/Education";
import Finish from "./pages/Finish";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usergeneral" element={<GeneralInfo />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
