var React = require("react");

export default class Allquestions extends React.Component {
  render() {
    let {data} = this.props;
    let answered = [];
    let unanswered = [];
    let idenCheck = [];

    data.forEach(item=>{
        if(!item.answer){
            unanswered.push(item)
        } else if (item.answer){
            if(!idenCheck.includes(item.id)){
            idenCheck.push(item.id);
            answered.push(item);
            }
        }
    })


    let answeredList = answered.map(item=>{
        return <li><a href={`/questions/${item.id}`}>{item.question}</a></li>
    })

    let unansweredList = unanswered.map(item=>{
        return <li><a href={`/questions/${item.id}`}>{item.question}</a></li>
    })



    return (
      <html>
        <head />
        <body>
          <h3 id='header'>Current Questions</h3>
          <h5>Unanswered Questions:</h5>
          <ul>{unansweredList}</ul>
          <h5>Answered Questions:</h5>
          <ul>{answeredList}</ul>
        </body>
      </html>
      );
  }
}
