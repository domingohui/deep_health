import React from 'react';

const ResultStatusCard = ({category, status}) => (
    <div className='row'>
        <div className='col l6 m5 s12'>
            <div className='card sticky-action'>
                <div className='card-content'>
                    <span className='card-title activator grey-text text-darken-4'>
                        {category}
                        <i className='material-icons right'>...</i>
                    </span>
                    <p>
                        {status}
                    </p>
                    <p><a href='#'>Remind me later</a></p>
                </div>
                <div className='card-reveal'>
                    <span className='card-title grey-text text-darken-4'>
                        {category}
                        <i className='material-icons right'>close</i>
                    </span>
                    <p>
                        Description of {status}: 
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default ResultStatusCard;
