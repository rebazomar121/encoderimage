import App from 'next/app'
import React, { useContext } from 'react'
import { UserContext } from '../context/context'
const ShowData: React.FC = () => {
    // app state    
    const AppState: any = useContext(UserContext)
    // change byte to kb
    const formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    // Click to copy 
    const HandleToCopy = async() =>{
            await navigator.clipboard.writeText(AppState.StringFile);
            alert('Text copied');
            await window.localStorage.setItem("lastitem",JSON.stringify(
                {
                    name:name,
                    type:AppState.sendfile.type,
                    size:AppState.sendfile.size,
                    lastupdate:AppState.sendfile.lastModified,
                    copied:AppState.StringFile
                }
        ))
    }
    // return hare
    
    return <div className='text-center'>
        {AppState.sendfile === null ? <p>Value is not hare</p> : <table className="table p-4 bg-white shadow rounded-lg w-full mb-16 mt-16 md:w-10/12 justify-center text-center md:m-16 lg:m-32">
            <tbody>
                <tr>
                    <td></td>
                    <td>   <button onClick={HandleToCopy} type="button" className="text-2xl py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Save & Copy
                    </button> </td>
                </tr>
                <tr>
                    <td className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        Name File
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        {AppState.sendfile.name < 10 ?  AppState.sendfile.name :  AppState.sendfile.name.substring(0,10)+"..." || "No Value"}
                    </td>
                </tr>
                <tr className="text-gray-700">
                    <td className="border-b-2 p-4 dark:border-dark-5">
                        Size
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5">
                        {formatBytes(AppState.sendfile.size)  || "No Value"}
                    </td>
                </tr>

                <tr className="text-gray-700">
                    <td className="border-b-2 p-4 dark:border-dark-5">
                        Last Update
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5">
                        {new Date(AppState.sendfile.lastModified).toLocaleDateString("en-US") || "No Value"}
                    </td>
                </tr>

                <tr className="text-gray-700">
                    <td className="border-b-2 p-4 dark:border-dark-5">
                        Type
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5">
                        {AppState.sendfile.type || "No Value"} 
                    </td>
                </tr>
            </tbody>
        </table>}
        {/* end of showing data with table */}
    </div>

}
export default ShowData
