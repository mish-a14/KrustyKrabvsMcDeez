import './App.css';
import React from "react";
import Mcdeez from './components/Mcdeez/Mcdeez.jsx'
import Krusty from './components/Krusty/Krusty.jsx'



class App extends React.Component {
  state = {
    krusty: 500,
    mcdeez: 100, 
    status: "",
    hpscale: 0
    //use props or something jsut for the name then concatenate it with " is attacking "
  };
  
  krustyMinus = () => {
    this.setState({ status: "Krusty Krab is attacking"})
    this.setState({ mcdeez: this.state.mcdeez - 10 });
  };
  mcDeezMinus = () => {
    this.setState({ status: "McDeez is attacking"})
    this.setState({ krusty: this.state.krusty -10 });
  };

  render() {
    return (
      <div>
        <h1>Welcome to the ultimate fight between McDeez and Krusty Krab!!</h1>
        <Mcdeez krustyMinus= {this.krustyMinus} krusty={this.state.krusty} />
        <Krusty mcDeezMinus= {this.mcDeezMinus} mcdeez={this.state.mcdeez}/> 
        <h1>Status: {this.state.status} </h1>
      </div>
    );
  }
}

export default App;

