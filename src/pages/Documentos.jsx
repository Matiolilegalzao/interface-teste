import styles from "./Documentos.module.css"
import React from "react";

function DocumentosPage(){
    return(
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.pageTitle}>Meus documentos</h2>
                <div className={styles.mainContent}>
                    <div className={styles.documentWrapper}>
                        <p className={styles.documentName}>Registro Geral (RG)</p>
                        <img src="src/images/rg.png" className={styles.docRg} alt="documento rg"></img>
                        <p className={styles.docText}>Enviar arquivo</p><svg xmlns="http://www.w3.org/2000/svg" height="" width="10%" viewBox="0 0 512 512" className={styles.uploadButton}><path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DocumentosPage