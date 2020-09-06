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
                          <h5 class="text-center font-weight-lighter">Please enter your username and password to login</h5>
                          <form method="POST" action="/login" className="text-center">
                                Username:  <input type="text" name="username" /> <br /> <br />
                                Password: <input type="password" name="password" /> <br /> <br />
                                <input type="submit" value="Login" className="btn btn-primary"/>
                            </form>
                        </div>
                            </div>
                        </body>
                    </html>
                                        );
                              }
}