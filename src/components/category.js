export function Category() {
  return (
    <div style={style.body}>
      {Array.map((el) => {
        return (
          <div style={style.menu}>
            <p>{el}</p>
          </div>
        );
      })}
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  menu: {
    color: "white",
    border: "1px solid #AAAAAA",
    borderRadius: "32px",
    width: "60px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#303030",
  },
};

const Array = [
  "All",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
];
