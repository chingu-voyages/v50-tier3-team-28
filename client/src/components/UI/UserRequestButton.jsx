// import { Button } from './Button';
// import {RequestFormModal} from './RequestFormModal';
// import { useState } from "react";

      
// export const UserRequestButton = () => {
//     const onClickHandler = () => {
//         console.log("Hi")
//     };
//     return (
//         <>
//             <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
//                 Toggle modal
//             </button>

//             <Button
//                 className='font-normal text-white bg-green-500 hover:bg-green-300 rounded-lg p-2.5 -mt-4'
//                 type='button'
//                 text='Submit new request'
//                 onClick={()=>onClickHandler()}
//             />

//         </>
//     );
// };
import { useState } from "react";

export const UserRequestButton = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
        <button
        className="w-[180px] h-[45px] font-normal text-white bg-[#FF5721] rounded-lg my-auto"
        type="button"
        onClick={() => setShowModal(true)}>
            Submit new request  
        </button>
        {showModal ? (
            <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-gray-500 bg-opacity-75 transition-opacity">
                <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-xl font-semibold">Request Details</h3>
                    <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setShowModal(false)}
                    >
                    </button>
                    </div>
                    <div className="relative bg-white rounded-lg  dark:bg-gray-700">
                        <form className="p-4 mx-4 md:p-5">
                            <div className=" grid gap-3 grid-cols-2">
                                <div className="col-span-12">
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Title
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            id="title"
                                            name="title"
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                        id="description"
                                        name="description"
                                        rows={4}
                                        className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    />
                                    </div>                
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Location
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            id="location"
                                            name="location"
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="contactNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Contact Number
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            id="contactNumber"
                                            name="contactNumber"
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Image
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            id="image"
                                            name="image"
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                    <button
                        className="inline-flex w-full justify-center rounded-md bg-[#FF5721] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        Submit
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </>
        ) : null}
    </>
  );
};

