import { connect } from 'react-redux';
import { update_option } from './actions';
import AttributeList from './AttributeList';

const mapStateToProps = (state) => {
    let search_for = state.search_for.toLowerCase();
    return {
        // TODO: filter by state.search_for
        attributes: state.attributes.filter( (attr) => {
            return attr.display_name.toLowerCase().includes(search_for);
        }),
        list_of_options: state.list_of_options
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        on_update_selection: (attr_id, option_id, updated_value) => {
            dispatch(update_option(attr_id, option_id, updated_value))
        }
    };
};

const VisibleAttributeList = connect (
    mapStateToProps,
    mapDispatchToProps
)(AttributeList);

export default VisibleAttributeList;
