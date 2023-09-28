function Success() {
  return (
    <>
      <div
        style={{
          display: "flex",
          fontFamily: "Roboto",
          fontSize: "30px",
          textDecoration: "underline",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        Your Transaction Has been A Success! You Will Receive An Email Shortly!
      </div>
      ;
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="public/happykermit.jpg" alt="happykermit" />
      </div>
    </>
  );
}

export default Success;
