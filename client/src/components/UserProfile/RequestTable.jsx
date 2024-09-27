import DataTable from 'react-data-table-component';
// import tempRequestdata  from './tempRequestdata';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AcceptRequestModal from '../UI/AcceptRequestModal';

import columns from './requestTableColumns';

const tableCustomStyles = {
	headRow: {
		style: {
			backgroundColor: '#F8F8F8',
		},
	},
};

export const RequestComponent = ({ fixedHeader, fixedHeaderScrollHeight }) => {
	const { getAccessTokenSilently } = useAuth0();
	const [requestData, setRequestData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [selectedRequest, setSelectedRequest] = useState(null);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const accessToken = await getAccessTokenSilently();
				const response = await axios.get('http://localhost:3003/api/requests', {
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
	}, [getAccessTokenSilently]);

	const handleDetailsClick = (row) => {
		setSelectedRequest(row);
		setShowModal(true);
	};

	const handleModalClose = () => {
		setShowModal(false);
		setSelectedRequest(null);
	};

	return (
		<>
			<DataTable
				columns={columns({ handleDetailsClick, selectedRequest })}
				data={requestData}
				fixedHeader={fixedHeader}
				fixedHeaderScrollHeight={fixedHeaderScrollHeight}
				customStyles={tableCustomStyles}
				pagination
				progressPending={loading}
			/>

			{showModal && (
				<AcceptRequestModal
					request={selectedRequest}
					onClose={handleModalClose}
				/>
			)}
		</>
	);
};

RequestComponent.propTypes = {
	fixedHeader: PropTypes.bool,
	fixedHeaderScrollHeight: PropTypes.string,
};
