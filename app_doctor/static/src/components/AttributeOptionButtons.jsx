import React from 'react';

const AttributeOptionButtons = 
    ({attr, list_of_options, on_update_selection}) => {
        let options = list_of_options.reduce( (result, curr_list) => {
            if ( curr_list.id === attr.list_of_options_id ) {
                return curr_list.options;
            }
            return result;
        }, []);

        let selected_option_index = attr.selected;

        return (
            <div>
                {
                    options.map( (option,index) => (
                        <a 
                            key={'b'+index} 
                            className={'waves-effect waves-light btn' + ((index === selected_option_index)? '':' grey')}
                            onClick={()=>on_update_selection(attr.id, index, null)}
                            >{option}</a>
                    ))
                }
            </div>
        );
    }

export default AttributeOptionButtons;
