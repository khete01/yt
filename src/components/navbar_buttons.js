export function Navbuttons() {
  return (
    <div style={style.leftButtons}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 21H19V24H17V21H14V19H17V16H19V19H22V21ZM25 14H11V26H25V19.61L29 21.44V16.56L25 18.39V14ZM26 13V16.83L30 15V23L26 21.17V27H10V13H26Z"
          fill="white"
        />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0V4H16V0H12ZM15 3H13V1H15V3ZM12 6V10H16V6H12ZM15 9H13V7H15V9ZM6 0V4H10V0H6ZM9 3H7V1H9V3ZM6 6V10H10V6H6ZM9 9H7V7H9V9ZM12 12V16H16V12H12ZM15 15H13V13H15V15ZM6 12V16H10V12H6ZM9 15H7V13H9V15ZM0 0V4H4V0H0ZM3 3H1V1H3V3ZM0 6V10H4V6H0ZM3 9H1V7H3V9ZM0 12V16H4V12H0ZM3 15H1V13H3V15Z"
          fill="white"
        />
      </svg>
      <svg
        width="16"
        height="21"
        viewBox="0 0 16 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 19H10C10 20.1 9.1 21 8 21C6.9 21 6 20.1 6 19ZM16 16.35V18H0V16.35L2 14.47V9.32001C2 6.40001 3.56 4.10001 6 3.34001V2.96001C6 1.54001 7.49 0.460006 8.99 1.20001C9.64 1.52001 10 2.23001 10 2.96001V3.35001C12.44 4.10001 14 6.41001 14 9.33001V14.48L16 16.35ZM15 16.77L13 14.89V9.42001C13 6.95001 11.81 5.06001 9.87 4.32001C8.61 3.79001 7.23 3.82001 6.03 4.35001C4.15 5.11001 3 6.99001 3 9.42001V14.89L1 16.77V17H15V16.77Z"
          fill="white"
        />
      </svg>
      <img
        src="https://yt3.ggpht.com/ytc/APkrFKazr-VRsRwvq_5Tp4LYKzEiK16B3_2ArEDbk8NLZ4u9_zfD7s-taD7Qg8qcKH8i=s108-c-k-c0x00ffffff-no-rj"
        style={style.profile}
      />
    </div>
  );
}
const style = {
  leftButtons: {
    width: "200px",
    height: "45px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    position:"relative"
  },
  profile: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "white",
  },
};
