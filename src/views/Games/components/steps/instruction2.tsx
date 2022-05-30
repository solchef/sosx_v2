import Link from "next/link";

const Instruction2 = () => {


    return (
        <div className="d-flex flex-column-reverse">
                  <div className="w-100">
                    <div className="title-pink custom-pt mb-5">
                      <h3>DAOX ARE IN CONTROL </h3>
                      <p>
                        DAOX members have the privilege to create, and vote each OX Game challenges. To become a DAOX member, you must <Link href="/daostaking">stake SOSX tokens.</Link> More you stake, higher your DAOX Level, more control you have on the games.
                      </p>
                    </div>
                  </div>
                  <div
                    className="guide-image justify-items-center"
                    style={{alignSelf: "center"}}
                  >
                    <img
                      src="/images/popup2.jpg"
                      data-aos="fade-up"
                      alt=""
                      style={{maxHeight:"300px"}}
                      className="aos-init aos-animate"
                    />
                  </div>
                </div>
    );
  };
  
  export default Instruction2;
  