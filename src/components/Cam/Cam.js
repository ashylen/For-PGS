import React from "react";
import styles from "./Cam.module.scss";

const API = "https://makevoid-skicams.p.mashape.com/cams.json";

class Cam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      renderImages: false
    };
  }

  componentDidMount() {
    this.urlFetch(API);
    this.setState({ renderImages: true });
  }

  urlFetch = data => {
    fetch(data, {
      headers: new Headers({
        "X-Mashape-Key": "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw",
        "Content-Type": "application/json"
      })
    })
      .then(response => {
        if (response.statusText === "OK") {
          return response.json();
        }
      })
      .then(data => this.setState({ data }));
  };

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <div className={styles.items}>
              <div className={styles.item}>
                <div className={styles.itemDate}>20 20 20</div>
                <div className={styles.itemHeading}>Naglowek</div>
                <div className={styles.itemImage}>Image</div>
              </div>
              <div className={styles.item}>
                <div className={styles.itemDate}>20 20 20</div>
                <div className={styles.itemHeading}>Naglowek</div>
                <div className={styles.itemImage}>Image</div>
              </div>
            </div>
            {/* {this.state.renderImages === true
            ? Object.keys(this.state.data).map(function(key) {
                <img value={key} src={this.state.data} alt="xd" />;
              })
            : ""} */}
          </div>
        </div>
      </>
    );
  }
}

export default Cam;
