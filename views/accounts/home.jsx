var React = require("react");

export default class Home extends React.Component {
  render() {

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        </head>
        <body>
        <div className="text-center"><img src="practice-exam_laptop-2.png" /></div>
        <div className="container text-center">
            <div className="card-body">
          <h3 id='header' className="card-title text-center font-weight-lighter">Register or Log In to view Questions and Answers</h3>
          <form id='register' method='GET' action='/accounts/register' >
            <input type='submit' value='Register' class="btn btn-primary"/>
          </form>
          <br/>
          <form id='login' method='GET' action='/accounts/login'>
            <input type='submit' value='Log In' class="btn btn-success"/>
          </form>
          </div>
          </div>


        </body>
      </html>
      );
  }
}
