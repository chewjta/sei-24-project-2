var React = require("react");

export default class Registerform extends React.Component {
  render() {
        return (
<form method="POST" action="/register" >
    Username:  <input type="text" name="username" /> <br /> <br />
    Password: <input type="password" name="password" /> <br /> <br />
    Type:  <select name="type">
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            <br /> <br />
    <input type="submit" value="Submit" />
</form>
            );
  }
}

