var React = require('react');

export default class Newanswer extends React.Component {
    render(){
        let {data,id} = this.props;
        return (
            <html>
                <body>
                <form method="post" action="/answers/add" id="answerform">
                Question: <p>{data[0].question}</p>
                Answer: <br /><textarea type="text" name="answer" form="answerform" style={{width:'400px',height:'200px',overflowWrap:'break-word'}}></textarea> <br/><br/>
                Question ID:<p><input type="text" name="id" defaultValue={id} readOnly="readonly" /></p>
                    <input type="submit" value="Submit" />
                </form>
                </body>
            </html>
            )
    }
}