var React = require('react');

export default class Newquestion extends React.Component {
    render(){
        return (
            <html>
            <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
             </head>
                <body>
                <div className="container">
                <div className="card-body">
                <form method="post" action="/questions/add" id="questionform">
                Question: <br /><textarea type="text" name="question" form="questionform" class="form-control" rows='6' required></textarea> <br/><br/>
                Topic:<p><input type="text" name="topic" class="form-control" required/></p>
                <input type="checkbox" id="markdown" name="markdown" value="true" /> Markdown required <br /> <br />
                    <input type="submit" value="Submit" style={{marginLeft:'470px'}} class="btn btn-primary"/>
                </form>
                </div>
                </div>
                </body>
            </html>
            )
    }
}



