const Step3 = () => {
  return (
    // <div className="row">
    //   <div className="col-md-6">
    //     <div className="title-pink custom-pt">
    //       <h3>Vote Final Challenge</h3>
    //       <p>
    //         8 hours to vote the final challenges of the top 3 by the Level 3 DAO
    //         members.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="col-md-6">
    //     <img
    //       src="https://socialx-x.vercel.app/img/votefinalchallenge-banner.png"
    //       data-aos="fade-up"
    //       alt=""
    //       className="aos-init aos-animate"
    //     />
    //   </div>
    // </div>

    <div className="d-flex flex-column-reverse">
    <div className="w-100">
      <div className="title-pink custom-pt mb-5">
        <h3>Vote Final Challenge</h3>
        <p>
               8 hours to vote the final challenges of the top 3 by the Level 3 DAO members.

        </p>
      </div>
    </div>
    <div
      className="guide-image justify-items-center"
      style={{alignSelf: "center"}}
    >
      <img
        src="https://socialx-x.vercel.app/img/votefinalchallenge-banner.png"
        data-aos="fade-up"
        alt=""
        style={{maxHeight:"300px"}}
        className="aos-init aos-animate"
      />
    </div>
  </div>
  );
};

export default Step3;
