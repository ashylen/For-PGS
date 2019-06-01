import React, { Fragment } from "react";

import CamItem from "./CamItem/CamItem";

import styles from "./Cam.module.scss";
import imageNotFound from "../../assets/images/image-not-found.png";

const API = "https://makevoid-skicams.p.mashape.com/cams.json";
const HeaderKey = "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw";

class Cam extends React.Component {
  _isMounted = false;
  defaultCamCount = 2;

  constructor(props) {
    super(props);

    this.state = {
      places: ["Andalo", "Monte Bondone" , "Alleghe", "Antagnod"], //You can add as many placesToDisplay as you want and it will automatically display it on page
      data: null, //Data from SkiCamsAPI
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
    try {
      fetch(data, {
        headers: new Headers({
          "X-Mashape-Key": HeaderKey,
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
    } catch (error) {
      console.error("error: ", error);
    }
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
    const places = this.state.places;
    const data = this.state.data;
    let content;

    if (isApiConnected && data) {
      let camsKeys = Object.keys(data);
      let camsToRender = [];
      let placesKey = 0; //To find all cams from user input (in this case: this.state.places)

      for (var i = 0; i < camsKeys.length; i++) {
        let key = camsKeys[i];

        if (data[key].name === places[placesKey]) {

          let placesToDisplay = Object.values(data[key].cams).slice(0, this.defaultCamCount);
          let images = [];

          for (let item in placesToDisplay) {
            images.push(
              <img
                key={placesToDisplay[item]["name"]}
                src={placesToDisplay[item]["url"]}
                alt={placesToDisplay[item]["name"]}
                onError={e => {
                  e.target.src = imageNotFound; // Replacement image
                }}
              />
            );
          }

          camsToRender.push({
            name: data[key].name,
            images: images
          });

          placesKey++;
          i = 0; //If we have found any cam then reset loop counter to search throught whole array again.
        }

      }

      content = camsToRender.map((place) => (
        <CamItem
          key={place.name}
          heading={place.name}
          images={place.images}
          date={this.getCurrentDate()}
        />
      ));
    } else {
      content = <div className={styles.loaderIcon} />;
    }

    return (
      <Fragment>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <div className={styles.items}>{content}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Cam;
