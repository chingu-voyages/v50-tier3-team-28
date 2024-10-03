import PropTypes from 'prop-types';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function AcceptRequestCall({ selectedRequest, onSuccess }) {
	const { getAccessTokenSilently, user } = useAuth0();

	const handleAcceptRequest = async () => {
		try {
			const accessToken = await getAccessTokenSilently();
			const response = await axios.post(
				`http://localhost:3003/api/requests/${selectedRequest._id}/accept`,
				{
					beekeeperId: user.sub,
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);
			console.log('Request accepted successfully:', response.data);
			onSuccess(response.data.request);
		} catch (error) {
			console.error(
				'Error accepting request:',
				error.response ? error.response.data : error.message
			);
		}
	};

	return (
		<div>
			{selectedRequest?.isAccepted ? (
				<span className="text-green-500 font-bold">Accepted ✅</span>
			) : (
				<button
					className={`font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 bg-[#F4743B] text-white`}
					type="button"
					onClick={handleAcceptRequest}
				>
					Accept
				</button>
			)}
		</div>
	);
}

AcceptRequestCall.propTypes = {
	selectedRequest: PropTypes.object.isRequired,
	onSuccess: PropTypes.func.isRequired,
};

export default AcceptRequestCall;
