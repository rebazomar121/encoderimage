import React,{useContext} from 'react'
import Image from 'next/image'
import Img_url from "../public/file.png"
import { UserContext } from '../context/context'

const Input: React.FC = () => {
    // UserContext
    const AppState:any= useContext(UserContext)
    const EncoderFileBase64 = (file) => {
        // make reader to reader exernal
        console.log("hare")
        const reader = new FileReader();
        if(file){
            reader.readAsDataURL(file);
            reader.onload = () =>{
                const Base64 = reader.result
                console.log(Base64)
            }
            // if we have error 
            reader.onerror = (error) =>{
                console.log("error : "+error)
            }
        }
    }
    const Handlegetdata =(mydata)=>{
        console.log(mydata)
        AppState.setsendfile(mydata)
        EncoderFileBase64(mydata)
    }
    return <div className='md:grid grid-cols-2'>
         {/* this is uplode */} 
        <div className=" text-center p-7 md:p-32 ">
            <p className='text-center m-2'>You can uplode file or imgae</p>
            <p className='text-red-500'>Note</p>
            <p>your file and image are storing on your device</p>
            <p>this is not encrypt it's just decode , so becarfule do not share your decode string with other</p>
        </div>  
        {/* this is link you can uplode in hare */} 
        <div className="py-20 bg-white px-2 -order-1">
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