import "./registerpage.css"
import { Component } from "react"
class Registerpage extends Component {

  state = {
    username: "",
    email: "",
    password: "",
    validationErrors: {}
  }




  onValue = (event) => {
    let name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }

  validateEmail = (email) => {
    const domains = ["com", "org", "net", "gov", "edu", "mil", "int", "co", "uk", "ca", "au", "jp", "de", "fr", "es", "cn", "in", "ru", "br", "mx", "us", "eu", "asia", "aero", "museum", "name", "pro", "coop", "info", "mobi", "tel", "travel", "xxx", "jobs", "mobi", "museum", "cat", "edu", "gov", "mil", "int", "arpa", "tv", "io"]
    const mails = ["gmail", "yahoo", "outlook", "hotmail", "aol", "icloud", "mail", "protonmail", "zoho", "gmx", "yandex", "fastmail", "tutanota", "mailchimp", "getresponse", "sendgrid", "posteo", "mailgun", "riseup", "cock.li"]
    let arr = []
    let x

    for(let i = email.length; i> 1; i--){
       if(email[i] === "."){
        arr.push(email.slice(i+1, email.length))
        x = i
       }
       else if(email[i] === "@"){
        arr.push(email.slice(i+1, x))
        break
       }

    }
    let flag1 = domains.find(el => el === arr[0] )
    let flag2 = mails.find(el => el === arr[1] )
    console.log(flag1 && flag2)
    return flag1 && flag2
  }
  validatePassword = (password) => {
    if(password.length > 6 && password.split('').findIndex(el => typeof (el-1) === 'number') !== -1 && password.split('').find(el => typeof el === "string")){
      return false
    }
    else return true
  }

  handleRegister = () => {
    const { username, email, password } = this.state;
    const validationErrors = {}
    
    if (!this.validateEmail(email)) {
      validationErrors.email = 'Please enter a valid email.'
    }
    if (this.validatePassword(password)) {
      validationErrors.password = 'Password must contain letters, numbers and bet at least 6 characters long.'
    }
    if (username.trim().length < 3) {
      validationErrors.username = 'Username is required.'
    }
    if (Object.keys(validationErrors).length === 0) {
      this.props.handleRegistration({ username, email, password })
      this.setState({
        username: '',
        email: '',
        password: '',
        validationErrors: {}
      })
    } else {
      this.setState({ validationErrors })
    }
  }

  render = () => {
    let validationErrors = this.state.validationErrors
    return (
      <div className="form">
        <h1>REGISTER PAGE</h1>
        <div className="list">
          <input className="username" id = "username"value={this.state.username} type='text' onChange={this.onValue} name="username" placeholder='username' />
          <input className="email" id = "email" value={this.state.email} type='mail' onChange={this.onValue} name="email" placeholder='email' />
          <input className="password" id = "password" value={this.state.password} type='password' onChange={this.onValue} name="password" placeholder='password' />
          <input className="file" id = "file"value={this.state.file} type='file' onChange={this.onValue} name="file" placeholder='select an image' />
          {
            Object.keys(validationErrors).length ? (
              <div className="error-alert">
                <span>{ validationErrors.email }</span>
                <span>{ validationErrors.password }</span>
                <span>{ validationErrors.username }</span>
              </div>
            ) : null
          }
          <button className="submit" onClick={this.handleRegister}>submit</button>
        </div>


      </div>
    )
  }
}

export default Registerpage;
