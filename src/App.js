import { Component } from 'react'
import './App.css';
import RandomQuestion from './components/questionComponent'
import Score from './components/scoreComponent'
// import JeopardyLogo from '../public/jeopardy_Logo.png'


class App extends Component{

    state = {
      data: null,
      question: '',
      value: '',
      category: '',
      score: 0
    }

  handleClick = async () => {
    try{
      const response = await fetch('http://jservice.io/api/random');
      const data = await response.json()
      this.setState({data: data[0]})
    } catch(err){
      console.log(err)
    }
  };

  scoreIncrease = () => {
    this.setState({score: this.state.score += this..value})
    console.log(this.state.score)
  }
  scoreDecrease = () => {
    this.setState({score: this.state.score -= 1})
    console.log(this.state.score)
  }
  scoreReset = () => {
    this.setState({score: 0})
  }
    

  render(){
    return(
      <div>
      <h1>Welcome to Jeopardy!</h1>
      {/* <Img src={JeopardyLogo} alt= "Jeopardy show logo"/> */}

      <button onClick = {this.handleClick}> Get a Question</button>

      <div className='Response'>
        {this.state.data && <RandomQuestion randomQuestion = {this.state.data}/>}
      </div>
      <br/>
      <div className="scoreBoard">
        <Score score={this.state.score} handleIncrease/>
        <br/>
      <button id="Increase" onClick = {this.scoreIncrease}>Increase</button>
      <button id="Decrease" onClick = {this.scoreDecrease}>Decrease</button>
      <button id="Reset" onClick={this.scoreReset}>Reset</button>
      </div>


    </div>
    )
  }
}

export default App;
