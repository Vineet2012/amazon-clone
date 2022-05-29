import React from "react";

export default function Maincontent(props) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: 330 }}>
          <div
            style={{
              margin: 30,
              backgroundColor: "white",
              borderRadius: 10,
              marginLeft: 10,
              height: 480,
            }}
          >
            <h2
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                marginLeft: 20,
                fontFamily: "Trebuchet MS",
              }}
            >
              {props.item.heading}
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img
                    style={{
                      width: 120,
                      height: 120,
                      marginLeft: 20,
                      borderRadius: 5,
                    }}
                    src={props.item.img1}
                  />
                  <h2
                    style={{
                      fontSize: 14,
                      marginLeft: 20,
                      fontWeight: 400,
                      fontFamily: "Trebuchet MS",
                    }}
                  >
                    {props.item.text1}
                  </h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img
                    style={{
                      width: 120,
                      height: 120,
                      marginLeft: 15,
                      borderRadius: 5,
                    }}
                    src={props.item.img2}
                  />
                  <h2
                    style={{
                      fontSize: 14,
                      marginLeft: 15,
                      fontWeight: 400,
                      fontFamily: "Trebuchet MS",
                    }}
                  >
                    {props.item.text2}
                  </h2>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: 200,
                  }}
                >
                  <img
                    style={{
                      width: 120,
                      height: 120,
                      marginLeft: 20,
                      marginTop: 20,
                      borderRadius: 5,
                    }}
                    src={props.item.img3}
                  />
                  <h2
                    style={{
                      fontSize: 14,
                      marginLeft: 20,
                      width: 120,
                      fontWeight: 400,
                      fontFamily: "Trebuchet MS",
                    }}
                  >
                    {props.item.text3}
                  </h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img
                    style={{
                      width: 120,
                      height: 120,
                      marginTop: 20,
                      marginLeft: 10,
                      borderRadius: 5,
                      marginRight: 12,
                    }}
                    src={props.item.img4}
                  />
                  <h2
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Trebuchet MS",
                      marginLeft: 10,
                    }}
                  >
                    {props.item.text4}
                  </h2>
                </div>
              </div>
              <a style={{ marginTop: 20, marginLeft: 20 }} href="/">
                {props.item.links}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
