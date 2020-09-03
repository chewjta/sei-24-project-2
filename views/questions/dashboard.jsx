var React = require("react");

export default class Dashboard extends React.Component {
  render() {
    let answered = 0;
    let unanswered = 0;
    let {data} = this.props;
        data.forEach(item=>{
            if(!item.answer){
                unanswered+=1;
            } else {
                answered+=1;
            }
        })
    return (
      <html>
        <head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
        </head>
        <body>
          <div style={{height:'400px',width:'800px'}}><canvas id="myChart"></canvas></div>
          <script></script>
        <script src='/script.js'></script>
        </body>
      </html>
      );
  }
}


