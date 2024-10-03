import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import CancelRequest from '../UI/CancelRequest';

const Button = ({ className, onClick, children }) => (
	<button
		className={`font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 ${className}`}
		type="button"
		onClick={onClick}
	>
		{children}
	</button>
);

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
};

const customInputStyles =
	'my-0.5 ms-3 grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500';

function AcceptRequestModal({ request, onClose, showEditButton }) {
	const [isEditable, setIsEditable] = useState(false);
	const [errors, setErrors] = useState({});
	const { getAccessTokenSilently } = useAuth0();

	const [formData, setFormData] = useState({
		title: request?.title || '',
		location: request?.location?.city || '',
		latitude: request?.location?.coordinates[0] || '',
		longitude: request?.location?.coordinates[1] || '',
		contactNumber: request?.beefinder.contactNumber || '',
		description: request?.description || '',
		image: request?.image || '',
	});

	const isDevelopment = process.env.NODE_ENV === 'development';
	const apiUrl = isDevelopment
		? 'http://localhost:3003/api'
		: 'https://be-v50-tier3-team-28.onrender.com/api';

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsEditable(!isEditable);
		setErrors({});

		// Validation

		try {
			const { longitude, latitude, location, ...restFormData } = formData;
			const validationData = {
				...restFormData,
				location: {
					type: 'Point',
					coordinates: [parseFloat(latitude), parseFloat(longitude)],
					city: location,
					country: request?.location?.country,
				},
			};
			const accessToken = await getAccessTokenSilently();
			await axios.put(`${apiUrl}/requests/${request.id}`, validationData, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
		} catch (error) {
			let validationErrors = {};
			if (error) {
				validationErrors = error.response.data.error.details;
				setIsEditable(isEditable);
			}
			setErrors(validationErrors);
		}
	};

	return (
		<div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-gray-500 bg-opacity-75 transition-opacity">
			<div className="relative p-8 w-full max-w-lg max-h-full">
				<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
					<div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
						<h3 className="text-xl font-semibold">Request Details</h3>
						<button
							className="bg-transparent border-0 text-black float-right"
							onClick={onClose}
						>
							<span className="text-black h-6 w-6 block bg-gray-400 rounded-full">
								X
							</span>
						</button>
					</div>
					<div className="p-8 flex flex-col ">
						<div className="text-gray-700 text-lg mb-6 text-left">
							<div className=" flex  justify-between items-center">
								Title :{' '}
								{isEditable ? (
									<input
										type="text"
										name="title"
										value={formData.title}
										onChange={handleInputChange}
										className={customInputStyles}
									/>
								) : (
									formData.title
								)}
							</div>
							{errors.title && (
								<p className="text-red-500 text-sm text-center">
									{errors.title}
								</p>
							)}
							<div className=" flex  justify-between items-center">
								Location :{' '}
								{isEditable ? (
									<input
										type="text"
										name="location"
										value={formData.location}
										onChange={handleInputChange}
										className={customInputStyles}
									/>
								) : (
									`${formData.location}`
								)}
							</div>
							<div className=" flex  justify-between items-center">
								Latitude :{' '}
								{isEditable ? (
									<input
										type="text"
										name="latitude"
										value={formData.latitude}
										onChange={handleInputChange}
										className={customInputStyles}
									/>
								) : (
									formData.latitude
								)}
							</div>
							{errors[0] && (
								<p className="text-red-500 text-sm text-center">
									Enter valid latitude
								</p>
							)}
							<div className=" flex  justify-between items-center">
								Longitude :{' '}
								{isEditable ? (
									<input
										type="text"
										name="longitude"
										value={formData.longitude}
										onChange={handleInputChange}
										className={customInputStyles}
									/>
								) : (
									formData.longitude
								)}
							</div>
							{errors[1] && (
								<p className="text-red-500 text-sm text-center">
									Enter valid longitude
								</p>
							)}
							<div className=" flex  justify-between items-center">
								Email: (Upon Accept)
							</div>{' '}
							<div className=" flex  justify-between items-center">
								Contact No.: (Upon Accept)
							</div>
							{/* <div className=" flex  justify-between items-center">
								Email :{' '}
								{isEditable ? (
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										className={customInputStyles}
									/>
								) : (
									'(Upon Accept)'
								)}
							</div>
							<div className=" flex  justify-between items-center">
								Contact Number :{' '}
								{isEditable ? (
									<input
										type="text"
										name="contactNumber"
										value={formData.contactNumber}
										onChange={handleInputChange}
										className={customInputStyles}
									/>
								) : (
									'(Upon Accept)'
								)}
							</div>
							{errors.contactNumber && (
								<p className="text-red-500 text-sm">{errors.contactNumber}</p>
							)} */}
						</div>

						<div className="flex justify-between w-full">
							<div>
								<Button className="bg-[#F4743B] text-white" onClick={onClose}>
									Accept
								</Button>
							</div>
							<div className="flex space-x-4">
								{showEditButton && (
									<Button
										className="bg-white text-gray-900 border border-[#F4743B]"
										onClick={handleSubmit}
									>
										{!isEditable ? (
											<>
												<i className="fas fa-edit mr-1"></i> Edit
											</>
										) : (
											'Save'
										)}
									</Button>
								)}
								<CancelRequest
									requestId={request.id}
									// onClick={handleCancelRequest}
								/>
								{/* <Button
									className="bg-white text-gray-900 border border-[#F4743B]"
									onClick={handleCancelRequest}
								>
									Cancel Request
								</Button> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

AcceptRequestModal.propTypes = {
	request: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired,
	showEditButton: PropTypes.bool,
};

export default AcceptRequestModal;
