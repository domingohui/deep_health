import React from 'react';
import { OPTIONS, NUMERIC } from './reducers';
import AttributeOptionButtons from './AttributeOptionButtons';
import AttributeInput from './AttributeInput';

function AttributeActionWrapper ( {attr, list_of_options, on_update_selection} ) {
    if ( attr.type === OPTIONS ) {
        return (
            <AttributeOptionButtons 
                attr={attr}
                list_of_options={list_of_options} 
                on_update_selection={on_update_selection}
            />
        );

    }
    else if ( attr.type === NUMERIC ) {
        return (
            <AttributeInput
                attr={attr}
                on_update_selection={on_update_selection}
            />
        );
    }
}

export default AttributeActionWrapper;
