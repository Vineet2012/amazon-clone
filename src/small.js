import React from "react";

export default function Small() {
  return (
    <div>
      <div style={{ width: 250 }}>
        <div
          style={{ height: 150, backgroundColor: "white", borderRadius: 10 }}
        >
          <div>
            <h1
              style={{
                marginTop: 30,
                marginLeft: 15,
                fontSize: 25,
                paddingTop: 15,
                cursor: "auto",
              }}
            >
              Sign in for your best experience
            </h1>
            <button
              style={{
                marginTop: 30,
                marginLeft: 45,
                width: 160,
                height: 30,
                borderRadius: 10,
                backgroundColor: "#FFD814",
                border: 0,
                cursor: "pointer",
              }}
            >
              Sign in securely
            </button>
            <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
