import {useEffect ,useState } from "react";
import styled from "styled-components";
import axios from "axios";




export default function Statistics() {
  const [price, setPrice] = useState(Number);
  const [marketCap, setMarketCap] = useState(Number);

  const getSOSXPrice = async () => {
    const getSOSXValue = await axios.get(
      "https://api.pancakeswap.info/api/v2/tokens/0xeE52def4a2683E68ba8aEcDA8219004c4aF376DF",
      {}
    );
    setPrice(parseFloat(getSOSXValue.data.data.price));
    setMarketCap(parseFloat(getSOSXValue.data.data.price_BNB));
  };
  useEffect(() => {
    getSOSXPrice();
  }, []);

  return (
    <div className="row mb-3">
      <div className="col-sm-3 col-6">
        <div className="card overflow-hidden" style={{ rowGap: "20px" }}>
          <h4>10,000,000,000</h4>
          <span className="pt-1 pb-1">Total supply</span>
        </div>
      </div>
      <div className="col-sm-3 col-6">
        <div className="card overflow-hidden" style={{ rowGap: "20px" }}>
          <h4>${marketCap.toFixed(8)}</h4>
          <span className="pt-1 pb-1">Market Cap</span>
        </div>
      </div>
      <div className="col-sm-3 col-6">
        <div className="card overflow-hidden" style={{ rowGap: "20px" }}>
          <h4>${price.toFixed(8)}</h4>
          <span className="pt-1 pb-1">Price</span>
          {/* <div className="daily-avr warning fs-12">
                          <i className="fa fa-chevron-down"></i> 0.5% 7D
                      </div> */}
        </div>
      </div>

      <div className="col-sm-3 col-6">
        <div className="card overflow-hidden" style={{ rowGap: "20px" }}>
          <h4>321139778.950</h4>
          <span className="pt-1 pb-1">Circulating Supply</span>
          {/* <div className="daily-avr success fs-12">
                          <i className="fa fa-chevron-up"></i> 1.5% 7D
                      </div> */}
        </div>
      </div>
    </div>
  );
}
