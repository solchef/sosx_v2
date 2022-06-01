import { useState } from "react";
import { Modal, ModalHeader } from "react-bootstrap";
import { useMediaPredicate } from "react-media-hook";
import { FileUploader } from "react-drag-drop-files";

export default function Adspace() {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
  const biggest1400 = useMediaPredicate("(max-width: 1400px)");
  const [viewModle, setViewModle] = useState<boolean>();
  const [file, setFile] = useState(null);

  const handleCloseGuide = () => {
    setViewModle(false);
  };
  const handleFileChange = (file) => {
    setFile(file);
    console.log(file);
  };
  return (
    <div
      className={`${biggerThan1400 && "container"} pt-3 ${
        biggest1400 && "container-fluid"
      }`}
    >
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={() => setViewModle(true)}
      >
        Create Adspace
      </button>
      <div className="row mt-5">
        <div className="col">
          <div className="card">
            <div className="row">
              <div className="col-lg-4">
                <img
                  src="images/acatoken-logo.png"
                  className="adspace-cmpny-img"
                />
              </div>
              <div className="col-lg-8">
                <h3 className="text-nowrap h3-adspace">
                  AdvancedCryptoAcademy
                </h3>
                <p className="pb-1">Amount Staked:</p>
                <h4 className="pb-2"> 20,000,000.00 SOSX</h4>
                <a href="https://acatoken.io/">
                  <button type="button" className="btn btn-primary btn-lg">
                    Visit Website
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="row">
              <div className="col-lg-4">
                <img
                  src="images/boredpuma-logo.png"
                  className="adspace-cmpny-img"
                />
              </div>
              <div className="col-lg-8">
                <h3 className="h3-adspace">Boredpuma</h3>
                <p className="pb-1">Amount Staked:</p>
                <h4 className="pb-2"> 20,000,000.00 SOSX</h4>
                <a href="https://boredpuma.io/">
                  <button type="button" className="btn btn-primary btn-lg">
                    Visit Website
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={viewModle} centered>
        <ModalHeader
          className="text-dark"
          style={{ background: "#111117", borderRadius: "10px 10px 0px 0px" }}
        >
          Create Adspace
          <a
            href="#"
            onClick={handleCloseGuide}
            className="pull-right text-white"
          >
            <i className="fa fa-close"></i>
          </a>
        </ModalHeader>

        <div
          className="modal-body"
          style={{ background: "#111117", borderRadius: "0px 0px 10px 10px" }}
        >
          <div className="d-flex justify-content-between">
            <div className="flex justify-content-between">
              <FileUploader
                handleChange={handleFileChange}
                name="file"
                types={fileTypes}
              />

              <input className="form-control fs-28 m-1" placeholder="name" />
              <input className="form-control fs-28 m-1" placeholder="Amount" />
              <input className="form-control fs-28 m-1" placeholder="URL" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
