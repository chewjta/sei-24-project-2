var React = require("react");

export default class Home extends React.Component {
  render() {

    return (
      <html>
        <head />
        <body>
          <h3 id='header'>Register or Log In to view Questions and Answers</h3>
          <form id='register' method='GET' action='/accounts/register'>
            <input type='submit' value='Register'/>
          </form>
          <br/>
          <form id='login' method='GET' action='/accounts/login'>
            <input type='submit' value='Log In'/>
          </form>
        </body>
      </html>
      );
  }
}
