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
      this.props.func(this.state)
    }


    onValue = (event) => {
        let name = event.target.name
      this.setState({[name]: event.target.value})
    }
    render = () => {
        return (
           <div className="form">
            <h1>registerpage</h1>
            <input className = "username" value = {this.state.username} type='text' onChange = {this.onValue} name = "username" placeholder='username' />
            <input className = "email" value = {this.state.email} type='mail' onChange = {this.onValue} name = "email" placeholder='email' />
            <input className = "password" value = {this.state.password} type='password' onChange = {this.onValue} name = "password" placeholder='password' />
            <button className="submit" onClick = {this.onSubmit}>submit</button>

           </div>
        )
    }
}

export default Registerpage;