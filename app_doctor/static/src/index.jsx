'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AppReducer from './components/reducers';

/*
state: {
    attributes: [
        {
            id: 0,
            name: 'drug',
            type: 'options',
            list_of_options_id: 0, // displays list of options 
            selected: 2
        },
        {
            id: 1,
            name: 'age',
            type: 'numeric', // displays an input textbox
            value: '...',
        }
    ],

    list_of_options: [
        {
            id: 0,
            options: ['No', 'Down', 'Steady', 'Up'],//drugs
        },
        {
            id: 1
            options: ['No', 'Yes'],
        },
        {
            id: 2
            options: ['None', 'Normal', '>200', '>300'], //max_glu_serum
        },
        {
            id: 3
            options: ['None', 'Normal', '>7', '>8'], //A1Cresult
        },
        {
            id: 4
            options: ['female', 'male'],
        },
        {
            id: 5
            options: ['African American', 'Asian', 'Caucasian', 'Hispanic', 'Other'],
        },
        {
            id: 6
            options: ['No', '<30', '>30'], // readmitted
        }
    ],

    search_for: '...',

    loading: true
}
*/

let store = createStore ( AppReducer, 
    applyMiddleware(
        thunk,
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container'));
