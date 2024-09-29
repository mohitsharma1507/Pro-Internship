import stone from "../assets/stone.png";

function FooterPage() {
  return (
    <center className="heading" style={{ marginTop: "-32rem" }}>
      <p
        style={{
          color: "#0A294D",
          fontFamily: "Anton, sans-serif",
          marginTop: "42rem",
          fontSize: "32px",
          marginLeft: "-16rem",
        }}
      >
        BEST PRICE
      </p>
      <h1
        className="name"
        style={{
          color: "#0A294D",
          fontFamily: "Anton, sans-serif",
          fontSize: "53px",
          fontWeight: "700",
          marginTop: "-1rem",
          marginLeft: "-31rem",
        }}
      >
        Agate Phone Grip
      </h1>
      <div
        className="Price"
        style={{ display: "flex", marginLeft: "33rem", marginTop: "2rem" }}
      >
        <p
          style={{
            color: "blue",
            textDecoration: "line-through",
            marginTop: "1rem",
            fontSize: "22px",
          }}
        >
          14.50$
        </p>
        <h1 style={{ color: "red", fontSize: "49px", fontWeight: "700" }}>
          19.50$
        </h1>
      </div>
      <p style={{ color: "#0A294D", width: "25rem", marginLeft: "-27rem" }}>
        These Pop Rock Crystal grip tops can be swapped with other tops
        depending on your mood ,outfit,nails,phone case,holiday etc.! Just
        gently squeeze the sides to remove and swap out with another color or
        design!
      </p>
      <div
        className="btn "
        style={{
          color: "white",
          width: "13rem",
          height: "4rem",
          fontSize: "27px",
          borderRadius: "20px",
          border: "2px lightblue solid",
          backgroundColor: "#75CCEB",
          marginLeft: "-15rem",
          marginTop: "1rem",
          textAlign: "center",
          marginBottom: "15rem",
        }}
      >
        BUY NOW
      </div>
      <div
        className="rounded-image"
        style={{
          position: "absolute",
          right: "11rem",
          top: "140rem",
          transform: "translateY(-50%)",
          width: "27rem",
          height: "27rem",
          borderRadius: "50% 50% 50%",
          overFlow: "hidden",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={stone}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="..."
        />
      </div>
      <div
        className="wave"
        style={{
          position: "absolute",
          bottom: "-125rem",
          width: "100%",
          height: "auto",
          zIndex: "5",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,128L48,112C96,96,192,64,288,74.7C384,85,480,139,576,170.7C672,203,768,213,864,192C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div
        style={{
          backgroundColor: "#0A294D",
          width: "100%",
          minHeight: "34vh",
        }}
      ></div>
    </center>
  );
}
export default FooterPage;
