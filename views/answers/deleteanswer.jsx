var React = require("react");

export default class Deleteanswer extends React.Component {
  render() {
    let {id,answer,question,questionid} = this.props;

        return (
            <div>
            <h3>Are you sure you want to delete this answer?</h3>
<form method="POST" action={`/answers/delete/${id}?_method=delete`} >
    Question: {question} <br /> <br />
    Answer: {answer} <br /> <br />
    Question_ID: <input type="text" name="question_id" defaultValue={questionid} readonly="readonly" /> <br /> <br />
    Answer_ID: <input type="text" name="answer_id" defaultValue={id} readonly="readonly" /> <br /> <br />
    <input type="submit" value="Delete" />
</form>
</div>
            );
  }
}

