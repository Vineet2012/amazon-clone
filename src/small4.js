import React from "react";

export default function Small4() {
  return (
    <div style={{ width: 330 }}>
      <div
        style={{
          height: 480,
          backgroundColor: "white",
          marginTop: 30,
          borderRadius: 10,
          fontFamily: "Trebuchet MS",
          fontSize: 12,
          marginLeft: 30,
        }}
      >
        <h1 style={{ marginLeft: 20, paddingTop: 10 }}>
          ACs | Up to 60% off | Clearence store |
        </h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            style={{
              width: 250,
              height: 280,
              marginLeft: 25,
              marginTop: 30,
              borderRadius: 10,
            }}
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/AC-2-CC-PC-2x._SY608_CB635694631_.jpgg"
          />
          <a style={{ fontSize: 15, marginTop: 60, marginLeft: 20 }} href="/">
            See More
          </a>
        </div>
      </div>
    </div>
  );
}
