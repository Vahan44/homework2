import "./registerpage.css"
import { Component } from "react"
class Registerpage extends Component {

    state = {
        username: "",
        email: "",
        password:"",
        
    }

    onSubmit = () => {
      console.log(this.state)
    }


    onValue = (event) => {
        let name = event.target.placeholder
      this.setState({[name]: event.target.value})
    }
    render = () => {
        return (
           <div className="form">
            <h1>registerpage</h1>
            <input className = "username"type='text' onChange = {this.onValue} placeholder='username' />
            <input className = "email"type='mail' onChange = {this.onValue} placeholder='email' />
            <input className = "password"type='password' onChange = {this.onValue} placeholder='password' />
            <button className="submit" onClick = {this.onSubmit}>submit</button>

           </div>
        )
    }
}

export default Registerpage;