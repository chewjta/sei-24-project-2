var React = require("react");

export default class Deletequestion extends React.Component {
  render() {
    let {id,question} = this.props;

        return (
           <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        </head>
        <body>
        <div className="container">
            <div className="card-body">
            <h3 class="text-center" style={{color:'red'}}>Are you sure you want to delete this question?</h3>
<form method="POST" action={`/questions/delete/${id}?_method=delete`} >
    Question: <input type="text" name="question" defaultValue={question} readonly="readonly" class="form-control"/> <br /> <br />
    Question_ID: <input type="text" name="question_id" defaultValue={id} readonly="readonly" class="form-control"/> <br /> <br />
    <input type="submit" value="Delete" style={{marginLeft:'500px'}} class="btn btn-danger"/>
</form>
</div>
</div>
        </body>
      </html>
            );
  }
}

