import { useState } from "react";



// export const RequestFormModal = () => {
    
//     return (
//       <form>
//         <div className="space-y-12">
//           <div className="border-b border-gray-900/10 pb-12">
//             <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
//             <p className="mt-1 text-sm leading-6 text-gray-600">
//               This information will be displayed publicly so be careful what you share.
//             </p>
  
//             <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//               <div className="sm:col-span-4">
//                 <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
//                   Username
//                 </label>
//                 <div className="mt-2">
//                   <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                     <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
//                     <input
//                       id="username"
//                       name="username"
//                       type="text"
//                       placeholder="janesmith"
//                       autoComplete="username"
//                       className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>
//               </div>
  
//               <div className="col-span-full">
//                 <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
//                   About
//                 </label>
//                 <div className="mt-2">
//                   <textarea
//                     id="about"
//                     name="about"
//                     rows={3}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     defaultValue={''}
//                   />
//                 </div>
//                 <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
//               </div>
//             </div>
//           </div>
//           <div className="border-b border-gray-900/10 pb-12">
//             <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
//             <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
  
//             <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//               <div className="sm:col-span-3">
//                 <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
//                   First name
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="first-name"
//                     name="first-name"
//                     type="text"
//                     autoComplete="given-name"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
  
//               <div className="sm:col-span-3">
//                 <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
//                   Last name
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="last-name"
//                     name="last-name"
//                     type="text"
//                     autoComplete="family-name"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
  
//               <div className="sm:col-span-4">
//                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                   Email address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
  
//               <div className="sm:col-span-3">
//                 <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
//                   Country
//                 </label>
//                 <div className="mt-2">
//                   <select
//                     id="country"
//                     name="country"
//                     autoComplete="country-name"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                   >
//                     <option>United States</option>
//                     <option>Canada</option>
//                     <option>Mexico</option>
//                   </select>
//                 </div>
//               </div>
  
//               <div className="col-span-full">
//                 <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
//                   Street address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="street-address"
//                     name="street-address"
//                     type="text"
//                     autoComplete="street-address"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
  
//               <div className="sm:col-span-2 sm:col-start-1">
//                 <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                   City
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="city"
//                     name="city"
//                     type="text"
//                     autoComplete="address-level2"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
  
//               <div className="sm:col-span-2">
//                 <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                   State / Province
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="region"
//                     name="region"
//                     type="text"
//                     autoComplete="address-level1"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
  
//               <div className="sm:col-span-2">
//                 <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//                   ZIP / Postal code
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="postal-code"
//                     name="postal-code"
//                     type="text"
//                     autoComplete="postal-code"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-6 flex items-center justify-end gap-x-6">
//           <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     )
//   }
  
export const RequestFormModal = () => {
    return (
        <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Create New Product
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form class="p-4 md:p-5">
                        <div class="grid gap-4 mb-4 grid-cols-2">
                            <div class="col-span-2">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="">
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected="">Select category</option>
                                    <option value="TV">TV/Monitors</option>
                                    <option value="PC">PC</option>
                                    <option value="GA">Gaming/Console</option>
                                    <option value="PH">Phones</option>
                                </select>
                            </div>
                            <div class="col-span-2">
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>
                            </div>
                        </div>
                        <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                            Add new product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}