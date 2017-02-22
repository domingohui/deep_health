'use strict';

import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

/****ACTION CODES*/
export const START_FETCHING_DATA = 'START_FETCHING_DATA';
export const DID_FETCH_DATA = 'DID_FETCH_DATA';
export const ERROR_FETCHING_DATA = 'ERROR_FETCHING_DATA'
export const UPDATE_OPTION = 'UPDATE_OPTION';
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
export const SEND_TO_SERVER = 'SEND_TO_SERVER';
export const CLEAR_INPUT = 'CLEAR_INPUT';
export const DISPLAY_MODEL_RESULT = 'DISPLAY_MODEL_RESULT';
export const CLEAR_MODEL_RESULT = 'CLEAR_MODEL_RESULT';
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

const clear_input = () => {
    return {
        type: CLEAR_INPUT
    }
};

export const display_model_result = (result) => {
    return {
        type: DISPLAY_MODEL_RESULT,
        result: result
    }
};

export const clear_model_result = () => {
    return {
        type: CLEAR_MODEL_RESULT
    }
}

export const update_search_text = (updated_text) => {
    return {
        type: UPDATE_SEARCH_TEXT,
        updated_text: updated_text
    };
}

export const update_option = (attr_id, option_id, updated_value='') => {
    return {
        type: UPDATE_OPTION,
        attr_id: attr_id,
        option_id: option_id,
        updated_value: updated_value
    };
}

export const send_to_server = (url, jsondata) => {
    let headers = new Headers();
    headers.set("Content-Type", "application/json");
    return (dispatch) => {
        return fetch (url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(jsondata)
        }).then(
            (response) => {
                return response.json();
            }
        ).then(
            (result) => {
                // Clear input
                dispatch(clear_input());
                // Show result
                dispatch(display_model_result(result));
            },
            (error) => {
                dispatch (error_fetching_data('Error validating the data', error));
            });
    };
};

export const fetch_data = (url, attributes) => {
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
