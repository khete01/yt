import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import Airtable from "airtable";
import React from "react";
import { Card } from "@/components/card";

const ENDPOINT_URL = "https://api.airtable.com";

export const airtableConfig = async () => {
  const API_KEY =
    "patvitOlXHNlaXYsE.32d053935adabed2ae67416c67b2ffd4509f4037650747c694192d55eb221288";
  const BASE_ID = "appevRutsEoe6OBDZ";
  Airtable.configure({
    endpointUrl: ENDPOINT_URL,
    apiKey: API_KEY,
  });
  return Airtable.base(BASE_ID);
};

const Home = () => {
  const [data, setData] = useState([]);

  const FetchData = async () => {
    const base = await airtableConfig();
    const res = await base.table("mytable").select({}).all();
    setData(res.map((record) => record.fields));
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div style={{ width: "100vw", height: "100vh", position: "absolute" }}>
      <div>
        <Navbar />
      </div>
      <div style={styles.container}>
        <Sidebar />

        <div>
          <div style={styles.content}>
            {data.map((el, index) => {
              return (
                <Card
                  videoImg={el.videoImg}
                  videolink={el.videolink}
                  text={el.Text}
                  title={el.Title}
                  dateviews={el.dateviews}
                  channelimg={el.channelimg}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

const styles = {
  videoImg: {
    width: "320px",
    height: "200px",
  },
  channeldiv: {
    display: "flex",
    gap: "10px",
    width: "200px",
    height: "50px",
  },
  channelimg: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  img: {
    width: "320px",
    height: "200px",
    borderRadius: "10px",
  },
  content: {
    width: "100vw",
    height: "120vh",
    backgroundColor: "black",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
  },
  container: {
    display: "flex",
  },
  videosDiv: {
    width: "280px",
    height: "150px",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  contentDiv: {
    width: "320px",
    height: "200px",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  textDiv: {
    width: "280px",
    height: "100px",
    backgroundColor: "black",
  },
};
