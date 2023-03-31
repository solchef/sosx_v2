const Step2 = () => {
  return (
  
    <div className="d-flex flex-column-reverse">
                <div className="w-100">
                  <div className="title-pink custom-pt mb-5">
                    <h3>Vote Top Challenges</h3>
                    <p>
                    8 hours to vote the top 3 challenges for the challengers by all
                                DAO members.
                    </p>
                  </div>
                </div>
                <div
                  className="guide-image justify-items-center"
                  style={{alignSelf: "center"}}
                >
                  <img
                    src="https://socialx-x.vercel.app/img/votetopchallenge-banner.png"
                    data-aos="fade-up"
                    alt=""
                    style={{maxHeight:"300px"}}
                    className="aos-init aos-animate"
                  />
                </div>
              </div>
  );
};

export default Step2;
