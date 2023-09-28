function Cancel() {
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
        Sorry, Your Transaction Has been Cancelled!
      </div>
      ;
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="src/components/images/sadkermit.jpg" alt="sadkermit" />
      </div>
    </>
  );
}

export default Cancel;
