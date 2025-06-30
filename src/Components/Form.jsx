import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      error: "",
      success: ""
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, message } = this.state;

    if (!email || !message) {
      this.setState({ error: "Please fill in both fields.", success: "" });
    } else {
      console.log("Query Submitted:", { email, message });
      this.setState({
        error: "",
        success: "Your query has been sent ✅",
        email: "",
        message: ""
      });
    }
  };

  render() {
    return (
      <div className="query-form-container">
        <h3>Send Your Query</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            value={this.state.message}
            onChange={this.handleMessageChange}
          />

          {this.state.error && <p className="error">{this.state.error}</p>}
          {this.state.success && <p className="success">{this.state.success}</p>}

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Form;
