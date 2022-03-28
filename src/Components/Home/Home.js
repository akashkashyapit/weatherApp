import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import axios from "axios";
import Suns from "./Cards/suns";
import Nodata from "./Nodata/noData";

export default function Home() {
  const [search, setSearch] = useState("pune");
  const [data, setData] = useState(false);

  useEffect(() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7dbf381750f2a9b63fe81408284b0f26&units=metric`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
        setData(false);
      });
  }, [search]);
  return (
    <div className={styles.box}>
      <input
        type="serach"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        className={styles.search}
      ></input>
      {console.log("data", data)}
      {data ? <Suns data={data} /> : <Nodata/>}
    </div>
  );
}
