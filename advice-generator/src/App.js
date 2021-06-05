import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super();
    this.state={
        advice:''
    }
  }
componentDidMount(){
  this.fetchapi();
}
fetchapi = () =>{
  axios.get('https://api.adviceslip.com/advice')
  .then(
    (Response)=>{
      const {advice}=Response.data.slip;
      this.setState({advice});
    }
  )
  .catch(
    (error)=>{
      console.log(error);
    }
  );
}
render(){
  return(
    <div className="container">
      <div className="adv"><h1>Advice Generator</h1></div>
      <div className="card">
      <h1>{this.state.advice}</h1>
      <button onClick={this.fetchapi}>Give me a Advice</button>
      <h3>Wait a Second While We Generate a Suitable <em>Advise</em> For Your Day</h3>
      </div>
      <div className="container2" >
      <p></p>
      <br />
      <p>This Web Application is Developed using ReactJS. Implemented Class, ComponentDidMount, Axios(API) of ReactJS.Developed By ArunKumar.S, Checkout <a href="https://arunselvaraj14.github.io/profile/index.html" target="_blanck"><b>My Profile</b></a> to know more About me.</p>
      </div>
     </div>

  )
}
}

export default App;
