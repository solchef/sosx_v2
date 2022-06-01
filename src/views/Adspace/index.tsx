import { useState, useEffect } from "react";
import { Modal, ModalHeader } from "react-bootstrap";
import { useMediaPredicate } from "react-media-hook";
import { FileUploader } from "react-drag-drop-files";
import { create } from "ipfs-http-client";
import { GET_Adspace } from "utils/graphqlQ";
import { useQuery } from "@apollo/client";

export default function Adspace() {
  const fileTypes = ["JPG", "PNG", "GIF", "jpeg"];
  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
  const biggest1400 = useMediaPredicate("(max-width: 1400px)");
  const [viewModle, setViewModle] = useState<boolean>();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [sharedUrl, setSharedUrl] = useState("");
  const [file, setFile] = useState(null);
  const GraphqlAdspaceData = useQuery(GET_Adspace);
  const [adspaceData, setAdspaceData] = useState([]);

  const server = create({
    url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
  });

  useEffect(() => {
    if (GraphqlAdspaceData.data !== undefined) {
      console.log(GraphqlAdspaceData.data.getAdspace);
      setAdspaceData(GraphqlAdspaceData.data.getAdspace);
    }
  }, [GraphqlAdspaceData.data]);

  const handleCloseGuide = () => {
    setViewModle(false);
  };
  const handleFileChange = (file) => {
    const result = new window.FileReader();
    result.readAsArrayBuffer(file[0]);
    result.onloadend = async () => {
      setFile(Buffer.from(result.result));
    };
  };

  const handleSubmit = async () => {
    const result = await server.add(file);
    const adspace = JSON.stringify({
      name: name,
      amount: amount,
      sharedUrl: sharedUrl,
      wallet: "",
      image: "http://ipfs.io/ipfs/" + result.cid,
    });
    await server.files.write(`/Adspace/` + name + ".json", adspace, {
      create: true,
    });
    handleCloseGuide();
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
        {adspaceData.map((data, index) => {
          return (
            <div className="col" key={index}>
              <div className="card">
                <div className="row">
                  <div className="col-lg-4">
                    <img src={data.image} className="adspace-cmpny-img" />
                  </div>
                  <div className="col-lg-8">
                    <h3 className="h3-adspace">{data.name}</h3>
                    <p className="pb-1">Amount Staked:</p>
                    <h4 className="pb-2"> {data.amount} SOSX</h4>
                    <a href={data.sharedUrl}>
                      <button type="button" className="btn btn-primary btn-lg">
                        Visit Website
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
          <div className="d-flex flex-column">
            <div className="bg-input mb-3 py-2 px-3 rounded ">
              <div className="guide-image justify-items-center">
                <FileUploader
                  // handleChange={handleFileChange}
                  className="drop_area drop_zone"
                  multiple={true}
                  onSelect={(file) => handleFileChange(file)}
                  name="file"
                  id="getFile"
                  types={fileTypes}
                />
              </div>
            </div>
            <div className="title-pink custom-pt mb-5">
              <div className="bg-input mb-3 py-2 px-3 rounded ">
                <div className="d-flex justify-content-between align-items-center">
                  {" "}
                  <input
                    className="form-control fs-28 m-1"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                  />
                </div>
              </div>
              <div className="bg-input mb-3 py-2 px-3 rounded ">
                <div className="d-flex justify-content-between align-items-center">
                  {" "}
                  <input
                    className="form-control fs-28 m-1"
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                  />
                </div>
              </div>
              <div className="bg-input mb-3 py-2 px-3 rounded ">
                <div className="d-flex justify-content-between align-items-center">
                  <input
                    className="form-control fs-28 m-1"
                    onChange={(e) => setSharedUrl(e.target.value)}
                    placeholder="URL"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer guide-popup">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={handleSubmit}
              >
                Ok
              </button>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={handleCloseGuide}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
