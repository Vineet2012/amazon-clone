import React from "react";

export default function List7() {
  let [idx, setIdx] = React.useState(0);
  function Forwards() {
    setIdx((idx + 1) % (picaos.length - 1));
  }
  function Backwards() {
    if (idx === 0) setIdx(picaos.length - 1);
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
                  src={picaos[idx]}
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

let picaos = [
  "https://m.media-amazon.com/images/I/31eS62Mz12L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/51lahpjiaoL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61WMk8x6erL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61JVOLRRU5L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/51-27qY-p9L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61TgOqqe44L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61nARU-waIL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/51FFVweqLxL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/81APhyMWCfL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/51ih9r1zfmL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61+kG3AZYwL._AC_SY400_.jpg",
];
