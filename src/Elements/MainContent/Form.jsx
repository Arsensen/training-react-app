import React from 'react'
import { Form } from 'react-final-form'
import { connect } from 'react-redux'
import customField from '../Login/Fields'
import validators from '../Login/Validators'

const Forms = ({submitter, from}) => {
    return (
            <Form onSubmit={(obj)=>submitter(from, obj)}
                render={({handleSubmit, submitting})=>{
                    return(
                        <form onSubmit={handleSubmit}>
                            {customField('textarea', 'textarea', validators.composeValidators(validators.required, validators.minValue(3)))}
                            <button type='submit' disabled={submitting}>Post</button>
                        </form>
                    )
                }
                }
            />
    )
}

const mapDispatch = (dispatch)=>{
    return{
        submitter: (form, obj)=> {
            obj.textarea.length && dispatch({type: `ADD_${form}`, title: obj.textarea})
            obj.textarea=''
        }
    }
}

export default connect(null, mapDispatch)(Forms)