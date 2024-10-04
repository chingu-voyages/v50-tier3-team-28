import { Button } from '../UI/Button';
import PropTypes from 'prop-types';

export default function requestColumns({ handleDetailsClick, user }) {
	return [
		{
			id: 'title',
			name: 'Title',
			width: '200px',
			selector: (row) => row.title,
		},
		{
			id: 'status',
			name: 'Status',
			selector: (row) => (row.isActive ? 'Active' : 'Inactive'),
			sortable: true,
		},
		{
			id: 'city',
			name: 'City',
			selector: (row) => row.location.city,
			sortable: true,
		},
		{
			id: 'country',
			name: 'Country',
			selector: (row) => row.location.country,
			sortable: true,
		},
		{
			id: 'date',
			name: 'Date',
			selector: (row) => new Date(row.createdAt).toLocaleDateString(),
			sortable: true,
		},
		{
			id: 'details',
			name: 'Select',
			width: '110px',
			cell: (row) => (
				<Button
					className="font-normal border border-[#F4743B] hover:bg-[#F4743B] hover:text-white rounded-lg p-1"
					type="button"
					text="Details"
					onClick={() => handleDetailsClick(row)}
				/>
			),
		},
		{
			id: 'cancel',
			width: '110px',
			cell: (row) =>
				row.isAccepted && row.beekeeper?.email === user.email ? (
					<Button
						className="font-normal border border-[#F4743B] hover:bg-[#F4743B] hover:text-white rounded-lg p-1"
						type="button"
						text="Cancel"
					/>
				) : null,
		},
		// {
		// 	id: 'completed',
		// 	width: '110px',
		// 	cell: (row) =>
		// 		selectedRequest?.id !== row.id && (
		// 			<Button
		// 				className="font-normal border border-[#9BC25B] hover:bg-[#9BC25B] rounded-lg p-1"
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
