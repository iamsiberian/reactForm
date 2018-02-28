import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class FormField extends React.Component {
    render() {
        const { label, type, name, placeholder, onChange } = this.props;

        return (
            <label className='form-field__label'>{label}
                <input className='form-field__input'
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}/>
            </label>
        );
    }
}

FormField.defaultProps = {
    type: 'text'
};

FormField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};