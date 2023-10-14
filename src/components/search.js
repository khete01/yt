export function Search() {
  return (
    <div style={style.body}>
      <input style={style.search}></input>
      <button style={style.searchButton}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.87 17.17L12.28 11.58C13.35 10.35 14 8.75 14 7C14 3.13 10.87 0 7 0C3.13 0 0 3.13 0 7C0 10.87 3.13 14 7 14C8.75 14 10.35 13.35 11.58 12.29L17.17 17.88L17.87 17.17ZM7 13C3.69 13 1 10.31 1 7C1 3.69 3.69 1 7 1C10.31 1 13 3.69 13 7C13 10.31 10.31 13 7 13Z"
            fill="white"
          />
        </svg>
      </button>
      <button style={style.microphone}>
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 0C5.34 0 4 1.37 4 3.07V8.93C4 10.63 5.34 12 7 12C8.66 12 10 10.63 10 8.93V3.07C10 1.37 8.66 0 7 0ZM13.5 9H12.5C12.5 12.03 10.03 14.5 7 14.5C3.97 14.5 1.5 12.03 1.5 9H0.5C0.5 12.24 2.89 14.93 6 15.41V18H8V15.41C11.11 14.93 13.5 12.24 13.5 9Z"
          fill="white"
        />
      </svg>
    </button>
    </div>
  );
}
const style = {
  body: {
    display: "flex",
  },
  search: {
    width: "450px",
    height: "45px",
    backgroundColor: "black",
    border: "1px solid #303030",
  },
  searchButton: {
    backgroundColor: "#303030",
    width: "100px",
    height: "45px",
  },
  microphone: {
    width: "50px",
    height: "50px",
    backgroundColor: "black",
    borderRadius: "50%",
  },
};
