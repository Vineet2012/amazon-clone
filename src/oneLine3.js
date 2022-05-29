import React from "react";

export default function Row3() {
  let [idx, setIdx] = React.useState(0);
  function Forward() {
    setIdx((idx + 1) % (photograph.length - 1));
  }
  function Backward() {
    if (idx === 0) setIdx(photograph.length - 1);
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
          <h1
            style={{
              marginLeft: 20,
              paddingTop: 10,
              fontFamily: "Trebuchet MS",
            }}
          >
            Up to 60% off | Car and Bike accesories
          </h1>
          <div style={{ display: "flex" }}>
            <div>
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    width: 180,
                    height: 200,
                    marginLeft: 60,
                    marginTop: 20,
                  }}
                  src={photograph[idx]}
                />
                <img
                  style={{
                    width: 180,
                    height: 200,
                    marginLeft: 60,
                    marginTop: 20,
                  }}
                  src={pico[idx]}
                />
                <img
                  style={{
                    width: 200,
                    height: 200,
                    marginLeft: 60,
                    marginTop: 20,
                  }}
                  src={pica[idx]}
                />
                <img
                  style={{
                    width: 200,
                    height: 200,
                    marginLeft: 60,
                    marginTop: 20,
                  }}
                  src={picaa[idx]}
                />
                <img
                  style={{
                    width: 200,
                    height: 200,
                    marginLeft: 60,
                    marginTop: 20,
                  }}
                  src={picao[idx]}
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
                  onClick={Backward}
                >
                  {"<"}
                </button>
                <button
                  style={{ width: 30, height: 120, cursor: "pointer" }}
                  onClick={Forward}
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

let photograph = [
  "https://m.media-amazon.com/images/I/31NAQirJ+sL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/31NAQirJ+sL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/71b7UbPX72L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/81icg54oMsL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/71RVlMswpgL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61OeOSrwacL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61ge72aiPiL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61iYomOyJ-L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/71t9-9MtwkL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/41zgSEcJOVL._AC_SR160,160_.jpg",

  "https://m.media-amazon.com/images/I/41QqDO1UaQS._AC_SY400_.jpg",
];
let pico = [
  "https://m.media-amazon.com/images/I/71b7UbPX72L._AC_SY400_.jpg",

  "https://images-eu.ssl-images-amazon.com/images/I/811Tpe71QSL._AC_UL320_SR320,320_.jpg",

  "https://m.media-amazon.com/images/I/81icg54oMsL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/71RVlMswpgL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61OeOSrwacL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61ge72aiPiL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61iYomOyJ-L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/71t9-9MtwkL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/41zgSEcJOVL._AC_SR160,160_.jpg",

  "https://m.media-amazon.com/images/I/41QqDO1UaQS._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/31NAQirJ+sL._AC_SY400_.jpg",
];
let pica = [
  "https://m.media-amazon.com/images/I/81icg54oMsL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/71RVlMswpgL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61OeOSrwacL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61ge72aiPiL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61iYomOyJ-L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/71t9-9MtwkL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/41zgSEcJOVL._AC_SR160,160_.jpg",

  "https://m.media-amazon.com/images/I/41QqDO1UaQS._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/714jMFnhQbL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61GPGqZejqL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61GPGqZejqL._AC_SY400_.jpg",
];
let picaa = [
  "https://m.media-amazon.com/images/I/61ge72aiPiL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61iYomOyJ-L._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/71t9-9MtwkL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/41zgSEcJOVL._AC_SR160,160_.jpg",

  "https://m.media-amazon.com/images/I/41QqDO1UaQS._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/714jMFnhQbL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61GPGqZejqL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/51iGyj9Qz4L._AC_SR480,480_.jpg",

  "https://m.media-amazon.com/images/I/41qCKQ8GMhL._AC_SR160,160_.jpg",

  "https://images-eu.ssl-images-amazon.com/images/I/51Jnz2I3QCL._AC_UL320_SR320,320_.jpg",

  "https://images-eu.ssl-images-amazon.com/images/I/7118n9Fd2CL._AC_UL320_SR320,320_.jpg",
];
let picao = [
  "https://m.media-amazon.com/images/I/41QqDO1UaQS._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/714jMFnhQbL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/61GPGqZejqL._AC_SY400_.jpg",

  "https://m.media-amazon.com/images/I/51iGyj9Qz4L._AC_SR480,480_.jpg",

  "https://m.media-amazon.com/images/I/51iGyj9Qz4L._AC_SR480,480_.jpg",

  "https://images-eu.ssl-images-amazon.com/images/I/51Jnz2I3QCL._AC_UL320_SR320,320_.jpg",

  "https://images-eu.ssl-images-amazon.com/images/I/7118n9Fd2CL._AC_UL320_SR320,320_.jpg",

  "https://images-eu.ssl-images-amazon.com/images/I/9122y8CpMnL._AC_UL320_SR320,320_.jpg",

  "https://images-eu.ssl-images-amazon.com/images/I/61w4pTpbqqL._AC_UL320_SR320,320_.jpg",

  "https://images-eu.ssl-images-amazon.com/images/I/61w4pTpbqqL._AC_UL320_SR320,320_.jpg",

  "https://images-eu.ssl-images-amazon.com/images/I/91mf+noD9PL._AC_UL320_SR320,320_.jpg",
];
