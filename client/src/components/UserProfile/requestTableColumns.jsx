import { Button } from '../UI/Button';

export default function requestColumns({
	handleDetailsClick,
	selectedRequest,
}) {
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
			selector: (row) => row.createdAt && row.createdAt.slice(0, 10),
			sortable: true,
		},
		{
			id: 'details',
			name: 'Select',
			width: '110px',
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
			id: 'cancel',
			width: '110px',
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
			id: 'completed',
			width: '110px',
			cell: (row) =>
				selectedRequest?.id !== row.id && (
					<Button
						className="font-normal border border-[#9BC25B] hover:bg-[#9BC25B] rounded-lg p-1 dark:text-white"
						type="button"
						text="Completed"
					/>
				),
		},
	];
}
