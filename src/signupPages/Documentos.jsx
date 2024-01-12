import styles from "./Documentos.module.css"
import React from "react";

function DocumentosPage(){
    return(
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.pageTitle}>Meus documentos</h2>
                <form action="/upload" method="post" enctype="multipart/form-data">
                <div className={styles.mainContent}>
                    <div className={styles.documentWrapper}>
                        <p className={styles.documentName}>Registro Geral (RG)</p>
                        <img src="src/images/rg.png" className={styles.docRg} alt="Documento RG"></img>
                        <input type="file" id="fileRg" name="arquivo1" accept=".pdf, .doc, .docx" />
                    </div>
                    <div className={styles.documentWrapper}>
                        <p className={styles.documentName}>Comprovante de matrícula</p>
                        <img src="src/images/comprovantedematricula.png" className={styles.docRg} alt="Comprovante de matrícula"></img>
                        <input type="file" id="fileMatricula" name="arquivo2" accept=".pdf, .doc, .docx" />
                    </div>
                    <div className={styles.documentWrapper}>
                        <p className={styles.documentName}>Comprovante de residencia</p>
                        <img src="src/images/comprovantederesidencia.png" className={styles.docRg} alt="Comprovante de Matrícula"></img>
                        <input type="file" id="fileResidencia" name="arquivo3" accept=".pdf, .doc, .docx" />
                    </div>  
                </div>
                </form>
            </div>
        </>
    )
}

export default DocumentosPage