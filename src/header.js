import React from "react";

export default function Header() {
  return (
    <div className="nav--logo">
      <div
        className="nav--logo"
        id="navBackToTop"
        style={{ display: "flex", position: "sticky" }}
      >
        <img
          style={{
            width: 120,
            height: 40,
            marginTop: 10,
            marginLeft: 10,
            cursor: "pointer",
          }}
          src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png?fit=636%2C193&ssl=1"
        />
        <div
          className="nav--head"
          style={{ display: "flex", flexDirection: "column", marginTop: 6 }}
        >
          <h1
            style={{
              marginLeft: 28,
              fontSize: 13,
              marginTop: 10,
              fontWeight: 200,
              fontStyle: "Monospace",
              cursor: "pointer",
            }}
          >
            Hello
          </h1>
          <div style={{ display: "flex" }}>
            <img
              style={{
                width: 15,
                height: 15,
                borderRadius: "100%",
                cursor: "pointer",
                marginLeft: 10,
              }}
              src="https://media.istockphoto.com/vectors/location-icon-vector-pin-sign-isolated-on-white-background-navigation-vector-id1136653126?s=612x612"
            />
            <h1
              style={{
                fontSize: 14,
                marginLeft: 5,
                color: "white",
                fontFamily: "Trebuchet MS",
                cursor: "pointer",
              }}
            >
              Select Your Address
            </h1>
          </div>
        </div>
        <div style={{ display: "flex", margin: 0 }}>
          <select
            className="nav--sel"
            name="Collections"
            id="Collections"
            style={{
              width: 60,
              height: 37,
              marginTop: 11,
              marginLeft: 12,
              cursor: "pointer",
            }}
          >
            <option value="All">All</option>
            <option value="Books">Books</option>
            <option value="Phones">Phones</option>
            <option value="T.V">T.V</option>
            <option value="Amazon Fharmacy">Amazon Fharmacy</option>
            <option value="Beauty">Beauty</option>
            <option value="Clothing and Accesories">
              Clothing and Accesories
            </option>
            <option value="Shoes and Handbags">Shoes and Handbags</option>
            <option value="Furnitures">Furnitures</option>
            <option value="Gift Cards">Gift Cards</option>
            <option value="Apps and Games">Apps and Games</option>
            <option value="Fashiom">Fashion</option>
            <option value="Pet Supplies">Pet Supplies</option>
            <option value="Gardens and Outdoors">Gardens and Outdoors</option>
            <option value="Deals">Deals</option>
            <option value="Collectibles">Collectibles</option>
          </select>
          <form style={{ marginTop: 11 }}>
            <input type="text" style={{ width: 450, height: 31 }}></input>
          </form>
          <button
            className="nav--butt"
            style={{
              width: 50,
              height: 40,
              marginTop: 10,
              backgroundColor: "orange",
            }}
          >
            <img
              style={{
                width: 40,
                height: 32,
                cursor: "pointer",
              }}
              src="https://cdn-icons-png.flaticon.com/512/46/46389.png"
            />
          </button>
        </div>
        <select
          name="flags"
          id="flags"
          style={{
            width: 40,
            height: 30,
            marginLeft: 25,
            marginTop: 17,
            cursor: "pointer",
          }}
        >
          <option value="INDIA">INDIA</option>
          <option value="AMERICA">AMERICA</option>
          <option value="ITALY">ITALY</option>
          <option value="USA">USA</option>
          <option value="AUSTRALIA">AUSTRALIA</option>
          <option value="FINLAND">FINLAND</option>
          <option value="FRANCE">FRANCE</option>
          <option value="SYDNEY">SYDNEY</option>
          <option value="GERMANY">GERMANY</option>
        </select>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              marginLeft: 22,
              fontSize: 13,
              marginTop: 18,
              fontWeight: 200,
              cursor: "pointer",
              color: "white",
              fontFamily: "Trebuchet MS",
            }}
          >
            Hello, Sign in
          </h1>
          <h1
            style={{
              marginLeft: 22,
              fontSize: 16,
              marginTop: 0,
              fontWeight: 900,
              cursor: "pointer",
              color: "white",
              fontFamily: "Trebuchet MS",
            }}
          >
            Accounts and Lists
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              marginLeft: 22,
              fontSize: 13,
              marginTop: 18,
              fontWeight: 200,
              cursor: "pointer",
              color: "white",
              fontFamily: "Trebuchet MS",
            }}
          >
            Returns
          </h1>
          <h1
            style={{
              marginLeft: 18,
              fontSize: 16,
              marginTop: 0,
              fontWeight: 900,
              cursor: "pointer",
              color: "white",
              fontFamily: "Trebuchet MS",
            }}
          >
            & Orders
          </h1>
        </div>
        <img
          style={{
            width: 50,
            height: 50,
            marginLeft: 5,
            borderRadius: 60,
            marginTop: 5,
            cursor: "pointer",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItTE_1bkN6unnQLS_viymquHzmxZEoLckdvPiL5J7g2RY2N4ZIBfznZ5_z94nHijCHbw&usqp=CAU"
        />
        <h2
          style={{
            fontSize: 11,
            color: "white",
            fontFamily: "Trebuchet MS",
            marginTop: 40,
          }}
        >
          Cart
        </h2>
      </div>
    </div>
  );
}
