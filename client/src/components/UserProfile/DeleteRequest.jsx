// CancelRequest.js
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '../UI/Button';

const DeleteRequest = ({ requestId, onDelete }) => {
	const { getAccessTokenSilently } = useAuth0();
	const isDevelopment = process.env.NODE_ENV === 'development';

	const apiUrl = isDevelopment
		? 'http://localhost:3003/api'
		: 'https://be-v50-tier3-team-28.onrender.com/api';
	const handleDeleteRequest = async () => {
		console.log('requestId', requestId);
		try {
			if (confirm('Are you sure you want to delete this request?')) {
				console.log('User would like to delete the request.');
				const accessToken = await getAccessTokenSilently();
				const response = await fetch(`${apiUrl}/requests/${requestId}`, {
					method: 'DELETE',
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});

				if (!response.ok) {
					throw new Error('Failed to delete the request');
				}

				console.log('Deleted request successfully:');
				onDelete(requestId);
			}
		} catch (error) {
			console.error('Failed to delete the request:', error);
		}
	};

	return (
		<Button
			className="font-normal border border-[#F4743B] hover:bg-[#F4743B] rounded-lg p-1 mr-4"
			type="button"
			onClick={handleDeleteRequest}
		>
			<i className="fas fa-trash-alt"></i>
		</Button>
	);
};

DeleteRequest.propTypes = {
	requestId: PropTypes.string.isRequired,
	onDelete: PropTypes.func,
};

export default DeleteRequest;
