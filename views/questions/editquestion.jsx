var React = require("react");

export default class Editquestion extends React.Component {
  render() {
    let {topic,id,question} = this.props;

        return (
<form method="POST" action={`/questions/edit/${id}?_method=put`} >
    Edited Question:  <input type="text" name="question" defaultValue={question}/> <br /> <br />
    Edited Topic: <input type="text" name="topic" defaultValue={topic}/> <br /> <br />
    Question_ID: <input type="text" name="question_id" defaultValue={id} readonly="readonly" /> <br /> <br />

    <input type="submit" value="Update" />
</form>
            );
  }
}

