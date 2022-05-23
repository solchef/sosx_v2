const Step1 = () => {
  return (
    <div className="d-flex flex-column-reverse">
    <div className="w-100">
      <div className="title-pink custom-pt mb-5">

      <h3>Step 1</h3>

      <h3>Get a referral link</h3>
        <p>
        Connect a wallet & generate your referral link in the Referral
                section.
        </p>
      </div>
    </div>
    <div
      className="guide-image justify-items-center"
      style={{alignSelf: "center"}}
    >
    <img
          src="images/step1-referrallink.png"
          data-aos="fade-up"
          alt=""
          className="aos-init aos-animate"
        />
    </div>
  </div>


   
  );
};

export default Step1;
