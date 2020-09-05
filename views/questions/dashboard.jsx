var React = require("react");

export default class Dashboard extends React.Component {
  render() {
    let answered = 0;
    let unanswered = 0;
    let questioner = [];
    let topics=[];
    let idenCheck = [];
    let idenCheck2 = [];
    let {data} = this.props;
        data.forEach(item=>{
            if(!item.answer){
                unanswered+=1;
            } else {
                if(!idenCheck.includes(item.id)){
            idenCheck.push(item.id);
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


let questionsList = data.map(item=>{
    if(!item.answer){
    return (<li>{item.question}</li>)
}
})


    return (
      <html>
        <head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
        </head>
        <body>
        <h1>Good Morning {this.props.user}, What's on your mind today?</h1>
          <div style={{height:'200px',width:'400px'}}><canvas id="topicsChart"></canvas></div>
          <div style={{height:'200px',width:'400px'}}><canvas id="questionsChart"></canvas></div>
          <div style={{height:'200px',width:'400px'}}><canvas id="studentsChart"></canvas></div>
          <ol>
          <h3>Questions of the Day</h3>
          {questionsList}
          </ol>
          <form id='allquestions' method='GET' action='/questions'>
            <input type='submit' value='View All Questions'/>
          </form>
<br />
          <form method ="post" action= "/logout">
          <input type="submit" value="logout"/>
        </form>
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


