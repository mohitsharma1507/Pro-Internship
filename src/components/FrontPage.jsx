import { IoDiamondOutline } from "react-icons/io5";
import { RiScrollToBottomLine } from "react-icons/ri";
import { BsBagHeartFill } from "react-icons/bs";

import stone from "../assets/stone.png";
function FrontPage() {
  return (
    <center
      className="Container"
      style={{
        height: "100vh",
        background:
          "radial-gradient(circle at top left, #c4e0f3, #f1d1f0, #f5b1ac, #73c8f3)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className="navbar">
        <a
          href="/"
          className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          style={{ marginLeft: "76px", fontSize: "30px" }}
        >
          <button style={{ width: "42px", borderRadius: "50px" }}>
            <IoDiamondOutline />
          </button>
          Pop Crystal Rock
        </a>

        <ul
          className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small"
          style={{ marginRight: "10rem", fontSize: "30px" }}
        >
          <li>
            <a href="#" className="nav-link text-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Help
            </a>
          </li>
          <li style={{ marginLeft: "5rem" }}>
            <BsBagHeartFill />
          </li>
        </ul>
      </div>
      <div className="rightPart">
        <p
          style={{
            fontFamily: "Anton ,sans-serif",
            color: "white",
            fontWeight: "700",
            fontSize: "26px",
            marginTop: "7rem",
            marginLeft: "-67rem",
          }}
        >
          Welcome to
        </p>
        <h1
          style={{
            fontFamily: "Anton ,sans-serif",
            fontWeight: "800",
            color: "white",
            marginLeft: "-44rem",
            marginTop: "-1rem",
            fontSize: "42px",
          }}
        >
          Pop Crystal Rock Shop!{" "}
        </h1>

        <p
          style={{
            color: "#0A294D",
            width: "25rem",
            marginLeft: "-54rem",
            marginTop: "2rem",
          }}
        >
          Here you will find unique phone accessories,Crystals.
          <br />
          Jewelly and more.Free shopping inside the U.S.and our
          <br />
          phone grips come with a limited warranty. Enjoy!
        </p>
        <div
          className="btn "
          style={{
            color: "blue",
            width: "13rem",
            height: "4rem",
            fontSize: "27px",
            borderRadius: "20px",
            border: "2px lightblue white",
            backgroundColor: "white",
            marginLeft: "-65rem",
            marginTop: "1rem",
            fontWeight: "800",
            marginBottom: "15rem",
          }}
        >
          SHOP NOW
        </div>
      </div>
      <div className="card">
        <div className="col">
          <div
            className="card"
            style={{
              width: "25rem",
              border: "2px lightgrey solid",
              borderRadius: "22px",
              marginLeft: "57rem",
              marginTop: "-38rem",
            }}
          >
            <img src={stone} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                CRYSTAL AGATE PHONE GRIP -
                <p style={{ color: "blue" }}>18.99&#36;</p>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <p style={{ color: "#0A294D", marginTop: "-5rem" }}>
        <RiScrollToBottomLine />
        Scroll down
      </p>
    </center>
  );
}

export default FrontPage;
