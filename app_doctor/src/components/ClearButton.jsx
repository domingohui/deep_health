import React from 'react';

const ClearButton = ({action}) => (
    <a 
        className="waves-effect waves-light btn"
        onClick={()=>action()}
    >Clear</a> 
);

export default ClearButton;
