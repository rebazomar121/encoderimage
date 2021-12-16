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
        <button onClick={HandletoClickMobileNavbar} className="p-6 text-2xl cursor-pointer hover:bg-gray-500 active:bg-gray-500 outline-none"> <GiHamburgerMenu /> </button>
        <div className={navbar_mobile === false ? "hidden" : "duration-1000 transform hover:scale-125 transition ease-linear"}>
            <ul className="block p-1 text-xl w-full duration-1000 transform hover:scale-125 transition ease-linear">
                <li className="m-7" >Home</li>
                <li className="m-7">About App</li>
                <li className="m-7">Feedback</li>
            </ul>
        </div>

    </div>
}
export default Navbar