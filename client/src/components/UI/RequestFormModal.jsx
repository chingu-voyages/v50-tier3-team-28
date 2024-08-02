import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from '@auth0/auth0-react';

export const RequestFormModal = ({ showModal, setShowModal }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    description: "",
      // coordinates: [0,0],
      latitude: "",
      longitude: "",
    // type: 'Point',
    city: "",
    country: "",
    contactNumber: "",
      image: "",
      isActive: true,
      isAccepted: false,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch('http://localhost:3003/api/dashboard', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        // console.log('data-------------------------', data);
        setFormData(prevState => ({
          ...prevState,
          contactNumber: data.user.user_metadata?.contactNumber || "",
        }));

      } catch (e) {
        console.log(e);
      }
    };

    fetchUserData();
  }, [getAccessTokenSilently]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { longitude, latitude,city, country, ...restFormData } = formData;

        console.log("formData ............", formData);
    const validationData = {
        ...restFormData,
        location:{
            type: 'Point',
            coordinates: [parseFloat(latitude), parseFloat(longitude)],
            city: city,
            country:country,
        },
        }
    
try {
      const accessToken = await getAccessTokenSilently();
      const response = await axios.post('http://localhost:3003/api/requests', validationData, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
        console.log("response", response);
      setShowModal(false);
    } catch (error) {
        // console.log("error-----", error.response.data.error.details);

      let validationErrors = {};
        if (error) {
            validationErrors = error.response.data.error.details;
          }
        // console.log("validationErrors", validationErrors);
      setErrors(validationErrors);
    }
  };

  return (
    <>
      {showModal ? (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-gray-500 bg-opacity-75 transition-opacity">
          <div className="relative p-4 w-full max-w-lg max-h-full">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-xl font-semibold">Request Details</h3>
                <button
                  className="bg-transparent border-0 text-black float-right"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-black h-6 w-6 block bg-gray-400 rounded-full">X</span>
                </button>
              </div>
              <div className="relative bg-white rounded-lg dark:bg-gray-700">
                <form className="p-4 mx-4 md:p-5">
                  <div className="grid gap-3 grid-cols-2">
                    <div className="col-span-12">
                      <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Title *
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            id="title"
                            name="title"
                            type="text"
                            value={formData.title}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          />
                        </div>
                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                      </div>
                    </div>
                    <div className="col-span-12">
                      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Description *
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="description"
                          name="description"
                          rows={2}
                          value={formData.description}
                          onChange={handleChange}
                          className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                        <label htmlFor="latitude" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Latitude *
                          </label>
                          <div className="mt-2">
                            <input
                              id="latitude"
                              name="latitude"
                              type="text"
                              value={formData.latitude}
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="longitude" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Longitude *
                          </label>
                          <div className="mt-2">
                            <input
                              id="longitude"
                              name="longitude"
                              type="text"
                              value={formData.longitude}
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                          </div>
                        </div>
                        </div>
                        {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}                      
                      <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 mt-2">
                        <div className="sm:col-span-3">
                          <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            City
                          </label>
                          <div className="mt-2">
                            <input
                              id="city"
                              name="city"
                              type="text"
                              value={formData.city}
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                                                  </div>
                       {/* {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>} */}

                        </div>
                        <div className="sm:col-span-3">
                          <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Country
                          </label>
                          <div className="mt-2">
                            <input
                              id="country"
                              name="country"
                              type="text"
                              value={formData.country}
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                                                  </div>
                         {/* {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>} */}

                        </div>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <label htmlFor="contactNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Contact Number *
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            id="contactNumber"
                            name="contactNumber"
                            type="text"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          />
                        </div>
                        {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
                      </div>
                    </div>
                    <div className="col-span-12">
                      <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Image URL
                      </label>
                      <div className="mt-2">
                        <input
                          id="image"
                          name="image"
                          type="text"
                          value={formData.image}
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

RequestFormModal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};

export default RequestFormModal;