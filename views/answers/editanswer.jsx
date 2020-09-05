var React = require("react");

export default class Editanswer extends React.Component {
  render() {
    let {id,answer,question,questionid} = this.props;

        return (
<form method="POST" action={`/answers/edit/${id}?_method=put`} >
    Question: {question} <br /> <br />
    Edited Answer: <input type="text" name="answer" defaultValue={answer}/> <br /> <br />
    Question ID: <input type="text" name="question_id" defaultValue={questionid} readonly="readonly" /> <br /> <br />
    Answer ID: <input type="text" name="answer_id" defaultValue={id} readonly="readonly" /> <br /> <br />
    <input type="submit" value="Update" />
</form>
            );
  }
}

