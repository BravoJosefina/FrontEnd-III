import React from "react";
import { Component } from "react";

class Opciones extends Component{
    
    handleClick=(e)=>{
        this.props.getSeleccion(e.target.id) 
    }
    
    render(){
        return(
        <div className="opciones">
            <div className="opcion">
              <button id="A" className="botones" onClick={this.handleClick}>A</button>
              <h2>{this.props.opciones.a}</h2>
            </div>
            
            <div className="opcion">
              <button id="B" className="botones" onClick={this.handleClick}>B</button>
              <h2>{this.props.opciones.b}</h2>
            </div> 
        </div>
        )
    }
}
export default Opciones;