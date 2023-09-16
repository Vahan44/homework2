import "./App.css"
import { Component } from "react"
import Registerpage from "../registerpage/registerpage"
import UserPage from "../UserPage/UserPage"

class App extends Component {
    state = {
        username: "",
        email: "",
        password:"",
        flag: false
    }

    func = (data) => {
        if(Object.values(data).every(el => el !== "")){
            this.setState({flag : true})
            this.setState(data)
        }
      else this.setState({flag : false})
    }

    

    render=() =>{

        let result = !this.state.flag ? <Registerpage func= {this.func}/> : <UserPage username = {this.state.username} email = {this.state.email} password = {this.state.password}/>

        return (
           result
        )
    }
}

export default App;