import React from 'react'
import {Form, Field} from 'react-final-form'
import styles from './Login.module.css'
import validators from './Validators'
import { connect } from 'react-redux'
import { login } from '../../Fetchers/fetchData'

class LoginForm extends React.Component {
    render(){
        return (
            <div>
                <Form 
                    onSubmit={ this.props.onSubmit }
                    render={({ handleSubmit, submitting }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Field name={'email'} validate={validators.required}>
                                    {({input, meta})=>{
                                        return <input {...input} 
                                            className={meta.visited?(meta.valid?styles.touched:styles.error):styles.default} 
                                            placeholder='email' 
                                            />
                                    }}
                                </Field>
                            </div>
                            <div>
                                <Field name={'password'} validate={validators.composeValidators(validators.required, validators.minValue(5))}>
                                    {({input, meta})=>{
                                        return <input {...input} 
                                            className={meta.visited?(meta.valid?styles.touched:styles.error):styles.default} 
                                            placeholder='password' 
                                            />
                                    }}
                                </Field>
                            </div>
                            <div>
                                <Field name={'rememberMe'} type='checkbox' >
                                    {({input, meta})=>{
                                        return <input 
                                            type='checkbox' {...input} 
                                            className={meta.visited?(meta.valid?styles.touched:styles.error):styles.default} 
                                            />
                                    }}
                                </Field>
                            </div>
                            <button type="submit" disabled={submitting}>Login</button>
                        </form>
                    )}
                />
            </div>
        )
    }
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
        submitter: (obj)=> dispatch({type: 'UPDATE_SUBMITTED_FORM', form: obj}),
        login: (obj)=> { dispatch(login(obj)) }
    }
}




export default connect(null, mapDispatchToProps)(Login)