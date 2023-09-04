import { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);

    this.state = { dark : false }

  }

  changeBg = () => { this.setState( { dark : !this.state.dark } ) , () => console.log(this.state.dark); }

  
  render(){

    const color = { background: this.state.dark ? "black" : "white", color :  this.state.dark ? "white" : "black" }
    
    return(
      <div className="flex justify-center items-center w-screen h-screen font-Rajdhani transition duration-700 ease-in" style = {color} >
      <div className= "p-5 rounded-lg flex justify-center items-center flex-col border-4 border-yellow-300 shadow-2xl" style={{ boxShadow : '0 0 20px yellow' }}>
        <h1 className="text-6xl">Toggle To  Change The Backround Color</h1>
        <button 
        className="rounded-xl my-7 bg-red-500 py-5 px-7 text-2xl font-semibold"
        onClick={this.changeBg}
        >Change</button>
      </div>
      </div>
    )
  }
}

export default App