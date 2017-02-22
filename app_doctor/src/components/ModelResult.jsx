import React from 'react';
import {connect} from 'react-redux';
import { clear_model_result } from './actions';
var Sidebar = require('react-sidebar').default;
import ClearButton from './ClearButton';

const Result = ({result, clear_result}) => (
    <div>
        <Sidebar 
            sidebar={
                <ClearButton action={clear_result} />
            }
            docked={true}
        >
            {
                Object.keys(result).map( (attr,index) => (
                    <div key={index}>{result[attr]}</div>
                ))
            }
        </Sidebar>
    </div>
);

const mapStateToProps = (state) => {
    return {
        result: state.model_result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clear_result: () => dispatch(clear_model_result())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
