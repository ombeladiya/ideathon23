import React from 'react'

export default function Teammates(props) {
  return (
    <div>
      <form className="w-full px-3">
        <div className="space-y-4">
          <div className=" pb-2">
           <center><h5 className="mt-3 font-medium text-lg text-gray-900">Participant {props.i}{props.req=='true' &&<span className='text-red-800'>*</span>}</h5></center> 
            <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
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
                    id="name"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      name="id"
                      id="id"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="00XX000"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
