/*function Item({ image, text }) {
  const boxWidth = 120;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: boxWidth,
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          width: boxWidth,
          height: boxWidth,
          objectFit: "cover",
          borderRadius: 4,
        }}
      />
      <span style={{ fontSize: 14 }}>{text}</span>
    </div>
  );
}

export default function Card2Cmp({ heading, contents }) {
  const spacings = 16;

  return (
    <div
      style={{
        backgroundColor: "#FFF",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        margin: 16,
      }}
    >
      <h2>{heading}</h2>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 16 }}>
        <div style={{ display: "flex" }}>
          <Item {...contents[0]} />
          <div style={{ marginRight: spacings }}></div>
          <Item {...contents[1]} />
        </div>
        <div style={{ display: "flex", marginTop: spacings }}>
          <Item {...contents[2]} />
          <div style={{ marginRight: spacings }}></div>
          <Item {...contents[3]} />
        </div>
      </div>
      <div style={{ marginTop: 16 }}></div>
      <a href="/">See more...</a>
    </div>
  );
}*/
