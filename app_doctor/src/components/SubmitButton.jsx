import { connect } from 'react-redux';
import React from 'react';
import { NUMERIC, OPTIONS } from './reducers';

class Submit extends React.Component {
    constructor(props){
        super(props);
        this.on_click_send = this.on_click_send.bind(this);
        this.update_props = this.update_props.bind(this);
        this.update_props(props);
    }

    componentWillReceiveProps(nextProps) {
        this.update_props(nextProps);
    }

    update_props(props) {
        this.send_to_server = props.send_to_server;
        this.attributes = props.attributes;
        this.list_of_options = props.list_of_options;
    }

    on_click_send () {
        let attributes = this.attributes;
        let list_of_options = this.list_of_options;
        let data = attributes.reduce( (result, attr) => {
            if ( attr.type === NUMERIC ) {
                return Object.assign({}, result, {[attr.name]: attr.value});
            }
            else if (attr.type === OPTIONS) {
                return Object.assign({}, result, {[attr.name]: attr.selected});
            }
            return result;
        }, {});
        this.send_to_server('/send_data/', data); 
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
