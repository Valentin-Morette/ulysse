import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updateNameField = this.updateNameField.bind(this);
    this.updateLastnameField = this.updateLastnameField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "valentin.morette@gmail.com",
      name: "Valentin",
      lastname: "Morette",
      password: "",
      passwordbis: "",
    };
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  updateNameField(event) {
    this.setState({ name: event.target.value });
  }

  updateLastnameField(event) {
    this.setState({ lastname: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <input type="email" name="email" onChange={this.updateEmailField} />
        <p>
          Password : <input type="password" name="password" />
        </p>
        <p>
          Password bis : <input type="password" name="passwordbis" />
        </p>
        <p>
          Name :{" "}
          <input type="text" name="name" onChange={this.updateNameField} />
        </p>
        <p>
          Lastname :{" "}
          <input
            type="text"
            name="lastname"
            onChange={this.updateLastnameField}
          />
        </p>
        <input type="submit" value="Soumettre" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default SignUp;
