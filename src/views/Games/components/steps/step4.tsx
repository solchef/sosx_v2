const Step4 = () => {
  return (
    // <div className="row">
    //   <div className="col-md-6">
    //     <img
    //       src="https://socialx.io/img/completechallenge-banner.png"
    //       data-aos="fade-up"
    //       alt=""
    //       className="aos-init aos-animate"
    //     />
    //   </div>
    //   <div className="col-md-6">
    //     <div className="title-pink custom-pt">
    //       <h3>Complete Challenge</h3>
    //       <p>
    //         The challenge will stay up until someone completed it. No new
    //         challenge will get voted until the previous one is completed.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="d-flex flex-column-reverse">
    <div className="w-100">
      <div className="title-pink custom-pt mb-5">
        <h3>Complete Challenge</h3>
        <p>
        The challenge will stay up until someone completed it. No new challenge will get voted until the previous one is completed.


        </p>
      </div>
    </div>
    <div
      className="guide-image justify-items-center"
      style={{alignSelf: "center"}}
    >
      <img
        src="https://socialx.io/img/completechallenge-banner.png"
        data-aos="fade-up"
        alt=""
        className="aos-init aos-animate"
      />
    </div>
  </div>
  );
};

export default Step4;
