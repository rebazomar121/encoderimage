import React from "react"
import Link from "next/link"
import { AiFillGithub } from "react-icons/ai"
const Footer: React.FC = () => {
    return <div className="fixed inset-x-0 bottom-0 p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h3 className=" text-3xl font-bold text-gray-900 dark:text-white">Check out my github</h3>
        <p className=" text-base text-gray-500 sm:text-lg dark:text-gray-400">You can access my publie repo &amp; use it on your project</p>
        <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a href="https://github.com/rebazomar121" target="_blank" className="w-full sm:w-auto flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <AiFillGithub/> <p>rebazomar121</p> 
            </a>
        </div>
    </div>
}

export default Footer

/*
<div className="text-center text-2xl  fixed inset-x-0 bottom-0 bg-gray-300">
       <Link href="https://github.com/rebazomar121"><p className="cursor-pointer">Github : rebazomar121</p></Link> 
    </div>
*/