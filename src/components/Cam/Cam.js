import React from "react";
import styles from "./Cam.module.scss";
import CamItem from "./CamItem/CamItem";

const API = "https://makevoid-skicams.p.mashape.com/cams.json";

class Cam extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      cams: ["Andalo", "Monte Bondone"],
      data: null,
      isApiConnected: false
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.urlFetch(API);
  }

  componentWillUnmount() {
    this._isMounted = false;
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
          if (this._isMounted) {
            this.setState({ isApiConnected: true });
          }
          return response.json();
        } else {
          throw new Error("Error with API connection.");
        }
      })
      .then(data => {
        if (this._isMounted) {
          this.setState({ data });
        }
      });
  };

  getCurrentDate = () => {
    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`;
    }

    if (mm < 10) {
      mm = `0${mm}`;
    }
    today = `${dd}-${mm}-${yyyy}`;
    return today;
  };

  render() {
    const isApiConnected = this.state.isApiConnected;
    const camsToShow = this.state.cams;
    const camsFromData = this.state.data;
    let content;

    if (isApiConnected && camsFromData) {
      let keys = Object.keys(camsFromData);
      let cams = [];

      for (var i = 0; i < keys.length; i++) {
        let key = keys[i];

        if (camsFromData[key].name === camsToShow[0]) {
          cams.push({
            name: camsFromData[key].name,
            images: [
              <img
                key="0"
                src={camsFromData[key]["cams"][56]["url"]}
                alt={camsFromData[key].name}
              />,
              <img
                key="1"
                src={camsFromData[key]["cams"][57]["url"]}
                alt={camsFromData[key].name}
              />
            ]
          });
        }
        if (camsFromData[key].name === camsToShow[1]) {
          cams.push({
            name: camsFromData[key].name,
            images: [
              <img
                key="0"
                src={camsFromData[key]["cams"][479]["url"]}
                alt={camsFromData[key].name}
              />,
              <img
                key="1"
                src={camsFromData[key]["cams"][480]["url"]}
                alt={camsFromData[key].name}
              />
            ]
          });
        }
      }

      content = cams.map((cam, key) => (
        <CamItem
          key={key}
          heading={cam.name}
          images={cam.images}
          date={this.getCurrentDate()}
        />
      ));
    } else {
      content = <div className={styles.loaderIcon} />;
    }

    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <div className={styles.items}>{content}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Cam;
