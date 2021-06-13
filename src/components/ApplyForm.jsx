import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import "./ApplyFormStyles.css";

const initialState = {
  name: "",
  title: "Mr",
  phone: "",
  email: "",
  subscribe: false,
  nameError: "",
  phoneError: "",
  emailError: "",
};

export default class ApplyForm extends Component {
  state = initialState;

  update = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox ? event.target.check : event.target.value,
      subscribe: isCheckbox ? !this.state.subscribe : this.state.subscribe,
    });
  };

  validity = () => {
    let nameError = "";
    let phoneError = "";
    let emailError = "";

    let countryCodeRegex = /^[+]/;
    let phoneRegex = /\d{6,}\d$/g;

    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }
    if (!this.state.phone) {
      phoneError = "Phone number cannot be blank";
    } else if (!countryCodeRegex.test(this.state.phone)) {
      phoneError = "Phone number must include country code";
    } else if (!phoneRegex.test(this.state.phone)) {
      phoneError = "Phone number must contain at least 7 numbers";
    }
    if (!this.state.email.includes("@")) {
      emailError = "Invalid format";
    }

    if (nameError || phoneError || emailError) {
      this.setState({ nameError, phoneError, emailError });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validity()) {
      console.log(this.state);
      this.setState(initialState); // clears after submit
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{marginTop:-50}}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.update}
            maxLength="255"
          />
          <div className="errorInput">{this.state.nameError}</div>
        </div>
        <div>
          <select name="title" value={this.state.title} onChange={this.update}>
            <option>Mr</option>
            <option>Ms</option>
          </select>
        </div>
        <input
          name="phone"
          placeholder="phone number"
          value={this.state.phone}
          onChange={this.update}
          maxLength="20"
        />
        <div className="errorInput">{this.state.phoneError}</div>
        <div>
          <input
            name="email"
            placeholder="email address"
            value={this.state.email}
            onChange={this.update}
            maxLength="255"
          />
          <div className="errorInput">{this.state.emailError}</div>
        </div>
        <div>
          <input
            name="subscribe"
            type="checkbox"
            checked={this.state.subscribe}
            onChange={this.update}
          />
          Subscribe
        </div>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </form>
    );
  }
}
