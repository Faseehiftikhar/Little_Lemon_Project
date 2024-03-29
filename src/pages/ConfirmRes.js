const ConfirmRes = ({ conf }) => {
  const render = conf;
  return (
    <>
      <section className="container my-3">
        <h2>Reservation Confirmed</h2>
        <div className="container row pd my-3" style={{ width: "80%", margin: "0 auto", background: "rgb(0, 255, 0)", borderRadius: "20px" }}>
          <h6>{`${render.line1}`}</h6>
          <h6>{`${render.line2}`}</h6>
          <h6>{`${render.line3}`}</h6>
        </div>
      </section>
    </>
  );
};

ConfirmRes.propTypes = {};

export default ConfirmRes;
