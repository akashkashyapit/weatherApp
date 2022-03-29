import React, { useState, useEffect } from "react";
import styles from "./Cards.module.css";
import * as moment from "moment";
import Image from "next/image";
import sun from "../../../../public/sun.png";
import cloud from "../../../../public/cloud.png";
import moon from "../../../../public/moon.png";

export default function Suns(props) {
  let x = new Date(props.data.sys.sunset);
  console.log(x.getFullYear(), "hhh");
  return (
    <div
      className={
        props.data.sys.sunset > props.data.dt &&
        props.data.dt > props.data.sys.sunrise
          ? styles.boxday
          : styles.boxnight
      }
    >
      <div className={styles.city}>
        <div className={styles.flexcontainer}>
          <div className={styles.item1}>
            <span className={styles.temp}>{props?.data?.main?.temp}</span>
            <span className={styles.temp}>&#8451;</span>
          </div>
          <div className={styles.item3}>
            <div className={styles.flexcontainerColumn}>
              <div className={styles.item1}>
                <span className={styles.cloudy}>
                  {props?.data?.weather[0].description}
                </span>
              </div>
              <div className={styles.item1}>
                <span className={styles.cityName}>
                  {props?.data?.name ? props?.data?.name : "Pune"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        {props?.data?.weather[0].main == "Clouds" ? (
          <Image src={cloud} height={200} width={200} />
        ) : (
          <>
            {props.data.sys.sunset > props.data.dt &&
            props.data.dt > props.data.sys.sunrise ? (
              <Image src={sun} height={200} width={200} />
            ) : (
              <Image src={moon} height={200} width={250} />
            )}
          </>
        )}
      </div>
      <div className={styles.flexcontainer}>
        <div className={styles.item1}>
          <div className={styles.flexcontainerColumn}>
            <div className={styles.item1}>
              <span className={styles.bottomText}>
                Max:{props?.data.main.temp_max}C
              </span>
            </div>
            <div className={styles.item1}>
              <span className={styles.bottomText}>
                Min:{props?.data.main.temp_min}C
              </span>
            </div>
            <div className={styles.item1}>
              <span className={styles.bottomText}>
                Feel like:{props?.data.main.feels_like}C
              </span>
            </div>
            <div className={styles.item1}>
              <span className={styles.bottomText}>
                Pressure:{props?.data.main.pressure}
              </span>
            </div>
            <div className={styles.item1}>
              <span className={styles.bottomText}>
                Humidity:{props?.data.main.humidity}{" "}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.item1}>
          <div className={styles.flexcontainerColumn}>
            <div className={styles.item1}>
              <span className={styles.bottomText}>
                Wind Speed:{props?.data.wind.speed}
              </span>
            </div>
            <div className={styles.item1}>
              <span className={styles.bottomText}>Base:{props?.data.base}</span>
            </div>
            <div className={styles.item1}>
              <span className={styles.bottomText}>
                Cloud: {props?.data.clouds.all}
              </span>
            </div>
            <div className={styles.item1}>
              <span className={styles.bottomText}>
                Contry:{props?.data.sys.country}
              </span>
            </div>
            <div className={styles.item1}>
              <span className={styles.bottomText}>Cod: {props?.data.cod}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
