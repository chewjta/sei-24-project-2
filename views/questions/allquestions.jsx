var React = require("react");

export default class Allquestions extends React.Component {
  render() {
    let {data} = this.props;
    let answered = [];
    let unanswered = [];
    data.forEach(item=>{
        if(!item.answer){
            unanswered.push(item.question)
        } else {
            answered.push(item.question)
        }
    })
    let answeredList = answered.map(item=>{
        return <li>{item}</li>
    })

    let unansweredList = unanswered.map(item=>{
        return <li>{item}</li>
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
