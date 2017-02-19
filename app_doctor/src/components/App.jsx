import React, { Component }from 'react'
import {connect} from 'react-redux';
import { fetch_data } from './actions';
import VisibleAttributeList from './VisibleAttributeList';
require('materialize-css/sass/materialize.scss');
var Sidebar = require('react-sidebar').default;
import SearchBar from './SearchBar';
import SubmitButton from './SubmitButton';
import { send_to_server, update_search_text } from './actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.store = props.store;
    }

    componentDidMount() {
        console.log('Fetching data');
        this.props.dispatch(fetch_data('/get_attributes/'));
    }

    render() {
        return (
            <div>
                <Sidebar
                    sidebar={
                        <div>
                            <SearchBar 
                                on_key_press={update_search_text}
                            />
                            <SubmitButton 
                                store={this.store}
                                send_to_server={(url, form)=>this.props.dispatch(send_to_server(url,form))}
                            />
                        </div>
                    }
                    docked={true}
                >
                    <div className='container'>
                        <VisibleAttributeList />
                    </div>
                </Sidebar>
            </div>
        );
    }
}

export default connect()(App);
