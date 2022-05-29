import React from "react";

export default function Small2() {
  return (
    <div style={{ width: 250 }}>
      <div
        style={{
          height: 310,
          backgroundColor: "white",
          marginTop: 20,
          borderRadius: 10,
          fontFamily: "Trebuchet MS",
          fontSize: 12,
        }}
      >
        <h1 style={{ marginLeft: 20, paddingTop: 10 }}>
          Up to 70% off | Clearance store
        </h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            style={{
              width: 200,
              height: 200,
              marginLeft: 25,
              marginTop: 10,
              borderRadius: 10,
            }}
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_2x._SY608_CB628315133_.jpg"
          />
          <a style={{ fontSize: 15, marginTop: 10, marginLeft: 20 }} href="/">
            See More
          </a>
        </div>
      </div>
    </div>
  );
}
