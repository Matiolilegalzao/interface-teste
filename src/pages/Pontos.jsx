import React from "react";
import SideBar from "../components/SideBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function PontosPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <SideBar />
                <div className="col">
                    <h1>Pontos de ônibus</h1>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1MJMCU5IeJllafxr2EqSYt9pDDCOVwbUd" width="640" height="480"></iframe>
                </div>
            </div>
        </div>
    );
}

export default PontosPage;
