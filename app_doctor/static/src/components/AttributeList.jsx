import React from 'react';
import ReactTable from 'react-table';
require('react-table/react-table.css');

const columns = [
    {
        header: 'name',
        accessor: 'name',
    },
]

const AttributeList = ({attributes, list_of_options, on_update_selection}) => {

    return (
        <ReactTable
            data={attributes}
            columns={columns}
            defaultPageSize={10} />
    );
};

export default AttributeList;
