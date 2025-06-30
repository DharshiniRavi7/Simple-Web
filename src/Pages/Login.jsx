import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: "Please fill in all fields." });
    } else {
      this.setState({ error: "" });
      console.log("Email:", email);
      console.log("Password:", password);
      alert("Login Successful ✅");
    }
  };

  render() {
    return (
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          {this.state.error && <p className="error">{this.state.error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
