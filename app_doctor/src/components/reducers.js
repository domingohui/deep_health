import { combineReducers } from 'redux';
import { DID_FETCH_DATA, START_FETCHING_DATA, ERROR_FETCHING_DATA, UPDATE_OPTION, UPDATE_SEARCH_TEXT, CLEAR_INPUT} from './actions';

export const OPTIONS = 'options';
export const NUMERIC = 'numeric';

function attributes (attributes = [], action) {
    if ( action.type === DID_FETCH_DATA ) {
        // Add selected and index properties
        return action.attributes.map( (attr, index) => {
            return Object.assign( {}, attr, {
                id: 'a'+index
            },
                ((attr.type === OPTIONS)? {selected: 0}: {value: ''}))
        });
    }

    if ( typeof attributes === 'undefined' ) {
        console.log('attributes initial state');
        return [];
    }

    if ( action.type === UPDATE_OPTION ) {
        return attributes.map( (attr) => {
            if ( attr.id !== action.attr_id ) {
                return attr;
            }
            // Update attribute's selected option id
            if ( attr.type === OPTIONS ) {
                return Object.assign( {}, attr, {selected: action.option_id} );
            }
            else if (attr.type === NUMERIC) {
                return Object.assign( {}, attr, {value: action.updated_value} );
            }
        });
    }
    else if ( action.type === CLEAR_INPUT ) {
        return attributes.map( (attr) => {
            // clear attribute's selected option id
            if ( attr.type === OPTIONS ) {
                return Object.assign( {}, attr, {selected: 0} );
            }
            else if (attr.type === NUMERIC) {
                return Object.assign( {}, attr, {value: ''} );
            }
            return attr;
        });
    }

    return attributes;
}

function list_of_options (list_of_options=[], action) {
    if ( action.type === DID_FETCH_DATA ) {
        // Add list of options
        return action.list_of_options.map( (list_of_options, index) => {
            return {
                id: index,
                options: list_of_options
            }
        });
    }

    if ( typeof list_of_options === 'undefined' ) {
        return [];
    }

    return list_of_options;
}

function loading (loading = true, action) {
    if ( typeof loading === 'undefined' ) {
        return true;
    }

    if ( action.type === START_FETCHING_DATA ) {
        return true;
    }
    else if ( action.type === DID_FETCH_DATA 
        || action.type === ERROR_FETCHING_DATA) {
        return false;
    }

    return loading;
}

function search_for (search_this = '', action) {
    if ( typeof search_this === 'undefined' ) {
        console.log('search for text initial state');
        return '';
    }
    if ( action.type === UPDATE_SEARCH_TEXT ) {
        return action.updated_text;
    }
    return search_this;
}

const AppReducer = combineReducers({
    attributes, search_for, list_of_options, loading 
});
export default AppReducer;
