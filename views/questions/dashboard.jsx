var React = require("react");

export default class Dashboard extends React.Component {
  render() {
    let answered = 0;
    let unanswered = 0;
    let questioner = [];
    let topics=[];
    let idenCheck = [];
    let idenCheck2 = [];
    let idenCheck3= [];
    let {data} = this.props;
        data.forEach(item=>{
            console.log(item)
            if(!item.answer){
                unanswered+=1;
            } else if(item.answer){
                if(!idenCheck.includes(item.questionid)){
                    idenCheck.push(item.questionid);
                    answered+=1;
            }
            }
        })
        data.forEach(item=>{
            if(!idenCheck2.includes(item.questionid)){
            idenCheck2.push(item.questionid);
            questioner.push(item.username);
            topics.push(item.topic);
            }

        })

        console.log(data)



const countObj = (arr) => {
    let count = {};
    for(let i=0;i<arr.length;i++){
        let num = arr[i];
        count[num] = count[num] ? count[num] + 1 : 1
    }
    return count;
}

questioner = countObj(questioner);
topics= countObj(topics);

let questionerData = Object.values(questioner).join(',');
let questionerLabel = Object.keys(questioner).join(',');

let topicsData = Object.values(topics).join(',');
let topicsLabel = Object.keys(topics).join(',');

let date = new Date().toLocaleDateString();

let questionsList = data.map(item=>{
    if(!item.answer){
    return  (<li className="list-group-item font-weight-lighter"><a href={`/questions/${item.questionid}`}>{item.question}</a></li>)
}
})

let verifyList = data.map(item=>{
    if(!idenCheck3.includes(item.questionid)){
        idenCheck3.push(item.questionid)
    if(item.answer && !item.verified){
        return (<li className="list-group-item font-weight-lighter"><a href={`/questions/${item.questionid}`}>{item.question}</a></li>)
    }
}
})


const quotesArr = [
{
"text": "The secret to a rich life is to have more beginnings than endings.",
"author": "Dave Weinbaum"
},
{
"text": "It is only when the mind and character slumber that the dress can be seen.",
"author": "Ralph Waldo Emerson"
},
{
"text": "If you don't like something, change it. If you can't change it, change your attitude.",
"author": "Maya Angelou"
},
{
"text": "Reviewing what you have learned and learning anew, you are fit to be a teacher.",
"author": "Confucius"
},
{
"text": "The world is a book, and those who do not travel read only a page.",
"author": "Augustinus Sanctus"
},
{
"text": "So long as a person is capable of self-renewal they are a living being.",
"author": "Henri-Frederic Amiel"
},
{
"text": "I'm not afraid of storms, for I'm learning how to sail my ship.",
"author": "Louisa Alcott"
},
{
"text": "Think for yourselves and let others enjoy the privilege to do so too.",
"author": "Voltaire"
},
{
"text": "How we spend our days is, of course, how we spend our lives.",
"author": "Annie Dillard"},
{
"text": "A house divided against itself cannot stand.",
"author": "Abraham Lincoln"
}
]


    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
        </head>
        <body>
        <h2 className="text-center font-weight-lighter">Good Morning {this.props.user}, What's on your mind today?</h2>
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
        <div style={{height:'200px',width:'400px'}}><canvas id="questionsChart"></canvas></div>
        </div>
        </div>
        <div class="card text-black bg-light mb-3">
  <div class="card-header">Student to Focus</div>
  <div class="card-body">
        <div style={{height:'200px',width:'400px'}}><canvas id="studentsChart"></canvas></div>
        </div>
        </div>
        </div>

        <div className='d-flex justify-content-around'>
            <div class="card text-center">
              <div class="card-header">
                Featured Questions of the Day
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-center">
                <div class="card-text" style={{marginRight:'70px'}}><p class="card-text">Unanswered: </p>{questionsList}</div>
                <div class="card-text"><p class="card-text">Unverified: </p>{verifyList}</div>
                </div>
                <form id='allquestions' method='GET' action='/questions' style={{marginTop:'20px'}}>
                        <input type='submit' value='View All Questions' class="btn btn-primary"/>
                      </form>
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
          var answeredNum = {answered};
          var unansweredNum = {unanswered};
          var topicsDatas = `{topicsData}`;
          var topicsLabels = `{topicsLabel}`;
          var questionerDatas = `{questionerData}`;
          var questionerLabels = `{questionerLabel}`;
          </script>
        <script src='/script.js'></script>
        </body>
      </html>
      );
  }
}


