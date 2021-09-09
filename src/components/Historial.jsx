
import { Component } from "react";

class Historial extends Component{
render(){
    return(
        <div className="recordatorio">
              <h3>Selección anterior: {this.props.seleccionado}</h3>
              <h4>Historial de opciones elegidas:</h4>
              <ul> {this.props.historial.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>  
        )
    }
}

export default Historial;