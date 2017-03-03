import React from 'react';
import ClearButton from './ClearButton';
import ResultStatusCard from './ResultStatusCard';

const Result = ({result, clear_result_action}) => (
    <div>
        <ClearButton action={clear_result_action} />
        {
            Object.keys(result).map( (attr,index) => (
                <ResultStatusCard 
                    key={index} 
                    category={attr} 
                    status={result[attr]} 
                />
            ))
        }
    </div>
);

export default Result;
