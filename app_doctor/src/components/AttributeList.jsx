import React from 'react';
import ReactTable from 'react-table';
import AttributeActionWrapper from './AttributeActionWrapper';
require('react-table/react-table.css');

const AttributeList = ({attributes, list_of_options, on_update_selection}) => {

    return (
        <ReactTable
            data={attributes}
            columns={[
                {
                    header: 'name',
                    accessor: 'display_name',
                },
                {
                    header: 'action',
                    accessor: 'type',
                    render: ({value, row}) => (<AttributeActionWrapper 
                        attr={row}
                        style={{height: '200px'}}
                        list_of_options={list_of_options}
                        on_update_selection={on_update_selection}
                    />)
                }
            ]}
            defaultPageSize={10} />
    );
};

export default AttributeList;
