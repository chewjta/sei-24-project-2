var React = require("react");

export default class Votequestion extends React.Component {
  render() {
    let {id,question,topic} = this.props.data;

        return (
        <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        </head>
        <body>
        <div className="container">
            <div className="card-body">
        <form method="POST" id="voteform" action={`/questions/vote/${id}?_method=put`}>
    <span style={{fontSize:'32px'}}>Question: {question}</span> <br /> <br />
    <span style={{fontSize:'32px'}}>Topic: {topic}</span> <br /> <br />
    Question ID: <input type="text" name="question_id" class="form-control"defaultValue={id} readonly="readonly" /> <br /> <br />

    Like this question: <select name="vote" id="vote" form="voteform"  class="form-control">
                <option value="" selected disabled>Choose here</option>
                <option value={1}>Yes</option>
                <option value={-1}>No</option>
                <option value={0}>Nah, I am good...</option>
                </select>
    <input type="submit" value="Vote" style={{marginLeft:'470px'}} class="btn btn-primary"/>
        </form>
         </div>
          </div>
        </body>
      </html>
            );
  }
}

