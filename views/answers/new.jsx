var React = require('react');

export default class Newanswer extends React.Component {
    render(){
        let {data,id} = this.props;
        return (
            <html>
            <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
             </head>
                <body>
                <div className="container">
                <div className="card-body">
                <form method="post" action="/answers/add" id="answerform">
                <span style={{fontSize:'32px'}}>Question: {data[0].question}</span><br/><br/>
                Answer: <br /><textarea type="text" name="answer" form="answerform" class="form-control" rows='6' required></textarea> <br/><br/>
                Question ID:<p><input type="text" name="id" defaultValue={id} readOnly="readonly" class="form-control" /></p>
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


