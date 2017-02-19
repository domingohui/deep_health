import React from 'react';

// TODO: use regex to validate
class AttributeInput extends React.Component {
    constructor(props) {
        super(props);
        this.update_attr_value = props.on_update_selection.bind(this);
        this.handle_change = this.handle_change.bind(this);
        this.state = {value: props.attr.value};
        this.attr_id = props.attr.id;
    }

    handle_change (event) {
        this.setState({value: event.target.value});
        this.update_attr_value(this.attr_id, null, event.target.value);
    }

    render() {
        return(
            <div className="input-field col l3">
                <input 
                    type='number'
                    onChange={this.handle_change}
                    className="validate" />
            </div>
        )
    }
}

export default AttributeInput;
