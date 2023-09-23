import { Component } from "react";
import'./NumBoard.css'

class NumBoard extends Component {
state = {
value: 0
}

minuse = () => {
this.setState(({value}) => {
    return {value: value-1}
})
}


pluse = () => {
    this.setState(({value}) => {
        return {value: value+1}
    })
    }


    render(){
        return(
            <div className="main">
                <button className="min" onClick={this.minuse}>-</button>
                 <div className="board">
                    <input className="nums" type = "number"value={this.state.value}></input>
                 </div>
                 <button className="plu" onClick={this.pluse}>+</button>
            </div>
        )
    }
}

export default NumBoard