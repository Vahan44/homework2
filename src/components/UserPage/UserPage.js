import { Component } from "react";
import "./UserPage.css"

class UserPage extends Component {
    render(){
        return (
            <div className="page">
                <h1>USER PAGE</h1>
               <div><p>username: {this.props.username}</p></div> 
             <div> <p>email: {this.props.email}</p></div>  
              <div><p>password: {this.props.password}</p></div>  
            </div>
        )
    }
}

export default UserPage