import React from "react";

export default function Main() {
  return (
    <div className="nav--sec" style={{ display: "flex" }}>
      <h1
        style={{
          fontSize: 14,
          fontFamily: "system-ui",
          color: "white",
          paddingTop: 11,
          paddingLeft: 20,
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        All
      </h1>
      <h1
        style={{
          fontSize: 14,
          fontFamily: "system-ui",
          color: "white",
          paddingTop: 11,
          paddingLeft: 20,
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Best Sellers
      </h1>
      <h1
        style={{
          fontSize: 14,
          fontFamily: "system-ui",
          color: "white",
          paddingTop: 11,
          paddingLeft: 20,
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Mobiles
      </h1>
      <h1
        style={{
          fontSize: 14,
          fontFamily: "system-ui",
          color: "white",
          paddingTop: 11,
          paddingLeft: 20,
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Customer Service
      </h1>
      <h1
        style={{
          fontSize: 14,
          fontFamily: "system-ui",
          color: "white",
          paddingTop: 11,
          paddingLeft: 20,
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Today's Deals
      </h1>
      <h1
        style={{
          fontSize: 14,
          fontFamily: "system-ui",
          color: "white",
          paddingTop: 11,
          paddingLeft: 20,
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Fashions
      </h1>
      <h1
        style={{
          fontSize: 14,
          fontFamily: "system-ui",
          color: "white",
          paddingTop: 11,
          paddingLeft: 20,
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Electronics
      </h1>
      <h1
        style={{
          fontSize: 14,
          fontFamily: "system-ui",
          color: "white",
          paddingTop: 11,
          paddingLeft: 20,
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Prime
      </h1>
      <h1
        style={{
          fontSize: 14,
          fontFamily: "system-ui",
          color: "white",
          paddingTop: 11,
          paddingLeft: 20,
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Home & Kitchen
      </h1>
      <h1
        style={{
          fontSize: 14,
          fontFamily: "system-ui",
          color: "white",
          paddingTop: 11,
          paddingLeft: 140,
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Try Prime, Free for 30 days
      </h1>
      <h1 style={{ color: "white", paddingLeft: 5 }}>|</h1>
      <h1>
        {" "}
        <img
          style={{ width: 150, height: 25, paddingTop: 11, paddingLeft: 5 }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHELEIh1EnJo-q_5iqvfB0-TwKewfEM5cy_zyCxGfQXG5khe-cpQo3JY6n58-gnMqZEA&usqp=CAU"
        />
      </h1>
    </div>
  );
}

/*export default function Main() {
  let [memeImage, setImage] = React.useState("");
  function getMeme() {
    let onMeme = memes.data.meme;
    let randomMeme = Math.floor(Math.random() * onMeme.length);
    setImage(onMeme[randomMeme].url);
  }
  function Like() {}
  return (
    <main>
      <div>
        <div style={{ display: "flex" }}>
          <input
            style={{
              width: 500,
              height: 40,
              fontSize: 20,
              borderRadius: 5,
              textIndent: 10,
              marginTop: 70,
              marginLeft: 15,
            }}
            placeholder="Top Text"
            type="text"
          ></input>
          <input
            style={{
              width: 500,
              height: 40,
              fontSize: 20,
              borderRadius: 5,
              textIndent: 10,
              marginTop: 70,
              marginLeft: 15,
              marginTop: 70,
              marginLeft: 250,
            }}
            placeholder="Bottom Text"
            type="text"
          ></input>
        </div>
        <button
          onClick={getMeme}
          style={{
            marginTop: 40,
            marginLeft: 340,
            width: 600,
            height: 50,
            backgroundColor: "#672280",
            color: "#F6F6F6",
            fontSize: 20,
            borderRadius: 10,
            border: "solid 3px black ",
            cursor: "pointer",
          }}
        >
          Get a new meme image
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img
          style={{ width: 400, height: 300, marginLeft: 420, marginTop: 20 }}
          src={memeImage}
        />
      </div>
    </main>
  );
}*/
