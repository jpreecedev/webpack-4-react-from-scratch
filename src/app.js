import React from "react";
import { hot } from "react-hot-loader/root";

import styles from "./app.module";
import jonpreece from "./images/jonpreece-square";

function App() {
  return (
    <>
      <img src={jonpreece} alt="Jon Preece" />
      <h2 className={styles.red}>This is our React application!</h2>
    </>
  );
}

export default hot(App);
