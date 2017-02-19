import React, { Component }from 'react'
import {connect} from 'react-redux';
import { fetch_data } from './actions';
import VisibleAttributeList from './VisibleAttributeList';
require('materialize-css/sass/materialize.scss');

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Fetching data');
        this.props.dispatch(fetch_data('/get_attributes/'));
    }

    render() {
        return (
            <div className='container'>
                <VisibleAttributeList />
            </div>
        );
    }
}

export default connect()(App);
