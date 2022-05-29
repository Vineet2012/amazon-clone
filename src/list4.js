import React from "react";

export default function List4() {
  let [idx, setIdx] = React.useState(0);
  function Forwards() {
    setIdx((idx + 1) % (photographys.length - 1));
  }
  function Backwards() {
    if (idx === 0) setIdx(photographys.length - 1);
    else setIdx(idx - 1);
  }
  return (
    <div>
      <div style={{ width: "100%" }}>
        <div
          style={{
            height: 280,
            backgroundColor: "white",
            marginTop: 20,
            position: "relative",
            cursor: "pointer",
          }}
        >
          <div style={{ display: "flex" }}>
            <h1
              style={{
                marginLeft: 20,
                paddingTop: 10,
                fontFamily: "Trebuchet MS",
              }}
            >
              Up to 45% off | Handpicked furniture collection from local shops
            </h1>
            <a style={{ marginTop: 30, marginLeft: 10 }} href="/">
              See all offers
            </a>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    width: 180,
                    height: 200,
                    marginLeft: 20,
                    marginTop: 20,
                  }}
                  src={photographys[idx]}
                />
                <img
                  style={{
                    width: 180,
                    height: 200,
                    marginLeft: 60,
                    marginTop: 20,
                  }}
                  src={picos[idx]}
                />
                <img
                  style={{
                    width: 200,
                    height: 200,
                    marginLeft: 60,
                    marginTop: 20,
                  }}
                  src={picas[idx]}
                />
                <img
                  style={{
                    width: 200,
                    height: 200,
                    marginLeft: 60,
                    marginTop: 20,
                  }}
                  src={picaas[idx]}
                />
                <img
                  style={{
                    width: 200,
                    height: 200,
                    marginLeft: 60,
                    marginTop: 20,
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
                  style={{ width: 30, height: 120, cursor: "pointer" }}
                  onClick={Backwards}
                >
                  {"<"}
                </button>
                <button
                  style={{ width: 30, height: 120, cursor: "pointer" }}
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

let photographys = [
  "https://m.media-amazon.com/images/I/61co9N8sL3L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/41oHN5P+UZL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/41X5pLlndKS._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61ftPN+jalL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61B-lGflsML._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/71MAtPC31wL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/41Buld9rFmL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/81MUvmL4zHL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/41t1hoByLbL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61SY+QvrRcL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61veBibo28L._AC_SY400_.jpg",
];
let picos = [
  "https://m.media-amazon.com/images/I/71dHyh7+PvL._AC_SY200_.jpg",

  "https://m.media-amazon.com/images/I/71zu2FrS1JL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/81mLBoKkiyL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/81mLBoKkiyL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61co9N8sL3L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61co9N8sL3L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61co9N8sL3L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61ftPN+jalL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/41t1hoByLbL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/41t1hoByLbL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/41Buld9rFmL._AC_SY400_.jpg",
];
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
