// CancelRequest.js
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const CancelRequest = ({ requestId }) => {
	const { getAccessTokenSilently } = useAuth0();
	const isDevelopment = process.env.NODE_ENV === 'development';
	const apiUrl = isDevelopment
		? 'http://localhost:3003/api'
		: 'https://be-v50-tier3-team-28.onrender.com/api';
	const handleCancel = async () => {
		// console.log('requestId', requestId);

		try {
			const accessToken = await getAccessTokenSilently();
			// console.log('accessToken', accessToken);

			const response = await axios.patch(
				`${apiUrl}/requests/${requestId}/cancel`,
				{},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);
			console.log('Cancelled request successfully:', response.data);

			// onCancel(response.data.request);
		} catch (error) {
			console.error('Failed to cancel the request:', error);
		}
		console.log(requestId);

		// if (confirm('Are you sure you want to cancel this request?')) {
		// 	console.log('User would like to cancel the request.');
		// } else {
		// 	console.log('User do not want to cancel the request.');
		// }
	};

	return (
		<button
			onClick={handleCancel}
			className="px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 bg-white text-gray-900 border border-[#F4743B]"
		>
			Cancel Request
		</button>
	);
};

CancelRequest.propTypes = {
	requestId: PropTypes.string.isRequired,
	handleCancel: PropTypes.func,
};

export default CancelRequest;
