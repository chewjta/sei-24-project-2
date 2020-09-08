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
        return <li className="list-group-item font-weight-stronger"><a href={`/questions/${item.id}`}>{item.question}</a>
        <footer class="blockquote-footer">Popularity: {item.vote}</footer></li>
    })

    let unansweredList = unanswered.map(item=>{
        return <li className="list-group-item font-weight-stronger"><a href={`/questions/${item.id}`}>{item.question}</a>
        <footer class="blockquote-footer">Popularity: {item.vote}</footer>
        </li>
    })



    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        </head>
        <body>
<h2 className="text-center font-weight-lighter">Question Bank</h2>
<div class="card text-center h-100" style={{marginTop:'20px'}}>
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Answered Questions</h5>
    <p class="card-text">{answeredList}</p>
  </div>
  <div class="card-footer text-muted">
    <div class="card-body">
    <h5 class="card-title">Unanswered Questions</h5>
    <p class="card-text">{unansweredList}</p>
    <form id='newquestion' method='GET' action='/questions/new'>
            <input type='submit' value='Add a new question' className="btn btn-primary"/>
          </form>
<br />
          <form id='newquestion' method='GET' action='/dashboard'>
            <input type='submit' value='Back to home' className="btn btn-info"/>
          </form>

  </div>
  </div>
</div>
        </body>
      </html>
      );
  }
}
