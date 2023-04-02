import React from "react";
import Opcion1 from "../opcion1";
import Opcion2 from "../opcion2";
import Opcion3 from "../opcion3";
import "./paginac.css"
export default function Paginac() {
  const [pageo, setPageo] = React.useState(false);
  const [pagetw, setPagetw] = React.useState(false);
  const [pagetr, setPagetr] = React.useState(false);
    return (
        <div className="containerInfo">
          <div className="containerTitulo"><h2>Seleccione la opción deseada</h2></div>
          <div className="containerOptions">
           <button onClick={()=> setPageo(current => !current)}>Moda</button>
           <button onClick={()=> setPagetw(current2 => !current2)}>Media</button>
           <button onClick={()=> setPagetr(current3 => !current3)}>Mediana</button>
          </div>
          <div className="pages">
            <div className="pageone">{pageo && <Opcion1/>}</div>
            <div className="pageotwo">{pagetw && <Opcion2/>}</div>
            <div className="pagetree">{pagetr && <Opcion3/>}</div>
          </div>
        </div>  

    )
    }