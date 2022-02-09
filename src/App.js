import { Component } from 'react'
import './App.css';

class App extends Component{
  handleClick = async () => {
    try{
      const response = await fetch('http://jservice.io/api/random');
      const data = await response.json()
      console.log(data);
    } catch(err){
      console.log(err)
    }
  };

  render(){
    return(
      <div>
      <h1>Welcome to Jeopardy!</h1>

      <button onClick = {this.handleClick}> Get a Question</button>

      <div className='Response'>
        {/* {this.data.question} */}

      </div>



    </div>
    )
  }
}

export default App;
