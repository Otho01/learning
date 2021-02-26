import React from "react"
import logo from './logo.svg';
import './App.css';

class SingInForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <form className="forms">
        <fieldset className="inputs" >
        <input type="text" className="inputs"/>
        <br/>
        <input type="password" className="inputs"/>
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
