import React from "react";

export default function Carding(props) {
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
              {props.items.head}
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
                    src={props.items.image1}
                  />
                  <h2
                    style={{
                      fontSize: 14,
                      marginLeft: 20,
                      fontWeight: 400,
                      fontFamily: "Trebuchet MS",
                    }}
                  >
                    {props.items.texting1}
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
                    src={props.items.image2}
                  />
                  <h2
                    style={{
                      fontSize: 14,
                      marginLeft: 15,
                      fontWeight: 400,
                      fontFamily: "Trebuchet MS",
                    }}
                  >
                    {props.items.texting2}
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
                    src={props.items.image3}
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
                    {props.items.texting3}
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
                    src={props.items.image4}
                  />
                  <h2
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Trebuchet MS",
                      marginLeft: 10,
                    }}
                  >
                    {props.items.texting4}
                  </h2>
                </div>
              </div>
              <a style={{ marginTop: 20, marginLeft: 20 }} href="/">
                {props.items.link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
