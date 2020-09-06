var React = require("react");

export default class Editanswer extends React.Component {
  render() {
    let {id,answer,question,questionid} = this.props;
    let unverify = null;
        return (
<form method="POST" id="editform" action={`/answers/edit/${id}?_method=put`} >
    Question: {question} <br /> <br />
    Edited Answer: <br /><textarea type="text" name="answer" defaultValue={answer} form="editform" style={{width:'400px',height:'200px',overflowWrap:'break-word'}}></textarea> <br /> <br />
    Question ID: <input type="text" name="question_id" defaultValue={questionid} readonly="readonly" /> <br /> <br />
    Answer ID: <input type="text" name="answer_id" defaultValue={id} readonly="readonly" />
    <br /> <br />
    Verified: <select name="verified" id="verify" form="editform">
    <option value="true">Yes</option>
    <option value="" selected>No</option>
    </select>
    <br /> <br />
    <input type="submit" value="Update" />
</form>
            );
  }
}

