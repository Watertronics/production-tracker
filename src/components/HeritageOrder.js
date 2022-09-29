import React from "react";
import '../App.css';
import SideNav from "./SideNav"

function Heritage() {
    return (
        <div className="JobContainer">
            <SideNav />
            <div className="OrderImages">
                <img src={'../../heritage-general-info.jpg'} className="OrderImage" />
                <img src={'../../heritage-invoice-address.jpg'} className="OrderImage" />
                <img src={'../../heritage-payment-terms.jpg'} className="OrderImage" />
                <img src={'../../heritage-ship-to-address.jpg'} className="OrderImage" />
                <img src={'../../heritage-price-breakdown.jpg'} className="OrderImage" />
                <img src={'../../heritage-rebate-comm.jpg'} className="OrderImage" />
                <img src={'../../heritage-comm-2-3.jpg'} className="OrderImage" />
                <img src={'../../heritage-sales-split.jpg'} className="OrderImage" />
            </div>
        </div>
    );
}

export default Heritage;