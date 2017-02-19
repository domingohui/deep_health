import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

/****ACTION CODES*/
export const START_FETCHING_DATA = 'START_FETCHING_DATA';
export const DID_FETCH_DATA = 'DID_FETCH_DATA';
export const ERROR_FETCHING_DATA = 'ERROR_FETCHING_DATA'
export const UPDATE_OPTION = 'UPDATE_OPTION';
/***************/

// Action creators
const start_fetching_data = () => {
    return {
        type: START_FETCHING_DATA
    };
}

const did_fetch_data = (data) => {
    return {
        type: DID_FETCH_DATA,
        attributes: data.attributes,
        list_of_options: data.list_of_options
    };
}

const error_fetching_data = (error) => {
    return {
        type: ERROR_FETCHING_DATA,
        error: error
    };
}

export const update_option = (attr_id, option_id, update_value='') => {
    return {
        type: UPDATE_OPTION,
        attr_id: attr_id,
        option_id: option_id,
        updated_value: updated_value
    };
}

export const fetch_data = (url) => {
    return (dispatch) => {
        dispatch(start_fetching_data);

        return fetch (url).then(
            // parse Json response
            (response) => {
                return response.json();
            }).then( 
                (attributes) => {
                    if ( typeof attributes === 'undefined' ) {
                        dispatch (error_fetching_data('It took too long to get data...'));
                    }
                    else {
                        // good status
                        dispatch(did_fetch_data(attributes))
                        // Also add skill filters based on all hackers' skills
                    }
                },
                error => {
                    dispatch (error_fetching_data(error));
                });
    };    
}
