import React from "react";

export default function Small5() {
  return (
    <div style={{ width: 280 }}>
      <div
        style={{
          height: 480,
          backgroundColor: "white",
          marginTop: 30,
          borderRadius: 10,
          fontFamily: "Trebuchet MS",
          fontSize: 12,
          marginLeft: 20,
        }}
      >
        <h1 style={{ marginLeft: 10, paddingTop: 10 }}>
          Up to 60% off | Fitness essentials to set up you...
        </h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            style={{
              width: 230,
              height: 280,
              marginLeft: 16,
              marginTop: 30,
              borderRadius: 10,
            }}
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_758x608_New_compressed._SY608_CB448277514_.jpg"
          />
          <a style={{ fontSize: 15, marginTop: 40, marginLeft: 20 }} href="/">
            See More
          </a>
        </div>
      </div>
    </div>
  );
}
