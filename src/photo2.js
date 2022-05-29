import React from "react";

export default function Photo2() {
  return (
    <div>
      <div
        style={{
          width: 250,
          backgroundColor: "white",
          marginTop: 30,
          borderRadius: 10,
        }}
      >
        <div style={{ height: 480 }}>
          <h1 style={{ paddingLeft: 10, paddingTop: 15, fontSize: 27 }}>
            best seller in beauty
          </h1>
          <img
            style={{ height: 200, marginLeft: 80, marginTop: 10 }}
            src="https://m.media-amazon.com/images/I/51hwUO-kAqL._AC_SY350_.jpg"
          />
          <p style={{ marginLeft: 13, marginTop: 10 }}>
            Mamaearth ubtan Natural Face Wash for All Skin Types With Turmeric &
            safforon fo...
          </p>
          <div style={{ display: "flex", marginLeft: 15, marginTop: 10 }}>
            <p>Rs.228.00 </p>
            <p
              className="nav--last"
              style={{ fontSize: 10, marginTop: 8, marginLeft: 8 }}
            >
              Rs.249.00
            </p>
          </div>
          <div style={{ display: "flex", marginTop: 18, marginLeft: 15 }}>
            <img
              style={{ width: 40, height: 70 }}
              src="https://m.media-amazon.com/images/I/51hwUO-kAqL._AC_SY110_.jpg"
            />
            <img
              style={{ width: 40, height: 70, marginLeft: 15 }}
              src="https://m.media-amazon.com/images/I/61PsM0xoZuL._AC_SY110_.jpg"
            />
            <img
              style={{ width: 40, height: 70, marginLeft: 15 }}
              src="https://m.media-amazon.com/images/I/61FjVQa2R5L._AC_SY110_.jpg"
            />
            <img
              style={{ width: 40, height: 70, marginLeft: 15 }}
              src="https://m.media-amazon.com/images/I/61FjVQa2R5L._AC_SY110_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
