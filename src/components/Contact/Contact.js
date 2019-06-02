import React, { Fragment } from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Notification from "../Notification/Notification";

import styles from "./Contact.module.scss";

const FormContext = React.createContext({});

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        name: "",
        email: "",
        message: ""
      },
      errors: {
        name: "",
        email: "",
        message: ""
      },
      isFormSubmitClicked: false,
      isNotificationShown: false
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  showNotification = () => {
    this.setState({
      isNotificationShown: true
    });

     setTimeout(() => { //Hide notification after 2.5 seconds.
       this.setState({
         isNotificationShown: false
       });
     }, 2500);
  };

  hideNotification = () => {
    this.setState({
      isNotificationShown: false
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({ isFormSubmitClicked: true });

    if (this.validateForm()) {
      this.showNotification();
      this.handleClearForm(); //Clear form in background

      // //Animations for Notification with usig REFs
      // const notification = this.notificationRef.current;
      // notification.style.zIndex = "2";
      // notification.style.opacity = "1";
      // setTimeout(() => { //Fade out animation

      //   notification.style.opacity = "0";
      //   setTimeout(() => { //Make inputs clickable again after fade out
      //     notification.style.zIndex = "-1";
      //   }, 600);
      // }, 1800);
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

    if (this.state.isFormSubmitClicked) {
      this.validateForm();
    }

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
    const { isNotificationShown } = this.state;
    const contextElements = {
      ...this.state
    };

    return (
      <FormContext.Provider value={contextElements}>
        <Fragment>
          <div className={styles.wrapper}>
            <div className={styles.formWrapper}>
              {isNotificationShown && (
                <Notification text="Message has been sent." additionalClassName={this.state.isNotificationShown ? 'active': ''} />
              )}
              <form
                className={styles.form}
                onSubmit={this.handleFormSubmit}
                noValidate
              >
                <Input
                  name="name"
                  label="Name"
                  type="text"
                  value={this.state.fields.name}
                  required={true}
                  onChangeFn={this.handleInputChange}
                  errorMsg={this.state.errors.name}
                />
                <Input
                  name="email"
                  label="Email"
                  type="email"
                  value={this.state.fields.email}
                  required={true}
                  onChangeFn={this.handleInputChange}
                  errorMsg={this.state.errors.email}
                />
                <Input
                  name="message"
                  label="Message"
                  type="text"
                  required={false}
                  value={this.state.fields.message}
                  onChangeFn={this.handleInputChange}
                  errorMsg={this.state.errors.message}
                />
                <div className={styles.buttonWrapper}>
                  <Button>Send</Button>
                </div>
              </form>
            </div>
          </div>
        </Fragment>
      </FormContext.Provider>
    );
  }
}

export default Contact;
