var React = require("react");

export default class Registerform extends React.Component {
  render() {
        return (
                    <html>
                    <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                    </head>
                        <body>
                        <div class="container h-100 d-flex justify-content-center" style={{marginTop:'200px'}}>
                        <div class="jumbotron my-auto">
                          <h5 class="text-center font-weight-lighter">Please key in your desired username and password to register</h5>
                          <form method="POST" action="/register" className="text-center" >
                            <div className="text-center" style={{marginTop:'20px'}}>Username: <input type="text" name="username" /> <br /> <br />
                            Password: <input type="password" name="password" /> <br /> <br />
                            <select name="type" >
                                      <option value="student">Student</option>
                                      <option value="teacher" disabled>Teacher</option>
                                    </select></div>
                                    <br />
                            <input type="submit" value="Register" class="btn btn-success"/>
                        </form>
                        </div>
                            </div>
                        </body>
                    </html>
            );
  }
}

