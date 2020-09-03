var React = require("react");

export default class Registerform extends React.Component {
  render() {
        return (
<form method="POST" action="/login" >
    Username:  <input type="text" name="username" /> <br /> <br />
    Password: <input type="password" name="password" /> <br /> <br />
    <input type="submit" value="Submit" />
</form>
            );
  }
}