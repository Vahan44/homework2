import { Component } from "react";
import "./UserPage.css"

class UserPage extends Component {
    render(){
        return (
            <div className="page">
                <h1><b>WELCOME</b> {this.props.username}</h1>
                <h4>personal info</h4>
              <div><p><b>USERNAME:</b> {this.props.username}</p></div> 
              <div> <p><b>EMAIL:</b> {this.props.email}</p></div>  
              <div><p><b>PASSWORD:</b> {this.props.password}</p></div>  
              <button onClick = {this.props.logOut}className = "button">LOG OUT</button>
            </div>
        )
    }
}

export default UserPage