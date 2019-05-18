import React from "react";
import styles from "./Contact.module.scss";

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
            <form className={styles.form} onSubmit={this.handleSubmit}>
              <div className={styles.formItem}>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  required
                />
                <label className={styles.label} htmlFor="name">
                  Name
                </label>
                <div className={styles.formItemBar} />
              </div>
              <div className={styles.formItem}>
                <input
                  className={styles.input}
                  type="text"
                  name="email"
                  id="email"
                  placeholder=" "
                  required
                />
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <div className={styles.formItemBar} />
              </div>
              <div className={styles.formItem}>
                <input
                  className={styles.input}
                  type="text"
                  name="message"
                  id="message"
                  placeholder=" "
                />
                <label className={styles.label} htmlFor="message">
                  Message
                </label>
                <div className={styles.formItemBar} />
              </div>
              <button className={styles.button} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
