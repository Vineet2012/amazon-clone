import React from "react";

export default function Oneline2(props) {
  return (
    <div>
      <div style={{ width: "100%", fontFamily: "Trebuchet MS" }}>
        <div style={{ height: 320, backgroundColor: "white" }}>
          <div style={{ display: "flex" }}>
            <h1 style={{ marginTop: 20, marginLeft: 20 }}>Today's Deal</h1>
            <a style={{ marginLeft: 20, marginTop: 35 }} href="/">
              See all deals
            </a>
          </div>
          <div style={{ cursor: "pointer" }}>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img
                  style={{
                    width: 200,
                    marginTop: 30,
                    marginBottom: 50,
                    marginLeft: 10,
                  }}
                  src="https://m.media-amazon.com/images/I/31bB-MbvPBL._AC_SY400_.jpg"
                />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h3
                    style={{
                      marginTop: 25,
                      marginLeft: 10,
                      backgroundColor: "#CC0C39",
                      color: "white",
                      fontSize: 15,
                      width: 110,
                    }}
                  >
                    Up to 16% off
                  </h3>
                  <h3
                    style={{
                      marginTop: 25,
                      marginLeft: 5,
                      fontSize: 15,
                      width: 110,
                    }}
                  >
                    Deal of the day
                  </h3>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img
                  style={{
                    width: 160,
                    marginTop: 30,
                    marginLeft: 20,
                    height: 150,
                  }}
                  src="https://m.media-amazon.com/images/I/41zL6EeHU7L._AC_SY400_.jpg"
                />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h3
                    style={{
                      marginTop: 50,
                      marginLeft: 20,
                      backgroundColor: "#CC0C39",
                      color: "white",
                      fontSize: 15,
                      width: 110,
                    }}
                  >
                    Up to 17% off
                  </h3>
                  <h3
                    style={{
                      marginTop: 50,
                      marginLeft: 5,
                      fontSize: 15,
                      width: 110,
                    }}
                  >
                    Deal of the day
                  </h3>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img
                  style={{
                    width: 200,
                    marginTop: 30,
                    marginBottom: 50,
                    marginLeft: 10,
                  }}
                  src="https://m.media-amazon.com/images/I/31Ld7DGtPQL._AC_SY400_.jpg"
                />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h3
                    style={{
                      marginTop: 40,
                      marginLeft: 20,
                      backgroundColor: "#CC0C39",
                      color: "white",
                      fontSize: 15,
                      width: 110,
                    }}
                  >
                    Up to 54% off
                  </h3>
                  <h3
                    style={{
                      marginTop: 40,
                      marginLeft: 5,
                      fontSize: 15,
                      width: 110,
                    }}
                  >
                    Deal of the day
                  </h3>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img
                  style={{
                    width: 140,
                    marginTop: 30,
                    marginBottom: 50,
                    marginLeft: 40,
                    height: 150,
                  }}
                  src="https://m.media-amazon.com/images/I/3150P3KQFlL._AC_SY400_.jpg"
                />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h3
                    style={{
                      marginTop: 0,
                      marginLeft: 40,
                      backgroundColor: "#CC0C39",
                      color: "white",
                      fontSize: 15,
                      width: 110,
                    }}
                  >
                    Up to 45% off
                  </h3>
                  <h3
                    style={{
                      marginTop: 0,
                      marginLeft: 5,
                      fontSize: 15,
                      width: 110,
                    }}
                  >
                    Deal of the day
                  </h3>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img
                  style={{
                    width: 160,
                    marginTop: 30,
                    marginBottom: 50,
                    marginLeft: 30,
                    height: 150,
                  }}
                  src="https://m.media-amazon.com/images/I/41hVC-zcFEL._AC_SY400_.jpg"
                />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h3
                    style={{
                      marginTop: 0,
                      marginLeft: 20,
                      backgroundColor: "#CC0C39",
                      color: "white",
                      fontSize: 15,
                      width: 110,
                    }}
                  >
                    Up to 61% off
                  </h3>
                  <h3
                    style={{
                      marginTop: 0,
                      marginLeft: 5,
                      fontSize: 15,
                      width: 110,
                    }}
                  >
                    Deal of the day
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
