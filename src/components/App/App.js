import "./App.css"
import Registerpage from "../registerpage/registerpage"
import UserPage from "../UserPage/UserPage"
import NumBoard from "../NumBoard/NumBoard"
import {useState} from "react"

const App = () => {
    

    const [userData, setUserData] = useState({username: "", email: "", password:""})

    const [flag, setFlag] = useState(false)

    const handleRegistration = (data) => {
        if(Object.values(data).every(el => el !== "")){
            setFlag(true)
            setUserData(data)
            localStorage.setItem('userData', JSON.stringify(data))
            localStorage.setItem("flag", true)

        }
      else {
        setFlag(false)
        localStorage.setItem("flag", false)
    }
    }

    const logOut = () => {
        localStorage.setItem('flag', false)
        setFlag(false)
    }

    
        let data = JSON.parse(localStorage.getItem('userData'))
        let result = !JSON.parse(localStorage.getItem("flag")) ? 
        <Registerpage handleRegistration= {handleRegistration}/> :
        <UserPage username = {data.username}
        logOut = {logOut}
         email = {(JSON.parse(localStorage.getItem('userData'))).email} 
         password = {(JSON.parse(localStorage.getItem('userData'))).password}/>

        return (
           result
        )
    
}

export default App;