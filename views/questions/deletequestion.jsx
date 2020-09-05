var React = require("react");

export default class Deletequestion extends React.Component {
  render() {
    let {id,question} = this.props;

        return (
            <div>
            <h3>Are you sure you want to delete this question?</h3>
<form method="POST" action={`/questions/delete/${id}?_method=delete`} >
    Question:  <input type="text" name="question" defaultValue={question} readonly="readonly" /> <br /> <br />

    Question_ID: <input type="text" name="question_id" defaultValue={id} readonly="readonly" /> <br /> <br />

    <input type="submit" value="Delete" />
</form>
</div>
            );
  }
}

