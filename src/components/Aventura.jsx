import React from "react";
import { Component } from "react";
import Opciones from './Opciones'
import Historial from "./Historial";
import data from './data.json';

class Aventura extends Component{
    state={
            historias: [],
            seleccionado: "",
            historial: [],
            contador: 0
        }
    
    componentWillMount(){
        this.setState({
            historias: data,
            contador: 1
        })
    }

    handleSeleccion=(value)=>{
        this.state.contador < 5 ? (   
       this.setState((prevState)=>({seleccionado: value, contador: prevState.contador + 1, historial: [...prevState.historial, value]}))
       ) : (
           alert("FIN")
       )
    }
    render(){
        const id = this.state.contador + this.state.seleccionado.toLowerCase();
        const indice = this.state.historias.findIndex(item => item.id===id)

        return(
            <div className="layout">
                <h1 className="historia">{this.state.historias[indice].historia}</h1>
                <Opciones getSeleccion={this.handleSeleccion} opciones={this.state.historias[indice].opciones}/>
                <Historial seleccionado={this.state.seleccionado} historial={this.state.historial}/>
            </div>
        )
    }
}

export default Aventura;