import React from "react";
import styles from "./Contact.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Notification from "../Notification/Notification";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        name: "",
        email: "",
        messsage: ""
      },
      errors: {
        name: "",
        email: "",
        messsage: ""
      },
      isFormSubmitClicked: false
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({ isFormSubmitClicked: true });

    if (this.validateForm()) {
      this.handleClearForm();
      alert("Form submitted");
    }
  };

  handleClearForm() {
    let fields = {};
    fields["name"] = "";
    fields["email"] = "";
    fields["message"] = "";
    this.setState({ fields: fields });
  }

  handleInputChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;

    if(this.state.isFormSubmitClicked)
      this.validateForm();

    this.setState({
      fields
    });
  };

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let isFormValid = true;

    if (!fields["name"]) {
      isFormValid = false;
      errors["name"] = "This field is required";
    }


    if (typeof fields["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"])) {
        isFormValid = false;
        errors["email"] = "Please enter valid Email address";
      }
    }

     if (!fields["email"]) {
       isFormValid = false;
       errors["email"] = "This field is required";
     }


    this.setState({
      errors: errors
    });
    return isFormValid;
  }

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.formWrapper}>
            <Notification />
            <form className={styles.form} onSubmit={this.handleFormSubmit} noValidate>
              <Input
                name="name"
                label="Name"
                value={this.state.fields.name}
                required={false}
                onChangeFn={this.handleInputChange}
                errorMsg={this.state.errors.name}
              />
              <Input
                name="email"
                label="Email"
                value={this.state.fields.email}
                required={false}
                onChangeFn={this.handleInputChange}
                errorMsg={this.state.errors.email}
              />
              <Input
                name="message"
                label="Message"
                value={this.state.fields.message}
                onChangeFn={this.handleInputChange}
              />
              <div className={styles.buttonWrapper}>
                <Button>Send</Button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
