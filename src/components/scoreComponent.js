const playerScore = (props) => {
      const {score} = props;
      return(
            <div className = 'ScoreTotal'>
                  <h1>{score.score}</h1>
                                    
            </div>
      )
}

export default playerScore