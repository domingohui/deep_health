import { connect } from 'react-redux';
import React from 'react';
import { send_to_server } from './actions';
import { NUMERIC, OPTIONS } from './reducers';

class Submit extends React.Component {
    constructor(props){
        super(props);
        this.on_click_send = this.on_click_send.bind(this);
        this.store = props.store;
        this.send_to_server = props.send_to_server;
    }

    on_click_send () {
        let attributes = this.store.getState().attributes;
        let list_of_options = this.store.getState().list_of_options;
        let formdata = new FormData();
        attributes.map( (attr) => {
            if ( attr.type === NUMERIC ) {
                formdata.append(attr.name, parseInt(attr.value));
            }
            else if (attr.type === OPTIONS) {
                formdata.append(attr.name, list_of_options[attr.list_of_options_id][attr.selected]);
            }
        });
        this.send_to_server('/send_data/', formdata); 
    }

    render() {
        return(
            <a 
                className="waves-effect waves-light btn"
                onClick={this.on_click_send}
            >Submit</a>
        )
    }
}

export default Submit;
