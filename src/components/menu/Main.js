import { Route, Router, Routes } from "react-router-dom";
import Menu from "./Menu";
import HomePage from "./HomePage";
import DriftPage from "./DriftPage";
import TimeAttackPage from "./TimeAttackPage";
import ForzaPage from "./ForzaPage";


function Main() {
  return (
    
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
  );
}

export default Main;
