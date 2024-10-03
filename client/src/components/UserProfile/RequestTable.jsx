import DataTable from 'react-data-table-component';
// import tempRequestdata  from './tempRequestdata';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AcceptRequestModal from './AcceptRequestModal';

import columns from './requestTableColumns';
// import CancelRequest from '../UI/CancelRequest';

const tableCustomStyles = {
	headRow: {
		style: {
			backgroundColor: '#f0f0f2',
		},
	},
};

export const RequestComponent = ({ fixedHeader, fixedHeaderScrollHeight }) => {
	const { user, getAccessTokenSilently } = useAuth0();
	const [requestData, setRequestData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [selectedRequest, setSelectedRequest] = useState(null);
	const [showEditButton, setShowEditButton] = useState(false);

	const isDevelopment = process.env.NODE_ENV === 'development';
	const apiUrl = isDevelopment
		? 'http://localhost:3003/api'
		: 'https://be-v50-tier3-team-28.onrender.com/api';

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const accessToken = await getAccessTokenSilently();
				const response = await axios.get(`${apiUrl}/requests`, {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});
				const data = response.data.requests;
				setRequestData(data);
				setLoading(false);
			} catch (e) {
				console.error(e);
				setLoading(false);
			}
		};
		fetchUserData();
	}, [getAccessTokenSilently, requestData, apiUrl]);

	const handleDetailsClick = (row) => {
		setSelectedRequest(row);
		setShowModal(true);
		if (user.sub.split('|')[1] === row.beefinderId.split('|')[1]) {
			setShowEditButton(true);
		} else {
			setShowEditButton(false);
		}
	};

	const handleModalClose = () => {
		setShowModal(false);
		setSelectedRequest(null);
	};

	return (
		<>
			<DataTable
				columns={columns({
					handleDetailsClick,
					// handleCancelRequest,
					selectedRequest,
				})}
				data={requestData}
				fixedHeader={fixedHeader}
				// fixedHeaderScrollHeight={fixedHeaderScrollHeight}
				highlightOnHover
				customStyles={tableCustomStyles}
				pagination
				progressPending={loading}
			/>

			{showModal && (
				<AcceptRequestModal
					request={selectedRequest}
					onClose={handleModalClose}
					showEditButton={showEditButton}
				/>
			)}
		</>
	);
};

RequestComponent.propTypes = {
	fixedHeader: PropTypes.bool,
	fixedHeaderScrollHeight: PropTypes.string,
};
