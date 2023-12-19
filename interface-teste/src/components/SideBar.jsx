import React from "react"
import styles from "../components/SideBar.module.css"
import { Link } from "react-router-dom"

function SideBar() {
    return(
        <>
        <div className={styles.sideBar}>
        <ul className={styles.sideBarList}>
                <li className={styles.sideBarListItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2rem" width="2.2rem" viewBox="0 0 576 512">
                    <path opacity="1" fill="#f5fdff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                    </svg>
                    <span className={styles.itemText}>Home</span>
                </li>
                
            <li className={styles.sideBarListItem}>
               <svg xmlns="http://www.w3.org/2000/svg" height="2rem" width="2.2rem" viewBox="0 0 384 512" >
                <path opacity="1" fill="#f5fdff" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> 
                <span className={styles.itemText}>Pontos de ônibus</span>
            </li >
            <li className={styles.sideBarListItem}>
                <svg xmlns="http://www.w3.org/2000/svg" height="2rem" width="2.2rem" viewBox="0 0 384 512" >
                <path opacity="1" fill="#f5fdff" d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                <span className={styles.itemText}>Controle</span>
            </li>

            <li className={styles.logoutBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" height="2rem" width="2.2rem" viewBox="0 0 512 512">
                <path opacity="1" fill="#f5fdff" d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                <span className={styles.itemText}>Sair</span>
            </li>
        </ul>
        </div>
        </>
    )
}

export default SideBar