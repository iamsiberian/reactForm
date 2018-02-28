import React from 'react';
import PropTypes from 'prop-types'

import './style.scss'

export default class CheckBox extends React.Component {
    render() {
        const {
            label,
            name,
            value,
            onChange
            } = this.props;

        return(
            <label className='checkbox__label'>
                <input className='checkbox__box'
                    type='checkbox'
                    name={name}
                    value={value}
                    onChange={onChange}/>
                {label}
            </label>
        );
    }
}

CheckBox.propTypes = {
    value: PropTypes.string,
    label: PropTypes.element,
    name: PropTypes.string,
    onChange: PropTypes.func
};