import React from "react";
import '../App.css';
import SideNav from "./SideNav"

function Lakewood() {
    return (
        <div className="JobContainer">
            <SideNav />
            <div className="OrderImages">
                <img src={'../../lakewood-general-payment-terms.jpg'} className="OrderImage" />
                <img src={'../../lakewood-ship-price.jpg'} className="OrderImage" />
                <img src={'../../lakewood-rebate-comm2.jpg'} className="OrderImage" />
                <img src={'../../lakewood-comm3.jpg'} className="OrderImage" />
                <img src={'../../lakewood-sales-split.jpg'} className="OrderImage" />
            </div>
        </div>
    );
}

export default Lakewood;