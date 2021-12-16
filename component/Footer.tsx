import React from "react"
import Link from "next/link"
import {AiFillGithub}from "react-icons/ai"
const Footer:React.FC = () =>{
    return <div className="text-center  fixed inset-x-0 bottom-0 bg-gray-300">
       <Link href="https://github.com/rebazomar121"><p className="cursor-pointer">Github : rebazomar121</p></Link> 
    </div>
}

export default Footer