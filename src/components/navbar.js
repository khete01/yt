import { Yt } from "./yt_logo";
import { Search } from "./search";
import { Category } from "./category";
import { Navbuttons } from "./navbar_buttons";
export function Navbar() {
  return (
    <div style={{ position: "fixed", zIndex: "2" }}>
      <div style={style.body}>
        <div style={style.logo}>
          <svg
            width="18"
            height="13"
            viewBox="0 0 18 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 1H0V0H18V1ZM18 6H0V7H18V6ZM18 12H0V13H18V12Z"
              fill="white"
            />
          </svg>
          <Yt />
        </div>
        <div style={style.searchDiv}>
          <Search />
        </div>
        <Navbuttons />
      </div>
      <Category />
    </div>
  );
}

const style = {
  body: {
    width: "99.5vw",
    height: "60px",
    backgroundColor: "#212121",
    border: "1px solid #303030",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    paddingLeft: "30px",
  },

  searchDiv: {
    display: "flex",
    width: "600px",
    height: "50px",
  },
};
