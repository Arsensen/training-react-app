import React from 'react'
import { Form } from 'react-final-form'
import validators from './Validators'
import { connect } from 'react-redux'
import { login } from '../../Fetchers/fetchData'
import customField from './Fields'

const LoginForm = ({onSubmit, urlCaptcha, message})=> {
        return (
            <div>
                { message && <div>{message}</div> }
                <Form 
                    onSubmit={ onSubmit }
                    render={({ handleSubmit, submitting }) => (
                        <form onSubmit={handleSubmit}>
                            {customField('email', 'email', validators.required)}
                            {customField('password', 'password', validators.composeValidators(validators.required, validators.minValue(5)))}
                            {customField('rememberMe', 'checkbox')}
                            {urlCaptcha && <img alt='captcha' src={urlCaptcha} />}
                            {urlCaptcha && customField('captcha', 'text', validators.required)}
                            <button type="submit" disabled={submitting}>Login</button>
                        </form>
                    )}
                />
            </div>
        )
}

const Login = ({login, urlCaptcha, message})=>{
    return (
        <div style={{'paddingLeft': '2rem'}}>
            <h2>Login</h2>
            <LoginForm onSubmit={login} urlCaptcha={urlCaptcha} message={message} />
        </div>
    )
}

const mapState=(state)=>{
    return{
        urlCaptcha: state.profile.urlCaptcha,
        message: state.profile.message
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        login: (obj)=> { dispatch(login(obj)) }
    }
}

export default connect(mapState, mapDispatchToProps)(Login)