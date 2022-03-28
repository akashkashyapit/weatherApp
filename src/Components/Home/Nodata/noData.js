import React, { useState, useEffect } from "react";
import styles from "./Cards.module.css";

export default function Nodata(props) {
  return (
    <div className={styles.box}>
      <div className={styles.notFound}>
        City not found!
      </div>
    </div>
  );
}
