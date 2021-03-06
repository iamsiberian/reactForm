import React from 'react';

import Button from '../../components/button/Button';
import FormField from '../../components/formField/FormField';
import RadioButton from '../../components/radioButton/RadioButton';
import CheckBox from '../../components/checkBox/CheckBox';
import UserAgreement from '../../components/userAgreement/UserAgreement';

import './style.scss';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import {
    logIn
} from './actions';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            sex: 'female',
            email: '',
            password: '',
            userAgreement: false
        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
        [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.logIn(this.state);
        console.log("Submit!"
            + "\nfirstName: " + this.state.firstName
            + "\nlastName: " + this.state.lastName
            + "\nsex: " + this.state.sex
            + "\nemail: " + this.state.email
            + "\npass: " + this.state.password
            + "\nuser agreement: " + this.state.userAgreement);
        const { history } = this.props;
        history.push('/news');
    }

    render() {
        return (
            <section className='registration'>
                <header className='registration__header'>
                    <h2 className='registration__heading'>Давайте начнем!</h2>
                </header>
                <form className='registration__form' onSubmit={this.handleSubmit}>

                    <FormField
                        label='Имя'
                        type='text'
                        name='firstName'
                        placeholder='Имя'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />

                    <FormField
                        label='Фамилия'
                        type='text'
                        name='lastName'
                        placeholder='Фамилия'
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />


                    <fieldset className='registration__gender'>
                        <legend className='form-field__label'>Ваш пол</legend>
                        <RadioButton
                            label='Женский'
                            name='sex'
                            value='female'
                            onChange={this.handleChange}
                        />

                        <RadioButton
                            label='Мужской'
                            name='sex'
                            value='male'
                            onChange={this.handleChange}
                        />
                    </fieldset>

                    <FormField
                        label='Введите электронный адрес'
                        type='email'
                        name='email'
                        placeholder='email@gmail.com'
                        onChange={this.handleChange}
                    />

                    <FormField
                        label='Придумайте пароль'
                        name='password'
                        value='password'
                        placeholder='Пароль'
                        onChange={this.handleChange}
                    />

                   <CheckBox
                        label={<UserAgreement/>}
                        name='userAgreement'
                        value='true'
                        onChange={this.handleChange}
                   />

                   <Button classes='registration__button' type='submit' value='Зарегистрироваться'/>
                </form>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.registrationReducer.user
    }
};

const mapDispatchToProps = (dispatch) => ({
    logIn: bindActionCreators(logIn, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);