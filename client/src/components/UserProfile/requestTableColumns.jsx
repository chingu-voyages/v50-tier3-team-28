import { Button } from "../UI/Button";
import PropTypes from "prop-types";

export default function requestColumns({ handleDetailsClick, user }) {
  return [
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
      selector: (row) => new Date(row.createdAt).toLocaleDateString(),
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
      id: "cancel",
      button: true,
      cell: (row) =>
        row.isAccepted && row.beekeeper === user.email ? (
          <Button
            className="font-normal border border-[#F4743B] hover:bg-[#F4743B] hover:text-white rounded-lg p-1 dark:text-white"
            type="button"
            text="Cancel"
          />
        ) : null,
    },
    // For now will hide the 'completed' button until the 'completed' feature is added later on, this can be enabled in the future
    // {
    // 	id: 'completed',
    // 	cell: (row) =>
    // 		selectedRequest?.id !== row.id && (
    // 			<Button
    // 				className="font-normal border border-green-500 hover:bg-green-300 rounded-lg p-1 dark:text-white"
    // 				type="button"
    // 				text="Completed"
    // 			/>
    // 		),
    // },
  ];
}

// Ensure PropTypes are defined for the component
requestColumns.propTypes = {
  handleDetailsClick: PropTypes.func.isRequired,
  selectedRequest: PropTypes.object,
  user: PropTypes.object.isRequired,
};
