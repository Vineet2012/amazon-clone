import React from "react";

export default function Browsing(props) {
  return (
    <div>
      <div style={{ width: 210.5 }}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              height: 410,
              backgroundColor: "white",
              lineHeight: "23px",
              marginTop: 30,
              fontFamily: "Arial,sans-serif",
              fontSize: 14,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                style={{
                  width: 200,
                  height: 160,
                  marginLeft: 5,
                }}
                src={props.boro.img1}
              />
              <p style={{ marginLeft: 5 }}>{props.boro.poro}</p>
              <p style={{ marginLeft: 5 }}>{props.boro.poros}</p>
              <div style={{ display: "flex" }}>
                <img
                  style={{ width: 80, height: 20, marginLeft: 5 }}
                  src={props.boro.rating}
                />
                <p style={{ width: 50, marginLeft: 10 }}>{props.boro.rat}</p>
              </div>
              <p style={{ marginLeft: 5 }}>{props.boro.price}</p>
              <p style={{ marginLeft: 5 }}>{props.boro.time}</p>
              <p style={{ marginLeft: 5 }}>{props.boro.charge}</p>
              <p style={{ marginLeft: 5 }}>{props.boro.usual}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
