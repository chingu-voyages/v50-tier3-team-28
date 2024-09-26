import DataTable from "react-data-table-component";
import { Button } from "../UI/Button";
// import tempRequestdata  from './tempRequestdata';
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import axios from "axios";
import AcceptRequestModal from "../UI/AcceptRequestModal";

const tableCustomStyles = {
  headRow: {
    style: {
      backgroundColor: "#F8F8F8",
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
        const response = await axios.get("http://localhost:3003/api/requests", {
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

  const columns = [
    {
      id: "title",
      name: "Title",
      selector: (row) => row.title,
    },
    {
      id: "status",
      name: "Status",
      selector: (row) => (row.isActive ? "Active" : "Inactive"),
      sortable: true,
    },
    {
      id: "city",
      name: "City",
      selector: (row) => row.location.city,
      sortable: true,
    },
    {
      id: "country",
      name: "Country",
      selector: (row) => row.location.country,
      sortable: true,
    },
    {
      id: "date",
      name: "Date",
      selector: (row) => row.createdAt,
      sortable: true,
    },
    {
      id: "details",
      name: "Select",
      button: true,
      cell: (row) => (
        <Button
          className="font-normal border border-[#F4743B] hover:bg-[#F4743B] hover:text-white rounded-lg p-1 dark:text-white"
          type="button"
          text="Details"
          onClick={() => handleDetailsClick(row)}
        />
      ),
    },
    {
      id: "edit",
      button: true,
      cell: (row) =>
        selectedRequest?.id === row.id ? (
          <i className="fas fa-edit mr-1 text-lg"></i>
        ) : (
          <Button
            className="font-normal border border-[#F4743B] hover:bg-[#F4743B] hover:text-white rounded-lg p-1 dark:text-white"
            type="button"
            text="Cancel"
          />
        ),
    },
    {
      id: "completed",
      button: true,
      cell: (row) =>
        selectedRequest?.id !== row.id && (
          <Button
            className="font-normal border border-green-500 hover:bg-green-300 rounded-lg p-1 dark:text-white"
            type="button"
            text="Completed"
          />
        ),
    },
  ];

  return (
    <>
      <DataTable
        columns={columns}
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
