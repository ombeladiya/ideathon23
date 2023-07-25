import React, { useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Regis = () => {
 
  const [email, setemail] = useState('');
  const [mobile, setmobile] = useState('');
  const [Participants, setParticipants] = useState([
    { idn: '', name: '' },
    { idn:'', name: '' },
    { idn: '', name: '' },
    { idn: '', name: '' },
    { idn: '', name: '' },
    { idn: '', name: '' },
    { idn: '', name: '' },
    { idn: '', name: '' },
  ]);

  const Emailchange =(email)=>{
    setemail(email);
  }
  const Mobilechange = (m) => {
    setmobile(m);
  }

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    setParticipants((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = { ...updatedData[index], [name]: value };
      return updatedData;
    });
  
  };

  const {problem}= useParams();

  const registerTeam=async (e)=>{
    e.preventDefault();
    
    const data={
      problem,
      mobile,
      email,
      Participants:JSON.stringify(Participants)
    }
    const config = { headers: { "Content-Type": "application/json" } };
 const {data:{message}}  = await axios.post("/api/v1/register",data,config);
     
    toast.info(message, {
        position: 'top-center', 
      autoClose: 10000, 
        hideProgressBar: true, 
        closeOnClick: true, 
        pauseOnHover: true,
      draggable: true,
      });
   
  }

  return (
    <>
      <div style={{ minHeight: "65vh" }}>
        <ToastContainer toastStyle={{ backgroundColor: "black" }} style={{ marginTop: '40vh' }} />
        <div className="alert alert-primary text-xs" role="alert">
          <b>Note: </b> Number of participants per team should be minimum 6 and maximum 8 and 1 female participant per team is preferable.
        </div>
        <div className="flex justify-center">
        <form className=" px-0 " onSubmit={(e)=>registerTeam(e)}>
          <div className="space-y-12">
            <div className=" pb-4">
              
                <h5 className="mt-3  font-medium text-lg text-red-900">
                  Participant 1(Leader) <span className="text-red-800">*</span>
                </h5>
              
                <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
                <div className="sm:col-span-3 mt-2">
                <div
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </div>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-900 sm:min-w-md">
                    <input
                      type="text"
                      name="name"
                      onChange={(e)=>handleInputChange(0,e)}
                      className="block w-full  rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Name"
                    required/>
                  </div>
                </div>
                
                <div className="sm:col-span-3 mt-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ID Number
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="idn"
                        pattern="[0-9]{2}[a-zA-Z]{2}[0-9]{3}"
                        onChange={(e)=>handleInputChange(0,e)}
                        className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="00XX000"
                     required />
                    </div>
                  </div>

                  <div className="sm:col-span-3 mt-2">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Mobile
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="tel"
                            name="mobile"
                            pattern="[0-9]{10}"
                            value={mobile}
                            onChange={(e) => Mobilechange(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="XXXXXXXXXX"
                        required/>
                      </div>
                    </div>
                  </div>
                    <div className="sm:col-span-3 mt-2">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => Emailchange(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="abc@xyz.com"
                            required />
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className=" pb-4">
             
                <h5 className="mt-3 font-medium text-lg text-red-900">
                  Participant 2 <span className="text-red-800">*</span>
                </h5>
              
              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
              <div className="sm:col-span-3 mt-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      onChange={(e)=>handleInputChange(1,e)}
                      className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Name"
                   required />
                  </div>
                </div>
                <div className="sm:col-span-3 mt-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ID Number
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="idn"
                        pattern="[0-9]{2}[a-zA-Z]{2}[0-9]{3}"
                        onChange={(e)=>handleInputChange(1,e)}
                        className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="00XX000"
                    required/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <div className=" pb-4">
              
                <h5 className="mt-3 font-medium text-lg text-red-900">
                  Participant 3 <span className="text-red-800">*</span>
                </h5>
            
              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
              <div className="sm:col-span-3 mt-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      onChange={(e)=>handleInputChange(2,e)}
                      className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Name"
                   required/>
                  </div>
                </div>
                <div className="sm:col-span-3 mt-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ID Number
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="idn"
                        pattern="[0-9]{2}[a-zA-Z]{2}[0-9]{3}"
                        onChange={(e)=>handleInputChange(2,e)}
                        className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="00XX000"
                     required />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <div className=" pb-4">
              
                <h5 className="mt-3 font-medium text-lg text-red-900">
                  Participant 4 <span className="text-red-800">*</span>
                </h5>
              
              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
              <div className="sm:col-span-3 mt-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      onChange={(e)=>handleInputChange(3,e)}
                      className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Name"
                 required />
                  </div>
                </div>
                <div className="sm:col-span-3 mt-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ID Number
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="idn"
                        pattern="[0-9]{2}[a-zA-Z]{2}[0-9]{3}"
                         onChange={(e)=>handleInputChange(3,e)}
                        className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="00XX000"
                      required/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <div className=" pb-4">
              
                <h5 className="mt-3 font-medium text-lg text-red-900">
                  Participant 5 <span className="text-red-800">*</span>
                </h5>
              
              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
              <div className="sm:col-span-3 mt-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      onChange={(e)=>handleInputChange(4,e)}
                      className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Name"
                  required/>
                  </div>
                </div>
                <div className="sm:col-span-3 mt-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ID Number
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="idn"
                        pattern="[0-9]{2}[a-zA-Z]{2}[0-9]{3}"
                        onChange={(e)=>handleInputChange(4,e)}
                        className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="00XX000"
                      required/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <div className=" pb-4">
                <h5 className="mt-3 font-medium text-lg text-red-900">
                  Participant 6 <span className="text-red-800">*</span>
                </h5>
              
              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
              <div className="sm:col-span-3 mt-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      onChange={(e)=>handleInputChange(5,e)}
                      className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Name"
                  required/>
                  </div>
                </div>
                <div className="sm:col-span-3 mt-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ID Number
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="idn"
                        pattern="[0-9]{2}[a-zA-Z]{2}[0-9]{3}"
                        onChange={(e)=>handleInputChange(5,e)}
                        className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="00XX000"
                      required/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <div className=" pb-4">
              
                <h5 className="mt-3 font-medium text-lg text-red-900">
                  Participant 7 (optional)
                </h5>
              
              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
              <div className="sm:col-span-3 mt-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      onChange={(e)=>handleInputChange(6,e)}
                      className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3 mt-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ID Number
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="idn"
                        pattern="[0-9]{2}[a-zA-Z]{2}[0-9]{3}"
                        onChange={(e)=>handleInputChange(6,e)}
                        className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="00XX000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <div className=" pb-4">
              
                <h5 className="mt-3 font-medium text-lg text-red-900">
                  Participant 8 (optional)
                </h5>
              
              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
              <div className="sm:col-span-3 mt-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      onChange={(e)=>handleInputChange(7,e)}
                      className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3 mt-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ID Number
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="idn"
                        pattern="[0-9]{2}[a-zA-Z]{2}[0-9]{3}"
                        onChange={(e)=>handleInputChange(7,e)}
                        className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="00XX000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Participate"
            className="bg-slate-900 text-light w-full max-w-md mb-4 h-8  pb-0.5 text-xs"
          />
        </form>
        </div>
      </div>
    </>
  );
};

export default Regis;
