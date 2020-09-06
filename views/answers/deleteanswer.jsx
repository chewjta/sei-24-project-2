var React = require("react");

export default class Deleteanswer extends React.Component {
  render() {
    let {id,answer,question,questionid} = this.props;

        return (
           <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        </head>
        <body>
        <div className="container">
            <div className="card-body">
            <h3 class="text-center" style={{color:'red'}}>Are you sure you want to delete this answer?</h3>
<form method="POST" action={`/answers/delete/${id}?_method=delete`} >
    <div class="text-center" style={{fontSize:'32px'}}>Question: {question} <br /> <br />
    Answer: {answer} <br /> <br /></div>
    Question_ID: <input type="text" name="question_id" defaultValue={questionid} readonly="readonly" class="form-control"/> <br /> <br />
    Answer_ID: <input type="text" name="answer_id" defaultValue={id} readonly="readonly" class="form-control"/> <br /> <br />
    <input type="submit" value="Delete" style={{marginLeft:'500px'}} class="btn btn-danger"/>
</form>
</div>
</div>
        </body>
      </html>
            );
  }
}

