import React from "react";
import SideBar from "../components/SideBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function PontosPage() {
    return(
        <>
        <SideBar></SideBar>
            <div className={styles.mainContent}>
                <h1 className={styles.title}>Pontos de onibus</h1>
            
                <iframe src="https://www.google.com/maps/d/embed?mid=1MJMCU5IeJllafxr2EqSYt9pDDCOVwbUd&ehbc=2E312F" width="640" height="480"></iframe>
            </div>
        </div>
    );
}

export default PontosPage;
