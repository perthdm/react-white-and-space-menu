import logo from "src/assets/image/logo.svg";

const UINotFound = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3
          style={{ fontSize: "30px", marginBottom: "6px", marginTop: "16px" }}
        >
          404 NOT FOUND
        </h3>
        <p style={{ marginTop: "12px" }}>
          กรุณาติดต่อพนักงานร้านเพื่อขอ QR Code
        </p>
      </header>
    </div>
  );
};

export default UINotFound;
