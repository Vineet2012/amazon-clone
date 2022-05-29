import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Main from "./button";
import CarouselCmp from "./carousel";
import Headings from "./cards";
import Maincontent from "./mainContent";
import list from "./list";
import Small from "./small";
import Carding from "./cards";
import list2 from "./list2";
import Photo from "./photo";
import Oneline from "./oneLine1";
import Row from "./Row3";
import list3 from "./list3";
import Photo2 from "./photo2";
import Oneline2 from "./newList";
import Small2 from "./small2";
import Row3 from "./oneLine3";
import Row4 from "./row4";
import list5 from "./list5";
import Small3 from "./small3";
import Small4 from "./small4";
import Small5 from "./small5";
import Small6 from "./small6";
import List4 from "./list4";
import List7 from "./list7";
import List8 from "./list8";
import List9 from "./list9";
import List10 from "./list10";
import List11 from "./list11";
import Signin2 from "./signin2";
import Back from "./backtop";
import Last from "./last";
import Lastest from "./lastest";
import Browsing from "./browsing";
import listbrowsing from "./listbrowsing";

function App() {
  let BROWSING = listbrowsing.map((boro) => {
    return <Browsing boro={boro} />;
  });
  let clothe = list5.map((clothes) => {
    return <Row4 clothes={clothes} />;
  });
  let Content = list.map((item) => {
    return <Maincontent item={item} />;
  });
  let carding = list2.map((items) => {
    return <Carding items={items} />;
  });
  let rowing = list3.map((product) => {
    return <Row product={product} />;
  });
  return (
    <div>
      <Header />
      <Main />
      <CarouselCmp />
      <div style={{ display: "flex", cursor: "pointer" }}>
        {Content}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Small />
          <Small2 />
        </div>
      </div>
      <div style={{ display: "flex", cursor: "pointer" }}>
        {carding}
        <div
          style={{ display: "flex", fontFamily: "Trebuchet MS", fontSize: 10 }}
        >
          <Photo />
        </div>
      </div>
      <Oneline />
      <div style={{ display: "flex", cursor: "pointer" }}>
        {rowing}
        <div style={{ display: "flex", fontFamily: "Trebuchet MS" }}>
          <Photo2 />
        </div>
      </div>
      <Oneline2 />
      <div>
        <Row3 />
      </div>
      <div style={{ display: "flex" }}>
        {clothe}{" "}
        <div style={{ display: "flex" }}>
          <Small3 /> <Small4 /> <Small5 />
        </div>{" "}
      </div>
      <div>
        <Small6 />
      </div>
      <List4 />
      <div style={{ display: "flex" }}>
        <List7 />
        <List8 />
        <List9 />
        <List10 />
        <List11 />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFF",
          marginTop: 30,
        }}
      >
        <div
          style={{
            paddingLeft: 8,
            paddingTop: 10,
            fontFamily: "Arial,sans-serif",
            fontSize: 15,
          }}
        >
          <h1>
            Customers who viewed browsing items in your history also viewed
          </h1>
        </div>
        <div style={{ display: "flex" }}>{BROWSING}</div>
      </div>
      <Signin2 />
      <Back />
      <Last />
      <Lastest />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
