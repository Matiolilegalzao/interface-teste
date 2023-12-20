import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function SideBar() {
    return (
        <div className="col-3">
            <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action">
                    Home
                </Link>
                <Link to="/pontos-de-onibus" className="list-group-item list-group-item-action">
                    Pontos de ônibus
                </Link>
                <Link to="/controle" className="list-group-item list-group-item-action">
                    Controle
                </Link>
                <Link to="/sair" className="list-group-item list-group-item-action">
                    Sair
                </Link>
            </div>
        </div>
    );
}

export default SideBar;
