var React = require("react");

export default class Dashboard extends React.Component {
  render() {

    let myAnswer = 0;
    let {data,userId,username} = this.props;
    let topics=[];
    let idenCheck = [];
    let idenCheck2 = [];
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

    return (
      <html>
        <head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
        </head>
        <body>
        <h1>Good Morning {username}, What's on your mind today?</h1>
        <p>Today's date: {date} </p>
        <p>The time now is : <p id="span"></p></p>

          <div style={{height:'200px',width:'400px'}}><canvas id="topicsChart"></canvas></div>
          <div style={{height:'200px',width:'400px'}}><canvas id="answersChart"></canvas></div>

          <form id='allquestions' method='GET' action='/questions'>
            <input type='submit' value='View All Questions'/>
          </form>
<br />
          <form method ="post" action= "/logout">
          <input type="submit" value="logout"/>
        </form>
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


