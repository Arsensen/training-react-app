import React from 'react'
import {Form} from 'react-final-form'
import validators from './Validators'
import { connect } from 'react-redux'
import { login } from '../../Fetchers/fetchData'
import customField from './Fields'

const LoginForm = (props)=> {
        return (
            <div>
                <Form 
                    onSubmit={ props.onSubmit }
                    render={({ handleSubmit, submitting }) => (
                        <form onSubmit={handleSubmit}>
                            {customField('email', 'email', validators.required)}
                            {customField('password', 'password', validators.composeValidators(validators.required, validators.minValue(5)))}
                            {customField('rememberMe', 'checkbox')}
                            <button type="submit" disabled={submitting}>Login</button>
                        </form>
                    )}
                />
            </div>
        )
}

const Login = ({login})=>{
    return (
        <div style={{'paddingLeft': '2rem'}}>
            <h2>Login</h2>
            <LoginForm onSubmit={login} />
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        login: (obj)=> { dispatch(login(obj)) }
    }
}




export default connect(null, mapDispatchToProps)(Login)