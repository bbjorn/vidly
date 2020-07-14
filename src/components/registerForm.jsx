import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as userService from "./../services/userService";

class RegisterForm extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} };

  schema = {
    username: Joi.string()
      .required()
      .email({ minDomainAtoms: 2 })
      .label("Username"),
    password: Joi.string().required().min(5).max(30).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    await userService.register(this.state.data);
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
