import React from "react";
import '../App.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronDown } from "react-icons/bs";

function NavBar() {
    return (
        <div className="TopNav">
            <div className="NavLogo">
                <img src={'../../wtlogo.png'} className="WTLogo" />
            </div>
            <div className="TopNavRight">
                <div className="Menu">
                    <GiHamburgerMenu />
                </div>
                <div className="User">
                    <div className="Circle">
                        <h6>CB</h6>
                    </div>
                    <h6>chandler.blaschka@watertronics.com</h6>
                    <BsChevronDown />
                </div>
            </div>
        </div>
    );
}

export default NavBar;