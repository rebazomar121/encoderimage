import React from 'react'
import Image from 'next/image'
import Img_url from "../public/file.png"


const Input: React.FC = () => {
    return <div>
         {/* this is uplode */} 
        <div className=" text-center">
            <p className='text-center m-2'>Uplode Your file hare</p>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"> Uplode</button>
        </div>
        {/* this is link you can uplode in hare */} 
        <div className="py-20 bg-white px-2">
            <div className="">
                <div className="md:flex">
                    <div className="p-3">
                        <div className="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                            <div className="absolute">
                                <div className="flex flex-col items-center"> <Image src={Img_url} /> <span className="block text-gray-400 font-normal">Attach you image here</span> </div>
                            </div> <input type="file" className="h-full w-full opacity-0" name="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
}
export default Input