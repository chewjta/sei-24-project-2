## Approach and Process

1. What in my process and approach to this project would I do differently next time?

  * Get more feedback from others and iterate from there rather than creating my app based on my own opinions because what I think is necessary may not be what others think.

2. What in my process and approach to this project went well that I would repeat next time?

  * I really planned out my thought process clearly via drawing an ERD diagram ,creating wireframes for each of my routes and also think through the set up of my app before starting to code.

## Code and Code Design

1. What in my code and program design in the project would I do differently next time?

  * By leveraging more on data manipulation via PostgreSQL rather than via javascript. Writing more efficient code by reducing the use of loops and creation of variables.

```javascript
let answersList = data.map(item=>{
        if(item.answer){
            if(item.answerer == userId || type == 'teacher'){
                if(item.markdown != 'undefined' && item.markdown != null){
                if(item.verified){
                item.answer=marked(item.answer)
            return <div class="card text-center">
                  <div class="card-header">
                  </div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <div style={{color:'#0FF900',border:'1px solid #0FF900'}}dangerouslySetInnerHTML={{__html: item.answer}}></div>
                      <footer class="blockquote-footer">Current votes: {item.vote}</footer>
                    </blockquote>
                    <div class="row d-flex justify-content-center align-items-center" >
                    <form method ="get" action= {`/answers/vote/${item.answersid}`}>
                          <input type="submit" value="vote" className="btn btn-primary" />
                        </form>
                    <form method ="get" action= {`/answers/edit/${item.answersid}`} style={{margin:'0 20px'}}>
                          <input type="submit" value="edit" className="btn btn-info" />
                        </form>
                        <form method ="get" action= {`/answers/delete/${item.answersid}`}>
                          <input type="submit" value="delete" className="btn btn-danger"/>
                        </form>
                        </div>
                  </div>
                </div>
     } item.answer=marked(item.answer);
     return <div class="card text-center">
                  <div class="card-header">
                    Answer
                  </div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <div dangerouslySetInnerHTML={{__html: item.answer}}></div>
                      <footer class="blockquote-footer">Current votes: {item.vote}</footer>
                    </blockquote>
                    <div class="row d-flex justify-content-center align-items-center" >
                     <form method ="get" action= {`/answers/vote/${item.answersid}`}>
                          <input type="submit" value="vote" className="btn btn-primary" />
                        </form>
                    <form method ="get" action= {`/answers/edit/${item.answersid}`} style={{margin:'0 20px'}}>
                          <input type="submit" value="edit" className="btn btn-info" />
                        </form>
                        <form method ="get" action= {`/answers/delete/${item.answersid}`}>
                          <input type="submit" value="delete" className="btn btn-danger"/>
                        </form>
                        </div>
                  </div>
                </div>
```


2. What in my code and program design in the project went well? Is there anything I would do the same next time?

  * By separating each section into a different MVC template. For example, one for questions, one for answers, etc.

```javascript
const allAccountsModelsFunction = require('./models/accounts');

const accountsModelsObject = allAccountsModelsFunction( pool );

const allAnswersModelsFunction = require('./models/answers');

const answersModelsObject = allAnswersModelsFunction( pool );

const allQuestionsModelsFunction = require('./models/questions');

const questionsModelsObject = allQuestionsModelsFunction( pool );

const allStudentsModelsFunction = require('./models/students');

const studentsModelsObject = allStudentsModelsFunction( pool );
```


## WDI Unit 2 Post Mortem

1. What habits did I use during this unit that helped me?

  * Initial planning via ERD diagrams, wireframes etc.
  * Always write pseudo code before starting any assignments
  * Committing to Git regularly to ensure I am able to restore my data in case my app breaks
  * Doing one functionality at a time and take ample rest breaks.


2. What habits did I have during this unit that I can improve on?

  * Use less loops and write more efficient codes.
  * Proper indentation of codes.
  * Talk to more people and get their feedback

3. How is the overall level of the course during this unit? (instruction, course materials, etc.)

  * The pace is getting a lot faster as compared to the first few weeks, but I guess this is expected as there is a lot to cover.
  * Overall instructor and TA are both very helpful and approachable which makes the journey much more bearable.





