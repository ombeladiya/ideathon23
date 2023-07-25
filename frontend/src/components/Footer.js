import React, { useState } from 'react'
import ssip from './ssip.png'
import axios from 'axios'
const Footer = () => {
  const [password, setpassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const downloadfile = async () => {

    const config = { headers: { "Content-Type": "application/json" } };
    const { data: {isAdmin }} = await axios.post("/api/v1/verify", { password }, config);
console.log(isAdmin)
    if (isAdmin) {
      const tempLink = document.createElement('a');
      tempLink.href = '/api/v1/getdata';
      tempLink.click();
    }
  }

  return (
    <>
      <center className='mb-0'>
        <div className='mt-6 bg-slate-900 text-light text-xs  pt-5 mb-0'>
          <div> <img src={ssip} alt="SSIP" className='h-10 w-20' /></div>
          <div className='mt-3'>&copy; All Rights Reserved SSIP 2.0</div>
          <div className="mt-3 text-xs text-gray-400">This Website is made by SSIP Developer team</div>

          <button
            className="text-slate-900 hover:text-slate-800 px-4 mb-0"
            onClick={openModal}
          >X
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 relative">
              <span
                className="absolute top-1 right-3 cursor-pointer text-slate-900"
                onClick={closeModal}
              >X
              </span>
              <input type="password" name="psw" className='h-7' placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} required />
              <br />
              <button className='mt-3 bg-slate-900 px-4 text-white text-sm py-1' onClick={downloadfile}>Download</button>
            </div>
          </div>
        )}
      </center>
    </>
  )
}

export default Footer
