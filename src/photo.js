import React from "react";

export default function Photo() {
  return (
    <div>
      <div style={{ width: 270 }}>
        <div
          style={{
            height: 460,
            backgroundColor: "white",
            borderRadius: 10,
            marginTop: 30,
            paddingTop: 20,
            marginRight: 20,
            paddingLeft: 30,
          }}
        >
          <h1>Home summer needs</h1>
          <img
            style={{ width: 120, height: 120, marginLeft: 30, marginTop: 20 }}
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/BAU/GW/2x_towels._SY232_CB623248720_.jpg"
          />
          <h2 style={{ marginLeft: 30 }}>Towels</h2>
          <img
            style={{
              width: 120,
              height: 120,
              marginTop: 20,
              marginLeft: 30,
              marginTop: 20,
            }}
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/BAU/GW/2x_bucket._SY232_CB623248720_.jpg"
          />
          <h2 style={{ marginLeft: 30, marginBottom: 60 }}>
            Bathroom Accesories
          </h2>
          <a style={{ marginLeft: 10, fontSize: 15 }} href="">
            See More
          </a>
        </div>
      </div>
    </div>
  );
}
