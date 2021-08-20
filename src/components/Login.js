import React from "react";
import axiosWithAuth from '../helpers/axiosWithAuth';

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  state = {
    credentials:{
      username: '',
      password: '',
      error: ''
    }
  }

  //replace with error state

  handleChange = e =>{
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e =>{
    e.preventDefault()

    axiosWithAuth().post('/login', this.state.credentials)
    .then(res =>{
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('role', res.data.role)
        localStorage.setItem('username', res.data.username)
        localStorage.setItem('password', res.data.password)
        this.props.history.push('/protected');
    })
    .catch(err =>{
        console.log(err)
    })
}

  render(){
    return (
        <div>
            <form onSubmit={this.login}>
                <div className = 'userPass'>
                <input className = 'user'
                    type = 'text'
                    id = 'username'
                    name = 'username'
                    value = {this.state.credentials.username}
                    placeholder = 'Username'
                    onChange = {this.handleChange}
                />
                <input
                    type = 'password'
                    id = 'password'
                    name = 'password'
                    value = {this.state.credentials.password}
                    placeholder = 'Password'
                    onChange = {this.handleChange}
                />
                </div>
                <button>Login</button>
                
            </form>
        </div>
    );
  };
}

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"