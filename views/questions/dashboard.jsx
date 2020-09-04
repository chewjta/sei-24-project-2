var React = require("react");

export default class Dashboard extends React.Component {
  render() {
    let answered = 0;
    let unanswered = 0;
    let questioner = [];
    let topics=[];
    let {data} = this.props;
        data.forEach(item=>{
            if(!item.answer){
                unanswered+=1;
            } else {
                answered+=1;
            }
        })
        data.forEach(item=>{
            questioner.push(item.username);
            topics.push(item.topic);
        })

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

console.log(topicsData,topicsLabel)

    return (
      <html>
        <head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
        </head>
        <body>
          <div style={{height:'200px',width:'400px'}}><canvas id="topicsChart"></canvas></div>
          <div style={{height:'200px',width:'400px'}}><canvas id="questionsChart"></canvas></div>
          <div style={{height:'200px',width:'400px'}}><canvas id="studentsChart"></canvas></div>
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


