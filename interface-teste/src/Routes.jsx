import React from "react";
import PontosPage from "./pages/Pontos"; import HomePages from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePages></HomePages>}></Route>
                <Route path="/pontos-de-onibus" element={<PontosPage></PontosPage>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes