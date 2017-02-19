'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { update_search_text } from './actions';

class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onChangeUpdateSearchText = props.onKeyPress.bind(this);
        this.milliSecSinceLastChange = 0;
        this.lastUpdatedText ='';
        this.CHECK_UPDATE_INTERVAL = 200;
    }

    componentDidMount () {
        setInterval ( this.updateTimer.bind(this), this.CHECK_UPDATE_INTERVAL );
    }

    handleChange (event) {
        this.setState({value: event.target.value});
        this.milliSecSinceLastChange = 0;
    }

    updateTimer () {
        this.milliSecSinceLastChange += this.CHECK_UPDATE_INTERVAL;
        if ( this.milliSecSinceLastChange >= 400 && this.lastUpdatedText !== this.state.value) {
            this.onChangeUpdateSearchText(this.state.value);
            this.lastUpdatedText = this.state.value;
        }
    }

    render () {
        return (
            <div >
                <input 
                    type='text' 
                    placeholder={'SearchBar!'}
                    value={this.state.value} 
                    onChange={this.handleChange}
                    />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.search_filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onKeyPress: (value) => {
            dispatch (update_search_text(value));
        }
    };
};

const SearchBar = connect (
    mapStateToProps,
    mapDispatchToProps
)(Search);

export default SearchBar;
