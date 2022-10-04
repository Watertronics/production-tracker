import React from "react";
import 'production-tracker/src/App.css';
import SideNav from "./SideNav"
import genInfo from "../images/heritage-general-info.jpg"
import invAd from "../images/heritage-invoice-address.jpg"
import payTerm from "../images/heritage-payment-terms.jpg"
import shipTo from "../images/heritage-ship-to-address.jpg"
import priceBreak from "../images/heritage-price-breakdown.jpg"
import rebate from "../images/heritage-rebate-comm.jpg"
import comm from "../images/heritage-comm-2-3.jpg"
import split from "../images/heritage-sales-split.jpg"

function Heritage() {
    return (
        <div className="JobContainer">
            <SideNav />
            <div className="OrderImages">
                <img src={genInfo} className="OrderImage" />
                <img src={invAd} className="OrderImage" />
                <img src={payTerm} className="OrderImage" />
                <img src={shipTo} className="OrderImage" />
                <img src={priceBreak} className="OrderImage" />
                <img src={rebate} className="OrderImage" />
                <img src={comm} className="OrderImage" />
                <img src={split} className="OrderImage" />
            </div>
        </div>
    );
}

export default Heritage;