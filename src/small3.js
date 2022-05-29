import React from "react";

export default function Small3() {
  return (
    <div style={{ width: 300 }}>
      <div
        style={{
          height: 480,
          backgroundColor: "white",
          marginTop: 30,
          borderRadius: 10,
          fontFamily: "Trebuchet MS",
          fontSize: 12,
        }}
      >
        <h1 style={{ marginLeft: 20, paddingTop: 10 }}>
          Pest control, gardening and Outdoors essentials
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
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/MSO_May/758x608._SY608_CB621566454_.jpg"
          />
          <a style={{ fontSize: 15, marginTop: 60, marginLeft: 20 }} href="/">
            See More
          </a>
        </div>
      </div>
    </div>
  );
}
