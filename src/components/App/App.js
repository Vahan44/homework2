import "./App.css"
import { Component } from "react"
import Registerpage from "../registerpage/registerpage"
import UserPage from "../UserPage/UserPage"
import NumBoard from "../NumBoard/NumBoard"

class App extends Component {
    state = {
        userData : {
        username: "",
        email: "",
        password:""
        },
        flag: false
    }

    handleRegistration = (data) => {
        if(Object.values(data).every(el => el !== "")){
            this.setState({flag : true, userData: data})
            localStorage.setItem('userData', JSON.stringify(data))
            localStorage.setItem("flag", true)

        }
      else {
        this.setState({flag : false})
        localStorage.setItem("flag", false)
    }
    }

    logOut = () => {
        localStorage.setItem('flag', false)
        this.setState({flag: false})
    }

    render=() =>{
        let data = JSON.parse(localStorage.getItem('userData'))
        let result = !JSON.parse(localStorage.getItem("flag")) ? 
        <Registerpage handleRegistration= {this.handleRegistration}/> :
        <UserPage username = {data.username}
        logOut = {this.logOut}
         email = {(JSON.parse(localStorage.getItem('userData'))).email} 
         password = {(JSON.parse(localStorage.getItem('userData'))).password}/>

        return (
           //result
           <NumBoard/>
        )
    }
}

export default App;