var React = require("react");

export default class Dashboard extends React.Component {
  render() {

    let myAnswer = 0;
    let {data,userId,username} = this.props;
    let topics=[];
    let idenCheck = [];
    let idenCheck2 = [];
    let idenCheck3 = [];
    let questionLength = [];
data.forEach(item=>{
    questionLength.push(item.questionid)
    if(item.answerer == userId){
        if(!idenCheck.includes(item.questionid)){
            idenCheck.push(item.questionid);
            myAnswer += 1;
        }
    }if(item.questioner == userId){
        if(!idenCheck2.includes(item.questionid)){
        topics.push(item.topic)
    }
    }
})

let questionList = data.map(item=>{
    if(!idenCheck3.includes(item.questionid)){
         idenCheck3.push(item.questionid)
    if(item.questioner == userId){
        return(<li className="list-group-item font-weight-lighter" style={{marginLeft:'70px'}}><a href={`/questions/${item.questionid}`}>{item.question}</a></li>)
    }
}
})



let answerList = data.map(item=>{
    if(item.answerer == userId){
        return(<blockquote class="blockquote mb-0 list-group-item">
                      <p>{item.question}</p>
                      <footer class="blockquote-footer">{item.answer}</footer>
                    </blockquote>)
    }
})

questionLength = [...new Set(questionLength)].length;

const countObj = (arr) => {
    let count = {};
    for(let i=0;i<arr.length;i++){
        let num = arr[i];
        count[num] = count[num] ? count[num] + 1 : 1
    }
    return count;
}

topics=countObj(topics);
let topicsData = Object.values(topics).join(',');
let topicsLabel = Object.keys(topics).join(',');

let date = new Date().toLocaleDateString();


const quotesArr = [{
"text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
"author": "Thomas Edison"
},
{
"text": "You can observe a lot just by watching.",
"author": "Yogi Berra"
},
{
"text": "Difficulties increase the nearer we get to the goal.",
"author": "Johann Wolfgang von Goethe"
},
{
"text": "Fate is in your hands and no one elses",
"author": "Byron Pulsifer"
},
{
"text": "Be the chief but never the lord.",
"author": "Lao Tzu"
},
{
"text": "Nothing happens unless first we dream.",
"author": "Carl Sandburg"
},
{
"text": "Well begun is half done.",
"author": "Aristotle"
},
{
"text": "Life is a learning experience, only if you learn.",
"author": "Yogi Berra"
},
{
"text": "Self-complacency is fatal to progress.",
"author": "Margaret Sangster"
},
{
"text": "Peace comes from within. Do not seek it without.",
"author": "Buddha"
},
{
"text": "What you give is what you get.",
"author": "Byron Pulsifer"
},
{
"text": "We can only learn to love by loving.",
"author": "Iris Murdoch"
},
{
"text": "Life is change. Growth is optional. Choose wisely.",
"author": "Karen Clark"
},
{
"text": "You'll see it when you believe it.",
"author": "Wayne Dyer"
}]


    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
        </head>
        <body>
        <h2 className="text-center font-weight-lighter">Good Morning {username}, What's on your mind today?</h2>
        <h4 className="text-center font-weight-light">{date} &nbsp; &nbsp;<p id="span" className="text-center font-weight-light" style={{display:'inline-block'}}></p></h4>

        <div className="d-flex justify-content-center">
        <div class="card text-black bg-light mb-3" style={{marginRight:'10px'}}>
  <div class="card-header">Topics to Focus</div>
  <div class="card-body">
        <div style={{height:'200px',width:'400px'}}><canvas id="topicsChart"></canvas></div>
        </div>
        </div>
        <div class="card text-black bg-light mb-3" style={{marginRight:'10px'}}>
  <div class="card-header">Unanswered Questions</div>
  <div class="card-body">
        <div style={{height:'200px',width:'400px'}}><canvas id="answersChart"></canvas></div>
        </div>
        </div>
        </div>


 <div className='d-flex justify-content-center'>
            <div class="card text-center" style={{marginRight:'40px'}}>
              <div class="card-header">
                My questions
              </div>
              <div class="card-body">
                <div class="card-text" style={{marginRight:'70px'}}><p class="card-text"></p>{questionList}</div>

                <form id='allquestions' method='GET' action='/questions' style={{marginTop:'20px'}}>
                        <input type='submit' value='View All Questions' class="btn btn-primary"/>
                      </form>
              </div>
            </div>

                <div class="card" style={{height:'300px',width:'400px', marginRight:'40px'}}>
                  <div class="card-header">
                    MY responses
                  </div>
                  <div class="card-body">
                    {answerList}
                  </div>
                </div>

                <div class="card" style={{height:'200px'}}>
                  <div class="card-header">
                    Quote of the Day
                  </div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>{quotesArr[Math.floor((Math.random()*10))].text}</p>
                      <footer class="blockquote-footer">{quotesArr[Math.floor((Math.random()*10))].author}</footer>
                    </blockquote>

                  </div>
                  <form method ="post" action= "/logout" class="text-center" >
                      <input type="submit" value="Logout" class="btn btn-danger"/>
                    </form>
                </div>

                </div>

          <script>
          var answeredNum = {myAnswer};
          var length = {questionLength};
          var topicsDatas = `{topicsData}`;
          var topicsLabels = `{topicsLabel}`;
          </script>
        <script src='/studentscript.js'></script>
        </body>
      </html>
      );
  }
}


