const Step1 = () => {


  return (
      <div className="d-flex flex-column-reverse">
                <div className="w-100">
                  <div className="title-pink custom-pt mb-5">
                    <h3>Submit Challenges</h3>
                    <p>
                      8 hours to submit the challenges created by the Level 2
                      &amp; 3 DAO members.
                    </p>
                  </div>
                </div>
                <div
                  className="guide-image justify-items-center"
                  style={{alignSelf: "center"}}
                >
                  <img
                    src="https://socialx.io/img/submitchallenge-banner.png"
                    data-aos="fade-up"
                    alt=""
                    style={{maxHeight:"300px"}}
                    className="aos-init aos-animate"
                  />
                </div>
              </div>
  );
};

export default Step1;
