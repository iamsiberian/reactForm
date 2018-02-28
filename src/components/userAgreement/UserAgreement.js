import React from 'react';

import './style.scss'

export default class TermsOfService extends React.Component {
    render() {
        return(
            <div className='userAgreement__block'>
                Я принимаю условия <a className='userAgreement__link' href='#'>Пользовательского соглашения</a> и даю свое согласие на обработку моих персональных данных на условиях, определенных <a className='terms-of-use__link' href='#'>Политикой конфидециальности</a>.
            </div>
        );
    }
}