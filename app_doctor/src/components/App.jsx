import React, { Component }from 'react'
import {connect} from 'react-redux';
import VisibleAttributeList from './VisibleAttributeList';
require('materialize-css/sass/materialize.scss');
var Sidebar = require('react-sidebar').default;
import SearchBar from './SearchBar';
import SubmitButton from './SubmitButton';
import { fetch_data, send_to_server, update_search_text } from './actions';
import ModelResult from './ModelResult';

class App extends Component {
    constructor(props) {
        super(props);
        this.attributes = props.attributes;
        this.list_of_options = props.list_of_options;
        this.model_result = props.model_result;
        this.update_search_text = props.update_search_text;
        this.send_to_server = props.send_to_server;
        this.fetch_data = props.fetch_data;
    }

    componentDidMount() {
        this.fetch_data('/get_attributes/');
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

/*
    componentWillReceiveProps (nextProps) {
        this.setState({
            show_model_result: (this.model_result != null)
        });
    }
    */


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
        fetch_data: (url) => dispatch(url)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
