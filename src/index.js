import React from "react";
import ReactDOM from "react-dom";

const users = [
  {
    name: "John",
    age: 32,
    image:
      "https://www.atlassian.com/dam/jcr:13a574c1-390b-4bfb-956b-6b6d114bf98c/max-rehkopf.png"
  },
  {
    name: "Test",
    age: 32,
    image:
      "https://www.atlassian.com/dam/jcr:13a574c1-390b-4bfb-956b-6b6d114bf98c/max-rehkopf.png"
  },
  {
    name: "Harry",
    age: 54,
    image:
      "https://www.atlassian.com/dam/jcr:13a574c1-390b-4bfb-956b-6b6d114bf98c/max-rehkopf.png"
  }
];

// User Component
function User(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p style={{ color: "green" }}>{props.age}</p>
    </div>
  );
}

class User2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p style={{ color: "green" }}>{this.props.age}</p>
        <img height="75" width="50" src={this.props.image} />
      </div>
    );
  }
}

const userList = users.map(u => (
  <User name={u.name} age={u.age} image={u.image} />
));

ReactDOM.render(<div>{userList}</div>, document.getElementById("root"));
