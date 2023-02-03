import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GeneralInfo from "./pages/GeneralInfo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usergeneral" element={<GeneralInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
