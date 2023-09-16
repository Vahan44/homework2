import { Component } from "react";
import "./UserPage.css"

class UserPage extends Component {
    render(){
        return (
            <div className="page">
                <p>username: {this.props.username}</p>
                <p>email: {this.props.email}</p>
                <p>password: {this.props.password}</p>
            </div>
        )
    }
}

export default UserPage