const RandomQuestion = (props) => {
      const { randomQuestion } = props;
      console.log(randomQuestion)
      return(
            <div>
                  <div className = 'question' >
                        {/* This shows the question and point value of the div */}
                        <h1><b>Question:</b> {randomQuestion.question}</h1>
                        <h2><b>Category:</b> {randomQuestion.category.title}</h2>
                        <h2><b>Point Value:</b> {randomQuestion.value}</h2>
                        
                  </div>
                  {/* This will control the answer div */}
                  <label id="answerLabel" htmlFor="answerBtn">Show Answer</label>
                  <input type='checkbox' id='answerBtn'/>
                  <div className='answer' id='answerContent'>
                        <h1><b>Answer:</b>  {randomQuestion.answer}</h1>
                  </div>

            </div>
      )
      }
      





export default RandomQuestion