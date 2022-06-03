import { useState, useEffect } from "react";
import { Modal, ModalHeader } from "react-bootstrap";
import { useMediaPredicate } from "react-media-hook";
import { FileUploader } from "react-drag-drop-files";
import { create } from "ipfs-http-client";
import { GET_Adspace } from "utils/graphqlQ";
import { useQuery } from "@apollo/client";
import { useWeb3React } from "@web3-react/core";
import useToast from "hooks/useToast";
import { cleanNumber } from "utils/amount";

export default function Adspace() {
  const fileTypes = ["JPG", "PNG", "GIF", "jpeg"];
  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
  const biggest1400 = useMediaPredicate("(max-width: 1400px)");
  const [viewModle, setViewModle] = useState<boolean>();
  const [viewInfoModle, setViewInfoModle] = useState<boolean>();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [sharedUrl, setSharedUrl] = useState("");
  const [file, setFile] = useState(null);
  const [selectedData, setSelectedData] = useState({
    name: "",
    amount: "",
    sharedUrl: "",
    wallet: "",
    tokenType: "",
    image: "",
  });
  const GraphqlAdspaceData = useQuery(GET_Adspace);
  const [adspaceData, setAdspaceData] = useState([]);
  const { account } = useWeb3React();
  const { toastSuccess, toastError } = useToast();

  const server = create({
    url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
  });

  useEffect(() => {
    if (GraphqlAdspaceData.data !== undefined) {
      setAdspaceData(GraphqlAdspaceData.data.getAdspace);
      console.log(GraphqlAdspaceData.data.getAdspace);
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
    try {
      if (account !== undefined) {
        const result = await server.add(file);
        const adspace = JSON.stringify({
          name: name,
          amount: amount,
          sharedUrl: sharedUrl,
          wallet: account,
          tokenType: "SOSX",
          image: "http://ipfs.io/ipfs/" + result.cid,
        });
        await server.files.write(`/Adspace/` + name + ".json", adspace, {
          create: true,
        });
        toastSuccess("Your Adspace had been created successfully");
      } else {
        toastError("Please connect to your wallet");
      }
    } catch (error) {
      toastError("Network Error");
      handleCloseGuide();
    }

    handleCloseGuide();
  };

  return (
    <div
      className="container-fluid"
    >
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={() => setViewModle(true)}
      >
        Create Adspace
      </button>

      <div className="row ">
            {adspaceData.map((data, index) => {
          return (
      <div key={index}  className="col-sm-4 mb-2 mt-2">
        <div style={
                  data.wallet === account ? { border: "solid 2px #ff00cc" } : {}
                } className="card">
          <div className="row p-3">
            <div className="col-md-4 p-4">
            <img src={data.image} className="adspace-cmpny-img" />

            </div>
            <div className="col-md-8 pt-3">
              <h4 className=" mb-0 pt-3 pb-2">{data.name}</h4>
              <span className="fs-12 pr-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                facilisis. </span>
            </div>
          </div>
          <div className="card align-items-center d-flex justify-content-between">
            <span className="fs-16 pr-1 lh50">Amount Staked:</span> 
            <span className="text-white fs-16 pr-1 lh45 font-weight-bold"> {cleanNumber(data.amount + "")} {data.tokenType} </span>

            {data.wallet === account ? (
     
            <a onClick={() => {
              setViewInfoModle(true);
              setSelectedData(data);
            }} href="">
            <button type="button" className="btn btn-primary btn-lg float-right">Info</button></a>

                     
                    ) : (
                      ""
                    )}

<a href={data.sharedUrl}>
            <button type="button" className="btn btn-primary btn-lg float-right"> Visit Website</button></a>







          </div>
        </div>
      </div>
          );
        })}
        </div>
      <Modal show={viewInfoModle} centered>
        <ModalHeader
          className="text-dark"
          style={{ background: "#111117", borderRadius: "10px 10px 0px 0px" }}
        >
          {selectedData.name}
          <a
            href="#"
            onClick={() => setViewInfoModle(false)}
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
            <div className="title-pink custom-pt mb-5 d-flex flex-column align-items-center">
              <div className=" mb-3 py-2 px-3  ">
                <img src={selectedData.image}></img>
              </div>
              <div className="mb-3 py-2 px-3  ">
                Your stacked ammount is:
                {cleanNumber(selectedData.amount + "") +
                  " " +
                  selectedData.tokenType}
              </div>
              <div className="mb-3 py-2 px-3  ">
                Your remaining stacked ammount is:
                {cleanNumber(selectedData.amount + "") +
                  " " +
                  selectedData.tokenType}
              </div>
              <div className="mb-3 py-2 px-3 w-100 ">
                <table className="jsx-a752e0b28b6254b2 ranking-header fs-12 p-4 mt-0 table">
                  <tr className="jsx-a752e0b28b6254b2 jsx-e5e2ca7965fa437a">
                    <th className="jsx-a752e0b28b6254b2 fs-16 font-weight-normal">
                      Ammount
                    </th>
                    <th className="jsx-a752e0b28b6254b2 fs-16 font-weight-normal text-center">
                      Wallet
                    </th>
                  </tr>
                  <tbody className="jsx-a752e0b28b6254b2">
                    <tr className="jsx-a752e0b28b6254b2  text-nowrap mt-4">
                      <td className="jsx-a752e0b28b6254b2 fs-16 font-weight-normal">
                        1000
                      </td>
                      <td className="jsx-a752e0b28b6254b2 fs-16 font-weight-normal">
                        {"0xC410e12052FFf5D4CD6E421AFff24e7f449052A2".substring(
                          0,
                          20
                        )}
                        ...
                      </td>
                    </tr>
                    <tr className="jsx-a752e0b28b6254b2  text-nowrap mt-4">
                      <td className="jsx-a752e0b28b6254b2 fs-16 font-weight-normal">
                        1000
                      </td>
                      <td className="jsx-a752e0b28b6254b2 fs-16 font-weight-normal">
                        {"0xC410e12052FFf5D4CD6E421AFff24e7f449052A2".substring(
                          0,
                          20
                        )}
                        ...
                      </td>
                    </tr>
                    <tr className="jsx-a752e0b28b6254b2  text-nowrap mt-4">
                      <td className="jsx-a752e0b28b6254b2 fs-16 font-weight-normal">
                        1000
                      </td>
                      <td className="jsx-a752e0b28b6254b2 fs-16 font-weight-normal">
                        {"0xC410e12052FFf5D4CD6E421AFff24e7f449052A2".substring(
                          0,
                          20
                        )}
                        ...
                      </td>
                    </tr>
                    <tr className="jsx-a752e0b28b6254b2  text-nowrap mt-4">
                      <td className="jsx-a752e0b28b6254b2 fs-16 font-weight-normal">
                        1000
                      </td>
                      <td className="jsx-a752e0b28b6254b2 fs-16 font-weight-normal">
                        {"0xC410e12052FFf5D4CD6E421AFff24e7f449052A2".substring(
                          0,
                          20
                        )}
                        ...
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="modal-footer guide-popup">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => setViewInfoModle(false)}
              >
                Ok
              </button>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => setViewInfoModle(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
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
                  <input
                    className="form-control fs-28 m-1"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                  />
                </div>
              </div>
              <div className="bg-input mb-3 py-2 px-3 rounded ">
                <div className="d-flex justify-content-between align-items-center">
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
