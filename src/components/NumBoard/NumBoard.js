import'./NumBoard.css'
import {useState} from 'react';


function NumBoard(){

const [value, setValue] = useState(0)

const [error, setError] = useState(false)

const changeValue = (value) => {

setValue(value)
setError(false)

}

const onMinus = () => changeValue(value - 1) 
const onPlus = ()=> changeValue(value + 1)

const onInputChange = (event) => {

const value = Number(event.target.value.trim())

if (isNaN(value)) { 
    return setError(true)
}

setError(false)

setValue(value)
}
        return(
            <div className="main">
                <button className="min" onClick={onMinus}>-</button>
                 <div class="board">
                    <input class="nums" type = "text"value={value} onChange={onInputChange}></input>
                 </div>
                 <button className="plu" onClick={onPlus}>+</button>
            {error ? <p>input only number</p> : null}
            </div>
        )
    
}

export default NumBoard