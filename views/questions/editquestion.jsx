var React = require("react");

export default class Editquestion extends React.Component {
  render() {
    let {topic,id,question} = this.props;

        return (
        <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        </head>
        <body>
        <div className="container">
            <div className="card-body">
                <form method="POST" action={`/questions/edit/${id}?_method=put`} >
                    Edited Question:  <input type="text" name="question" defaultValue={question} class="form-control"/> <br /> <br />
                    Edited Topic: <input type="text" name="topic" defaultValue={topic} class="form-control"/> <br /> <br />
                    Question_ID: <input type="text" name="question_id" defaultValue={id} readonly="readonly" class="form-control"/> <br /> <br />

                    <input type="submit" value="Update" class="btn btn-primary" style={{marginLeft:'470px'}}/>
                </form>
</div>
</div>
    </body>
      </html>
            );
  }
}
