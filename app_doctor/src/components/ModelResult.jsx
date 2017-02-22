import React from 'react';
import {connect} from 'react-redux';
import { clear_model_result } from './actions';

const Result = ({result, clear_result}) => (
    <div>{
        Object.keys(result).map( (attr,index) => (
            <div key={index}>{result[attr]}</div>
        ))
    }</div>
);

const mapStateToProps = (state) => {
    return {
        result: state.model_result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clear_result: () => dispatch(clear_model_result)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
