import React from "react";

export default function List7() {
  let [idx, setIdx] = React.useState(0);
  function Forwards() {
    setIdx((idx + 1) % (picaas.length - 1));
  }
  function Backwards() {
    if (idx === 0) setIdx(picaas.length - 1);
    else setIdx(idx - 1);
  }
  return (
    <div>
      <div style={{ width: 250 }}>
        <div
          style={{
            height: 280,
            backgroundColor: "white",
            marginTop: 20,
            position: "relative",
            cursor: "pointer",
            marginLeft: 20,
            borderRadius: 10,
          }}
        >
          <div style={{ display: "flex" }}>
            <h1
              style={{
                marginLeft: 20,
                paddingTop: 10,
                fontFamily: "Trebuchet MS",
                fontSize: 15,
                width: 170,
              }}
            >
              Pickup where you left
            </h1>
          </div>
          <a style={{ marginTop: 30, marginLeft: 20 }} href="/">
            See all offers
          </a>
          <div style={{ display: "flex" }}>
            <div>
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    width: 180,
                    height: 200,
                    marginLeft: 20,
                    marginTop: 20,
                    borderRadius: 10,
                  }}
                  src={picaas[idx]}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                }}
              >
                <button
                  style={{ width: 20, height: 80, cursor: "pointer" }}
                  onClick={Backwards}
                >
                  {"<"}
                </button>
                <button
                  style={{ width: 20, height: 80, cursor: "pointer" }}
                  onClick={Forwards}
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

let picaas = [
  "https://m.media-amazon.com/images/I/51MWFKbPhmL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/614CiPQ0+vL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61hwelPQt0L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/51+edKOZP0L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/51+edKOZP0L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/514aall+jWL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/318gXOyu9pL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/71-M9S4J7zL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/318gXOyu9pL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61IIPl634qL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/31eS62Mz12L._AC_SY400_.jpg",
];
