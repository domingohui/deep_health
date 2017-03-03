import React from 'react';
var Sidebar = require('react-sidebar').default;
import ClearButton from './ClearButton';
import ResultStatusCard from './ResultStatusCard';

const Result = ({result, clear_result_action}) => (
    <div>
        <Sidebar 
            sidebar={
                <ClearButton action={clear_result_action} />
            }
            docked={true}
        >
            {
                Object.keys(result).map( (attr,index) => (
                    <ResultStatusCard 
                        key={index} 
                        category={attr} 
                        status={result[attr]} 
                    />
                ))
            }
        </Sidebar>
    </div>
);

export default Result;
