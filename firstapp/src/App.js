import React from "react"
/*import logo from './logo.svg';*/
import './App.css';

class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button></button>
    )
  }
}

class SingInForm extends React.Component {
  constructor(props) {
    super(props)
  }
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
          <Button className="buttons" />
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
