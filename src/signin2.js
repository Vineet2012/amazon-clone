import React from "react";

export default function Signin2() {
  return (
    <div style={{ fontFamily: "Trebuchet MS" }}>
      <hr style={{ marginTop: 20 }} />
      <h1
        style={{
          marginLeft: 500,
          fontSize: 15,
          marginTop: 20,
          marginBottom: 5,
          fontWeight: 400,
        }}
      >
        See personalized recommendation
      </h1>
      <button
        style={{
          marginLeft: 490,
          width: 250,
          height: 30,
          backgroundColor: "rgb(255,215,0)",
          cursor: "pointer",
          border: 0,
          borderRadius: 5,
          fontSize: 15,
        }}
      >
        Sign in
      </button>
      <div style={{ display: "flex" }}>
        <h2
          style={{
            marginLeft: 540,
            fontSize: 13,
            marginTop: 5,
            fontWeight: 200,
          }}
        >
          New customer?
        </h2>
        <a
          style={{
            cursor: "pointer",
            fontSize: 12,
            marginTop: 5,
            marginLeft: 5,
            marginBottom: 20,
          }}
          href="/"
        >
          {" "}
          Start here.
        </a>
      </div>
      <hr />
    </div>
  );
}
