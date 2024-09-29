import { MdOutlineArrowDropDown } from "react-icons/md";
import stone from "../assets/stone.png";

function MiddlePage() {
  return (
    <center className="Heading">
      <h1
        style={{
          fontSize: "25px",
          fontFamily: "Anton, sans-serif",
          color: "darkblue",
          fontWeight: "800",
        }}
      >
        All Product
      </h1>
      <div
        className="box"
        style={{
          width: "58px",
          height: "4px",
          border: "2px solid lightgrey",
          borderRadius: "28px",
        }}
      ></div>
      <div
        className="category"
        style={{ display: "flex", margin: "10px", marginLeft: "50px" }}
      >
        <h1
          style={{
            fontSize: "25px",
            fontFamily: "Anton, sans-serif",
            color: "lightGrey",
          }}
        >
          Filter: &nbsp;
          <b
            style={{
              fontSize: "25px",
              fontFamily: "Anton, sans-serif",
              color: "darkblue",
            }}
          >
            All Products
            <MdOutlineArrowDropDown />
          </b>
        </h1>

        <h1
          style={{
            fontSize: "25px",
            fontFamily: "Anton, sans-serif",
            color: "lightGrey",
            marginLeft: "9rem",
          }}
        >
          Sort: &nbsp;
          <b
            style={{
              fontSize: "25px",
              fontFamily: "Anton, sans-serif",
              color: "darkblue",
            }}
          >
            Best Selling
            <MdOutlineArrowDropDown />
          </b>
        </h1>
      </div>
      <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mt-3 g-4">
        <div className="col">
          <div
            className="card"
            style={{
              width: "18rem",
              border: "2px lightgrey solid",
              borderRadius: "22px",
            }}
          >
            <img src={stone} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                CRYSTAL AGATE PHONE GRIP <br />
                <p style={{ color: "blue" }}>18.99&#36;</p>
              </h5>
              <a
                href="#"
                className="btn btn-primary"
                style={{
                  width: "13rem",
                  borderRadius: "16px",
                  border: "2px lightblue solid",
                }}
              >
                BUY NOW
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card"
            style={{
              width: "18rem",
              border: "2px lightgrey solid",
              borderRadius: "22px",
            }}
          >
            <img src={stone} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                CRYSTAL AGATE PHONE GRIP <br />
                <p style={{ color: "blue" }}>18.99&#36;</p>
              </h5>
              <a
                href="#"
                className="btn"
                style={{
                  color: "lightblue",
                  width: "13rem",
                  borderRadius: "16px",
                  border: "2px lightblue solid",
                }}
              >
                BUY NOW
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card"
            style={{
              width: "18rem",
              border: "2px lightgrey solid",
              borderRadius: "22px",
            }}
          >
            <img src={stone} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                CRYSTAL AGATE PHONE GRIP <br />
                <p style={{ color: "blue" }}>18.99&#36;</p>
              </h5>
              <a
                href="#"
                className="btn"
                style={{
                  color: "lightblue",
                  width: "13rem",
                  borderRadius: "16px",
                  border: "2px lightblue solid",
                }}
              >
                BUY NOW
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card"
            style={{
              width: "18rem",
              border: "2px lightgrey solid",
              borderRadius: "22px",
            }}
          >
            <img src={stone} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                CRYSTAL AGATE PHONE GRIP <br />
                <p style={{ color: "blue" }}>18.99&#36;</p>
              </h5>
              <a
                href="#"
                className="btn"
                style={{
                  color: "lightblue",
                  width: "13rem",
                  borderRadius: "16px",
                  border: "2px lightblue solid",
                }}
              >
                BUY NOW
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card"
            style={{
              width: "18rem",
              border: "2px lightgrey solid",
              borderRadius: "22px",
            }}
          >
            <img src={stone} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                CRYSTAL AGATE PHONE GRIP <br />
                <p style={{ color: "blue" }}>18.99&#36;</p>
              </h5>
              <a
                href="#"
                className="btn"
                style={{
                  color: "lightblue",
                  width: "13rem",
                  borderRadius: "16px",
                  border: "2px lightblue solid",
                }}
              >
                BUY NOW
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card"
            style={{
              width: "18rem",
              border: "2px lightgrey solid",
              borderRadius: "22px",
            }}
          >
            <img src={stone} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                CRYSTAL AGATE PHONE GRIP <br />
                <p style={{ color: "blue" }}>18.99&#36;</p>
              </h5>
              <a
                href="#"
                className="btn"
                style={{
                  color: "lightblue",
                  width: "13rem",
                  borderRadius: "16px",
                  border: "2px lightblue solid",
                }}
              >
                BUY NOW
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card"
            style={{
              width: "18rem",
              border: "2px lightgrey solid",
              borderRadius: "22px",
            }}
          >
            <img src={stone} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                CRYSTAL AGATE PHONE GRIP <br />
                <p style={{ color: "blue" }}>18.99&#36;</p>
              </h5>
              <a
                href="#"
                className="btn"
                style={{
                  color: "lightblue",
                  width: "13rem",
                  borderRadius: "16px",
                  border: "2px lightblue solid",
                }}
              >
                BUY NOW
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card"
            style={{
              width: "18rem",
              border: "2px lightgrey solid",
              borderRadius: "22px",
            }}
          >
            <img src={stone} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                CRYSTAL AGATE PHONE GRIP <br />
                <p style={{ color: "blue" }}>18.99&#36;</p>
              </h5>
              <a
                href="#"
                className="btn"
                style={{
                  color: "lightblue",
                  width: "13rem",
                  borderRadius: "16px",
                  border: "2px lightblue solid",
                }}
              >
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="btn"
        style={{
          color: "blue",
          width: "13rem",
          borderRadius: "16px",
          border: "2px lightblue solid",
          marginTop: "6rem",
        }}
      >
        View All
      </div>
    </center>
  );
}
export default MiddlePage;
