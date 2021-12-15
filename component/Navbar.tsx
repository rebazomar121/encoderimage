import React from "react"

const Navbar:React.FC = () =>{
    return <div className="h-9 re-bg-grey">
        <ul className="flex p-1 text-2xl w-full">
            <li className="m-7" >Home</li>
            <li className="m-7">About App</li>
            <li className="m-7">Feedback</li>
        </ul>
    </div>
}
export default Navbar