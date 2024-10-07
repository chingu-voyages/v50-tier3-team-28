import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import CancelRequest from './CancelRequest';
import AcceptRequestCall from './AcceptRequestCall';

const customInputStyles =
	'w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500';

function AcceptRequestModal({ request, onClose }) {
	const [isEditable, setIsEditable] = useState(false);
	const [errors, setErrors] = useState({});
	const { getAccessTokenSilently } = useAuth0();
	const { user } = useAuth0();
	const [acceptedRequest, setAcceptedRequest] = useState(request);
	const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

	const toggleDescription = () => {
		setIsDescriptionExpanded(!isDescriptionExpanded);
	};

	const [formData, setFormData] = useState({
		title: request?.title || '',
		location: request?.location?.city || '',
		latitude: request?.location?.coordinates[0] || '',
		longitude: request?.location?.coordinates[1] || '',
		contactNumber: request?.contactNumber || '',
		description: request?.description || '',
		image: request?.image || '',
	});

	const isDevelopment = process.env.NODE_ENV === 'development';
	const apiUrl = isDevelopment
		? 'http://localhost:3003/api'
		: 'https://be-v50-tier3-team-28.onrender.com/api';

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsEditable(!isEditable);
		setErrors({});
		try {
			const { longitude, latitude, location, ...restFormData } = formData;
			const validationData = {
				...restFormData,
				contactNumber: formData.contactNumber,
				location: {
					type: 'Point',
					coordinates: [parseFloat(latitude), parseFloat(longitude)],
					city: location,
					country: request?.location?.country,
				},
			};
			const accessToken = await getAccessTokenSilently();
			const response = await axios.put(
				`${apiUrl}/requests/${request.id}`,
				validationData,
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);
			console.log('response', response.data.request);
		} catch (error) {
			let validationErrors = {};
			if (error) {
				validationErrors = error.response.data.error.details;
				setIsEditable(isEditable);
			}
			setErrors(validationErrors);
		}
	};
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const handleAcceptSuccess = (updatedRequest) => {
		setAcceptedRequest((prevRequest) => ({
			...prevRequest,
			isAccepted: true,
			beekeeperId: user.sub,
			beefinder: {
				...prevRequest.beefinder,
				email: updatedRequest.beefinder?.email || prevRequest.beefinder?.email,
				contactNumber:
					updatedRequest.beefinder?.contactNumber ||
					prevRequest.beefinder?.contactNumber,
			},
		}));
	};
	const handleCancelRequest = (canceledRequest) => {
		console.log('canceledRequest', canceledRequest);
		setAcceptedRequest((prevRequest) => ({
			...prevRequest,
			isAccepted: false,
			isActive: true,
			beekeeperId: null,
		}));
	};
	const isRequestPostedByUser = acceptedRequest?.beefinderId === user?.sub;
	const isRequestAccepted = acceptedRequest?.isAccepted;
	const isCurrentUserBeekeeper = acceptedRequest?.beekeeperId === user?.sub;
	const renderField = ({
		label,
		name,
		value,
		onChange,
		isEditable,
		error,
		customInputStyles,
		errorMessage,
	}) => (
		<div className="flex items-center text-gray-700 mb-1 text-left">
			<span className="font-bold text-base mr-1">{label}:</span>
			{isEditable ? (
				<input
					type="text"
					name={name}
					value={value}
					onChange={onChange}
					className={customInputStyles}
				/>
			) : (
				<span className="text-sm">{value}</span>
			)}
			{error && (
				<p className="text-red-500 text-sm text-center">{errorMessage}</p>
			)}
		</div>
	);
	// const renderContactFields = () => {
	// 	if (isRequestAccepted) {
	// 		return (
	// 			<>
	// 				{renderField(
	// 					'Email',
	// 					acceptedRequest?.beefinder?.email || '(No email provided)'
	// 				)}
	// 				{renderField(
	// 					'Contact No.',
	// 					acceptedRequest?.contactNumber || '(No contact number provided)'
	// 				)}
	// 			</>
	// 		);
	// 	} else {
	// 		return (
	// 			<>
	// 				{renderField('Email', '(Upon Accept)')}
	// 				{renderField('Contact No.', '(Upon Accept)')}
	// 			</>
	// 		);
	// 	}
	// };
	return (
		<div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-gray-500 bg-opacity-75 transition-opacity">
			<div className="p-8 w-full max-w-lg max-h-full">
				<div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
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
						<div className="text-gray-700 mb-6 text-left">
							{renderField({
								label: 'Title',
								name: 'title',
								value: formData.title,
								onChange: handleInputChange,
								isEditable: isEditable,
								error: errors.title,
								errorMessage: 'errors.title',
								customInputStyles: customInputStyles,
							})}
							{renderField({
								label: 'Location',
								name: 'location',
								value: formData.location,
								onChange: handleInputChange,
								isEditable: isEditable,
								error: errors.location,
								errorMessage: 'errors.location',
								customInputStyles: customInputStyles,
							})}
							<div className=" text-gray-700 mb-1 text-left">
								<span className="font-bold text-base mr-1">Description: </span>
								{isEditable ? (
									<textarea
										name="description"
										value={formData.description}
										onChange={handleInputChange}
										className={customInputStyles + ' w-full h-28'}
									/>
								) : (
									<>
										<span className="text-sm">
											{isDescriptionExpanded
												? acceptedRequest?.description
												: `${acceptedRequest?.description?.slice(0, 200)}${
														acceptedRequest?.description?.length > 200
															? '...'
															: ''
												  }`}
										</span>
										{acceptedRequest?.description?.length > 200 && (
											<button
												onClick={toggleDescription}
												className="text-blue-500 underline ml-2 text-xs"
											>
												{isDescriptionExpanded ? 'Show Less' : 'Show More'}
											</button>
										)}
									</>
								)}
							</div>

							{renderField({
								label: 'Latitude',
								name: 'latitude',
								value: formData.latitude,
								onChange: handleInputChange,
								isEditable: isEditable,
								error: errors[0],
								errorMessage: 'Enter valid latitude',
								customInputStyles: customInputStyles,
							})}
							{renderField({
								label: 'Longitude',
								name: 'longitude',
								value: formData.longitude,
								onChange: handleInputChange,
								isEditable: isEditable,
								error: errors[1],
								errorMessage: 'Enter valid longitude',
								customInputStyles: customInputStyles,
							})}

							<div className="text-gray-700 mb-1 text-left">
								<span className="font-bold text-base mr-1">Email :</span>
								<span className="text-sm">
									{isRequestAccepted ? (
										<>
											{acceptedRequest?.beefinder?.email ||
												'(No email provided)'}{' '}
										</>
									) : (
										'(Upon Accept)'
									)}
								</span>
							</div>

							<div className="text-gray-700 mb-1 text-left">
								<span className="font-bold text-base mr-1">
									Contact Number :
								</span>
								<span className="text-sm">
									{isRequestAccepted ? (
										<>
											{isEditable ? (
												<input
													type="text"
													name="contactNumber"
													value={formData.contactNumber}
													onChange={handleInputChange}
													className={customInputStyles}
												/>
											) : (
												acceptedRequest?.contactNumber ||
												'(No contact number provided)'
											)}
										</>
									) : (
										'(Upon Accept)'
									)}
								</span>
							</div>
						</div>
						<div className="flex justify-between w-full mb-4">
							<AcceptRequestCall
								selectedRequest={acceptedRequest}
								onSuccess={handleAcceptSuccess}
							/>
							<div className="flex space-x-4">
								{isRequestPostedByUser && (
									<button
										className="bg-white text-gray-900 border border-[#F4743B] px-6 py-2 rounded shadow"
										type="button"
										onClick={handleSubmit}
									>
										{!isEditable ? (
											<>
												<i className="fas fa-edit mr-1"></i> Edit
											</>
										) : (
											'Save'
										)}
									</button>
								)}
								{isCurrentUserBeekeeper && isRequestAccepted && (
									<CancelRequest
										requestId={request.id}
										onCancel={handleCancelRequest}
									/>
								)}
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
};

export default AcceptRequestModal;
