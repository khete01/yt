import { Sidebuttons } from "./sideButtons";

export function Sidebar() {
  return (
    <div style={style.body}>
      <Sidebuttons />
      <p style={{ color: "grey" }}>subscriptions</p>
      <div style={style.container}></div>
    </div>
  );
}
const style = {
  body: {
    paddingTop:"130px",
    width: "10vw",
    height: "100vh",
    backgroundColor: "#212121",
    padding: "20px",
    position:"fixed"
  },
  titles: {
    color: "white",
  },
  text: {
    color: "white",
  },
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};
