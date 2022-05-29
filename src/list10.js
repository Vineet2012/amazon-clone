import React from "react";

export default function List7() {
  let [idx, setIdx] = React.useState(0);
  function Forwards() {
    setIdx((idx + 1) % (picas.length - 1));
  }
  function Backwards() {
    if (idx === 0) setIdx(picas.length - 1);
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
            marginLeft: 30,
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
                  src={picas[idx]}
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

let picas = [
  "https://m.media-amazon.com/images/I/81MUvmL4zHL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61SY+QvrRcL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61co9N8sL3L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/41t1hoByLbL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/71MAtPC31wL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/41Buld9rFmL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/71zu2FrS1JL._AC_SY200_.jpg",

  "https://m.media-amazon.com/images/I/71CKU16foLL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/41oHN5P+UZL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/619bSq3prYL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61j0Xy-pgCL._AC_SY400_.jpg",
];
