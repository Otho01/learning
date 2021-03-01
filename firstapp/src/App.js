import React from "react"
/*import logo from './logo.svg';*/
import './App.css';

class Button extends React.Component {
  render() {
    const {children} = this.props
    return (
      <button>
        {children}
      </button>
    )
  }
}

class SingInForm extends React.Component {
  render() {
    return (
      <form className="signInForm">
        <fieldset className="inputs signInFieldset" >
          <p>Sign In</p>
          <hr className="horizontal"/>
          <p>Email Address</p>
          <input type="text" className="inputs"/>
          <br/>
          <p>Password</p>
          <input type="password" className="inputs"/>
          <Button className="buttons" >
            Sign in
          </Button>
          <Button className="buttons" >
            Sign up
          </Button>
          <a className="anchors" href="#">Forgot password?</a>
        </fieldset>
      </form>
    )
  }
}

function App() {
  return (
    <SingInForm />
  )
}

export default App;
