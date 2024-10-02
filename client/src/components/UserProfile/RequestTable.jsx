import DataTable from "react-data-table-component";
// import tempRequestdata  from './tempRequestdata';
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import axios from "axios";
import AcceptRequestModal from "./AcceptRequestModal";

import columns from "./requestTableColumns";

const tableCustomStyles = {
  headRow: {
    style: {
      backgroundColor: "#F8F8F8",
    },
  },
};

export const RequestComponent = ({ fixedHeader, fixedHeaderScrollHeight }) => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [requestData, setRequestData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // const isDevelopment = process.env.NODE_ENV === 'development';
	// const apiUrl = isDevelopment
	// 	? 'http://localhost:3003/api'
	// 	: 'https://be-v50-tier3-team-28.onrender.com/api';


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const response = await axios.get("http://localhost:3003/api/requests", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = response.data.requests;
        setRequestData(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [getAccessTokenSilently]);

  const handleDetailsClick = (row) => {
    if (!row) return;
    const requestWithAcceptanceState = {
      ...row,
      isAccepted: row.isAccepted ?? null,
    };
    setSelectedRequest(requestWithAcceptanceState);
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
  };

  return (
    <>
      <DataTable
        columns={columns({
          handleDetailsClick,
          selectedRequest,
          user,
        })}
        data={requestData}
        fixedHeader={fixedHeader}
        fixedHeaderScrollHeight={fixedHeaderScrollHeight}
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
    </>
  );
};

RequestComponent.propTypes = {
  fixedHeader: PropTypes.bool,
  fixedHeaderScrollHeight: PropTypes.string,
};
