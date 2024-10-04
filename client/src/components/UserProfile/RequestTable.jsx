import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import AcceptRequestModal from './AcceptRequestModal';
import RequestFormModal from '../UI/RequestFormModal';
import columns from './requestTableColumns';

const tableCustomStyles = {
  headRow: {
    style: {
      backgroundColor: '#f0f0f2',
    },
  },
};

export const RequestComponent = ({ fixedHeader, fixedHeaderScrollHeight }) => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [requestData, setRequestData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showRequestFormModal, setShowRequestFormModal] = useState(false);

  const isDevelopment = process.env.NODE_ENV === 'development';
  const apiUrl = isDevelopment
    ? 'http://localhost:3003/api'
    : 'https://be-v50-tier3-team-28.onrender.com/api';

  const fetchUserData = useCallback(async () => {
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
  }, [getAccessTokenSilently, apiUrl]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handleDetailsClick = (row) => {
    setSelectedRequest(row);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedRequest(null);
  };

  const handleRequestAcceptance = (id) => {
    setRequestData((prevData) =>
      prevData.map((request) =>
        request.id === id
          ? { ...request, isAccepted: true, beekeeper: user.email }
          : request
      )
    );
    fetchUserData(); // Fetch the latest data after accepting a request
  };

  return (
    <>
      <button onClick={() => setShowRequestFormModal(true)}>New Request</button>
      <DataTable
        columns={columns({
          handleDetailsClick,
          selectedRequest,
          user,
        })}
        data={requestData}
        fixedHeader={fixedHeader}
        highlightOnHover
        customStyles={tableCustomStyles}
        pagination
        progressPending={loading}
      />

      {showModal && selectedRequest && (
        <AcceptRequestModal
          key={selectedRequest._id}
          request={selectedRequest}
          onClose={handleModalClose}
          onAccept={() => handleRequestAcceptance(selectedRequest.id)}
        />
      )}
      {showRequestFormModal && (
        <RequestFormModal
          showModal={showRequestFormModal}
          setShowModal={setShowRequestFormModal}
          fetchUserData={fetchUserData} // Pass the fetchUserData function
        />
      )}
    </>
  );
};

RequestComponent.propTypes = {
  fixedHeader: PropTypes.bool,
  fixedHeaderScrollHeight: PropTypes.string,
};
