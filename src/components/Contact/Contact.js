import React from "react";
import styles from "./Contact.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Notification from "../Notification/Notification";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  handleInputChange = e => {

  };

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.formWrapper}>
            <Notification />
            <form className={styles.form} onSubmit={this.handleSubmit}>
              <Input
                name="name"
                label="Name"
                required="true"
                onChange={this.handleInputChange}
              />
              <Input
                name="email"
                label="Email"
                required="true"
                onChange={this.handleInputChange}
              />
              <Input
                name="message"
                label="Message"
                onChange={this.handleInputChange}
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
