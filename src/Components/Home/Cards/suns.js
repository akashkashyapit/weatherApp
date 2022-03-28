import React, { useState, useEffect } from "react";
import styles from "./Cards.module.css";
import * as moment from 'moment';
import Image from 'next/image';
import sun from "../../../../public/sun.png"

export default function Suns(props) {
  let x = new Date(props.data.sys.sunset)
  console.log(x.getFullYear(),"hhh")
  return (
    <div className={(props.data.sys.sunset>props.data.dt &&  props.data.dt> props.data.sys.sunrise) ?styles.boxday:styles.boxnight}>
      <div className={styles.city}>
        <div className={styles.flexcontainer}>
          <div className={styles.item1}>
            <span className={styles.temp}>{props?.data?.main?.temp}</span>
            <span className={styles.temp}>&#8451;</span>
          </div>
          <div className={styles.item3}>
            <div className={styles.flexcontainerColumn}>
              <div className={styles.item1}>
                <span className={styles.cloudy}>{props?.data?.weather[0].description}</span>
              </div>
              <div className={styles.item1}>
                <span className={styles.cityName}>{props?.data?.name ? props?.data?.name : "Pune"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.image}>
      <Image src={sun} height={200} width={200}/>
      </div>
      
    </div>
  );
}
