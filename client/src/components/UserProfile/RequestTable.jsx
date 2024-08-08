import DataTable from 'react-data-table-component';
import { Button } from "../UI/Button";
import tempRequestdata  from './tempRequestdata'; 

const columnDefinitions = [
    { id: 'title', name: 'Title', sortable: false },
    { id: 'status', name: 'Status', sortable: true },
    { id: 'city', name: 'City', sortable: true },
    { id: 'country', name: 'Country', sortable: true },
    { id: 'date', name: 'Date', sortable: true }
];

const columns = columnDefinitions.map(({ id, name, sortable }) => ({
    id,
    name,
    selector: row => row[id],
    sortable
}));

const buttonColumns = [
    {
        id: 'details',
        name: 'Select',
        button: true,
        cell: () =>
            <Button className="font-normal border border-[#F4743B] hover:bg-[#F4743B] rounded-lg p-1 dark:text-white" type="button" text="Details"></Button>,
    },
    {
        id: 'cancel',
        button: true,
        cell: () =>
            <Button className="font-normal border border-[#F4743B] hover:bg-[#F4743B] rounded-lg p-1 dark:text-white" type="button" text="Cancel"></Button>,
    },
    {
        id: 'completed',
        button: true,
        cell: () =>
            <Button className="font-normal border border-green-500 hover:bg-green-300 rounded-lg p-1 dark:text-white" type="button" text="Completed"></Button>,
    }
];

// Combine standard columns with button columns
const allColumns = [...columns, ...buttonColumns];

export const RequestComponent = ({ fixedHeader, fixedHeaderScrollHeight }) => {
    return (
        <DataTable
            columns={allColumns}
            data={tempRequestdata} 
            fixedHeader={fixedHeader}
            fixedHeaderScrollHeight={fixedHeaderScrollHeight}
            pagination
        />
    );
};

const Template = args => <RequestComponent {...args} />;

export const FixedHeader = Template.bind({});

FixedHeader.args = {
    fixedHeader: true,
    fixedHeaderScrollHeight: '300px',
};

export default {
    title: 'Headers/Fixed Header',
    component: FixedHeader,
};
