import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Roboto } from "next/font/google";
export function Card({
  videoImg,
  videolink,
  text,
  title,
  dateviews,
  channelimg,
  index,
}) {
  // const roboto = Roboto({
  //   weight: ["400", "500", "600", "700"],
  //   style: ["normal", "italic"],
  //   subsets: ["latin"],
  //   display: "swap",
  // });
  const [show, setShow] = useState(false);
  return (
    <div key={index} style={styles.videosDiv}>
      <div style={styles.contentDiv}>
        <img style={styles.img} src={videoImg} onClick={() => setShow(true)} />

        <div style={{ display: show ? "flex" : "none" }} className="modal">
          <button
            onClick={() => setShow(false)}
            style={{ width: "30px", height: "30px" }}
          >
            -
          </button>
          <ReactPlayer
            url={videolink}
            width={"900px"}
            height={"600px"}
            controls={true}
          />
        </div>
      </div>
      <div style={styles.textDiv}>
        <p style={{ color: "white" }}>{text}</p>
        <div style={styles.channeldiv}>
          {" "}
          <img src={channelimg} style={styles.channelimg} />
          <p style={{ color: "white" }}>{title}</p>
        </div>
        <p style={{ color: "white" }}>{dateviews}</p>
      </div>
    </div>
  );
}
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
    height: "100vh",
    backgroundColor: "black",
    display: "grid",
    gridTemplateColumns: " auto auto auto auto",
  },
  container: {
    display: "flex",
  },
  videosDiv: {
    width: "280px",
    height: "150px",
    backgroundColor: "white",
    borderRadius: "10px",
    postion:"absolute",
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
