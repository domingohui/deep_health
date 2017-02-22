import React, { Component }from 'react'
import {connect} from 'react-redux';
import VisibleAttributeList from './VisibleAttributeList';
require('materialize-css/sass/materialize.scss');
var Sidebar = require('react-sidebar').default;
import SearchBar from './SearchBar';
import SubmitButton from './SubmitButton';
import ClearButton from './ClearButton';
import { fetch_data, send_to_server, update_search_text, clear_input } from './actions';
import ModelResult from './ModelResult';

class App extends Component {
    constructor(props) {
        super(props);
        this.update_props(props);
        this.update_props = this.update_props.bind(this);
    }

    componentDidMount() {
        this.fetch_data('/get_attributes/');
    }

    componentWillReceiveProps (nextProps) {
        this.update_props(nextProps);
    }

    update_props (props) {
        this.attributes = props.attributes;
        this.list_of_options = props.list_of_options;
        this.model_result = props.model_result;
        this.update_search_text = props.update_search_text;
        this.send_to_server = props.send_to_server;
        this.fetch_data = props.fetch_data;
        this.clear_input = props.clear_input;
    }

    render() {
        return (
            <div>
                { this.model_result !== null &&
                        <div className='container'>
                            <ModelResult />
                        </div>
                }

                { this.model_result === null &&
                        <Sidebar
                            sidebar={
                                <div>
                                    <SearchBar 
                                        on_key_press={this.update_search_text}
                                    />
                                    <SubmitButton 
                                        attributes={this.attributes}
                                        list_of_options={this.list_of_options}
                                        send_to_server={this.send_to_server}
                                    />
                                    <ClearButton
                                        action={this.clear_input}
                                    />
                                </div>
                            }
                            docked={true}
                        >
                            <div className='container'>
                                <VisibleAttributeList />
                            </div>
                        </Sidebar>
                }
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        attributes: state.attributes,
        list_of_options: state.list_of_options,
        model_result: state.model_result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        send_to_server: (url, data) => dispatch(send_to_server(url, data)),
        update_search_text: (data) => dispatch(update_search_text(data)),
        fetch_data: (url) => dispatch(fetch_data(url)),
        clear_input: () => dispatch(clear_input())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
