import React, { useContext } from 'react'
import Image from 'next/image'
import Img_url from "../public/file.png"
import { UserContext } from '../context/context'
import Minion_url_img from "../public/minion2.png"


const Input: React.FC = () => {
    // UserContext
    const AppState: any = useContext(UserContext)
    // encoder genarator
    const EncoderFileBase64 = (file) => {
        // make reader to reader exernal
        console.log("hare")
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onload = () => {
                const Base64 = reader.result
                AppState.setStringFile(Base64)
                console.log(Base64)
            }
            // if we have error 
            reader.onerror = (error) => {
                console.log("error : " + error)
            }
        }
    }
    // get data
    const Handlegetdata = (mydata) => {
        console.log(mydata)
        AppState.setsendfile(mydata)
        EncoderFileBase64(mydata)
    }
    return <div className='md:grid grid-cols-2'>
        {/* this is uplode */}

        <div className="bg-white dark:bg-gray-800 w-full mx-auto p-8 md:mt-16">
            <p className="text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg lg:text-xl">
                <p className='text-center m-2'>You can uplode file or imgae</p>
                <p className='text-red-500'>Note</p>
                <p>your file and image are storing on your device</p>
                <p>this is not encrypt it's just decode , so becarfule do not share your decode string with other</p>
            </p>
        </div>

        {/* this is link you can uplode in hare */}
        <div className="md:p-20 bg-white px-2 -order-1">
            <div className="">
                <div className="md:flex">
                    <div className="p-3">
                        <div className="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                            <div className="absolute">
                                <div className="flex flex-col items-center"> <Image src={Img_url} /> <span className="block text-gray-400 font-normal">Attach your image here</span> </div>
                            </div>
                            {/* Input is hare */}
                            <input type="file" className="h-full w-full opacity-0" name="" onChange={(e) => Handlegetdata(e.target.files[0])} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}
export default Input



/* 

<div className="bg-white dark:bg-gray-800 w-full mx-auto p-8">
    <img src="/icons/rocket.svg" className="h-10 w-10 mb-8 m-auto"/>
    <p className="text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-3xl">
        <span className="font-bold text-indigo-500">
            “
        </span>
        To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
        <span className="font-bold text-indigo-500">
            ”
        </span>
    </p>
    <div className="flex items-center justify-center mt-8">
        <a href="#" className="block relative">
            <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
        </a>
        <div className="flex ml-2 items-center justify-center">
            <span className="font-semibold text-indigo-500 mr-2 text-lg">
                Jean Miguel
            </span>
            <span className="text-gray-400 text-xl font-light">
                /
            </span>
            <span className="text-gray-400 text-md ml-2">
                User of Tail-Kit
            </span>
        </div>
    </div>
</div>

*/