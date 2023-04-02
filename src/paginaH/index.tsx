import React from "react";
import "./paginah.css"
export default function Paginah() {
    return (
        <div className="container">
            <div className="titulo">
            <h1>Seleccione el documento</h1>
            </div>
            <div className="info">
            <input type="file" />

            <button>Subir</button>
            </div>
        </div>

    )
    }