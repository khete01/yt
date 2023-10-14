export function Sidebuttons() {
  return (
    <div style={{width:"10vw"}}>
      {Icons.map((el, index) => {
        return (
          <div style={style.container} key={index}>
            <div>{el.svg}</div>
            <p style={style.text}>{el.title}</p>
          </div>
        );
      })}
    </div>
  );
}
const style = {
  text: {
    color: "white",
  },
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};
const Icons = [
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 10V21H10V15H14V21H20V10L12 3L4 10Z" fill="white" />
      </svg>
    ),
    title: "Home",
  },
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.23 13.08C10.94 12.87 10.75 12.57 10.69 12.22C10.63 11.87 10.71 11.51 10.92 11.23C11.13 10.94 11.43 10.75 11.78 10.69C12.13 10.63 12.48 10.71 12.77 10.92C13.06 11.13 13.25 11.43 13.31 11.78C13.37 12.13 13.29 12.49 13.08 12.77C12.87 13.06 12.57 13.25 12.22 13.31C12.15 13.32 12.07 13.33 12 13.33C11.72 13.33 11.45 13.25 11.23 13.08ZM22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12ZM18.03 5.97L9.8 9.8L5.97 18.03L14.2 14.2L18.03 5.97Z"
          fill="white"
        />
      </svg>
    ),
    title: "Explore",
  },
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 7H4V6H20V7ZM22 9V21H2V9H22ZM15 15L10 12V18L15 15ZM17 3H7V4H17V3Z"
          fill="white"
        />
      </svg>
    ),
    title: "Subscription",
  },
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 20H18V21H3V6H4V20ZM21 3V18H6V3H21ZM17 10.5L11 7V14L17 10.5Z"
          fill="white"
        />
      </svg>
    ),
    title: "Library",
  },
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.97 16.95L10 13.87V7H12V12.76L16.03 15.25L14.97 16.95ZM12 2C8.73 2 5.8 3.44 4 5.83V3.02H2V9H8V7H5.62C7.08 5.09 9.36 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12H2C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2Z"
          fill="white"
        />
      </svg>
    ),
    title: "History",
  },
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 11H6V21H3V11ZM18.77 11H14.54L16.06 6.06C16.38 5.03 15.54 4 14.38 4C13.8 4 13.24 4.24 12.86 4.65L7 11V21H17.43C18.49 21 19.41 20.33 19.62 19.39L20.96 13.39C21.23 12.15 20.18 11 18.77 11Z"
          fill="white"
        />
      </svg>
    ),
    title: "Liked videos",
  },
];
