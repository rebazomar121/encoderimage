import React, { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
const Navbar: React.FC = () => {
    // to active mobile navbar 
    const [navbar_mobile, setnavbar_mobile] = useState(false)
    // handle to click navbar
    const HandletoClickMobileNavbar = () => {
        navbar_mobile === true ? setnavbar_mobile(false) : setnavbar_mobile(true);
    }

    return <div className="bg-gray-300">
        <button onClick={HandletoClickMobileNavbar} className="md:hidden p-6 text-2xl cursor-pointer hover:bg-gray-400 active:bg-gray-400 outline-none"> <GiHamburgerMenu /> </button>
            <ul className={navbar_mobile === false ? "block md:flex p-1 text-xl w-full hidden" : "block md:flex p-1 text-xl w-full"}>
                <li className="m-7" >Home</li>
                <li className="m-7">About App</li>
                <li className="m-7">Feedback</li>
            </ul>
    </div>
}
export default Navbar