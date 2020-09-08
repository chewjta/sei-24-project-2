var React = require("react");

export default class Editanswer extends React.Component {
  render() {
    let {id,answer,question,questionid} = this.props.data;
    let {type} = this.props;

const verify = (test) => {
    if(test == 'teacher'){
        return <div>
            Verified: <select name="verified" id="verify" form="editform"  class="form-control">
    <option value="true">Yes</option>
    <option value="" selected>No</option>
    </select>
        </div>
    } else {
        return <div></div>
    }
}

let verified = verify(type);

        return (
        <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        </head>
        <body>
        <div className="container">
            <div className="card-body">
        <form method="POST" id="editform" action={`/answers/edit/${id}?_method=put`}>
    <span style={{fontSize:'32px'}}>Question: {question}</span> <br /> <br />
    Edited Answer: <br /><textarea type="text" name="answer" defaultValue={answer} form="editform" class="form-control" rows='6' required></textarea> <br /> <br />
    Question ID: <input type="text" name="question_id" class="form-control"defaultValue={questionid} readonly="readonly" /> <br /> <br />
    Answer ID: <input type="text" name="answer_id" defaultValue={id} class="form-control" readonly="readonly" />
    <br /> <br />
            {verified}
    <br /> <br />
    <input type="submit" value="Update" style={{marginLeft:'470px'}} class="btn btn-primary"/>
        </form>
         </div>
          </div>
        </body>
      </html>
            );
  }
}

