import axios from 'axios';
import React, { useEffect, useState } from 'react'


function FileData() {
    const [Url, setUrl] = useState();
    const geturl = async () => {

        const { data: { url } } = await axios.get('/getdriveurl');
        setUrl(url);
    }

    useEffect(() => {
        geturl();
    })
    return (
        <div>
            <div className="alert alert-primary text-xs" role="alert">
                <b>Note: </b>The file Name of Presentation should be as per Your Team ID such as [TeamID][ProblemStatmentID][MobileOfLeader].pptx
            </div>
            <div className="top-0 w-full h-full flex" style={{ minHeight: '65vh' }}>

                <div className="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg">
                    <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg" >
                        <svg className="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                        <div className="input_field flex flex-col w-max mx-auto text-center">
                            <label>
                                <div className="text bg-indigo-600 text-white cursor-pointer p-1 px-3 hover:bg-indigo-500 text-xs"><a href={Url}>Upload</a></div>
                            </label>

                            <div className="text-indigo-500 text-xs my-2">Upload PPT here</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileData
