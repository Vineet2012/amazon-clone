import React from "react";
import Headings from "./cards";

export default function CarouselCmp() {
  const [idx, setIdx] = React.useState(0);

  const arr1 = [1, 2, 3];
  console.log(arr1.length);

  function goForward() {
    setIdx((idx + 1) % images.length);
  }

  function goBackward() {
    if (idx === 0) setIdx(images.length - 1);
    else setIdx(idx - 1);
  }

  return (
    <div style={{ position: "relative", cursor: "pointer" }}>
      <div style={{ position: "relative" }}>
        <div style={{ height: 400 }}>
          <img style={{ width: "100%", height: 400 }} src={images[idx]} />
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            alignItems: "center",
          }}
        >
          <button
            style={{ width: 30, height: 120, fontSize: 20, cursor: "pointer" }}
            onClick={goBackward}
          >
            {"<"}
          </button>
          <button
            style={{ width: 30, height: 120, fontSize: 20, cursor: "pointer" }}
            onClick={goForward}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

let images = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img20/2022/under1999/1999_Tallhero_3000x1200_n._CB636771823_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img20/2022/under1999/1999_Tallhero_3000x1200_n._CB636771823_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/BAU/ATFGW/3000x1200_best_find_coupon._CB636934541_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/KGFChapter2/Gateway_Desktop_Tall_Hero_English_3000x1200._CB636728855_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/KGFChapter2/Gateway_Desktop_Tall_Hero_English_3000x1200._CB636728855_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/BAU/ATFGW/Art_3000X1200_2_BS._CB637352283_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/BAU/ATFGW/Art_3000X1200_2_BS._CB637352283_.jpg",
];
