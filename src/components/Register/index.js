import React, { Component } from "react";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleRegister = e => {
    e.preventDefault();
    const { email, password, username } = this.state;

    this.props.register(email, username, password).then(() => {
      if (this.props.registerReducer.isRegistered) {
        this.props.history.push("/login");
      }
    });
  };

  render() {
    return (
      <section className="container">
        <form className="w-50 mx-auto mt-5">
          <div className="form-group">
            <label>UserName</label>
            <input
              type="username"
              name="username"
              className="form-control"
              placeholder="User Name"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={this.onChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleRegister}
            >
              register
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Register;
