import React from "react";
import styles from "./Contact.module.scss";
import Input from "../Input/Input";
import Button from '../Button/Button';
import Notification from '../Notification/Notification';


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

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.form__wrapper}>
            <Notification/>
            <form className={styles.form} onSubmit={this.handleSubmit}>
              <Input name="name" label="Name" />
              <Input name="email" label="Email" />
              <Input name="message" label="Message" />
              <Button>Send</Button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
