var React = require('react');

export default class Newquestion extends React.Component {
    render(){
        return (
            <html>
                <body>
                <form method="post" action="/questions/add" id="questionform">
                Question: <br /><textarea type="text" name="question" form="questionform" style={{width:'400px',height:'200px',overflowWrap:'break-word'}}></textarea> <br/><br/>
                Topic:<p><input type="text" name="topic" /></p> <br />
                <input type="checkbox" id="markdown" name="markdown" value="true" /> Markdown required <br /> <br />
                    <input type="submit" value="Submit" />
                </form>
                </body>
            </html>
            )
    }
}