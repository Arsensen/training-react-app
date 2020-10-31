import React from 'react'
import {Field} from 'react-final-form'
import styles from './Login.module.css'

const customField=(name, type, validators)=>{
    return(
        <div>
            <Field name={name} validate={validators} type={type}>   
                {({input, meta})=>{
                    return <input {...input} type={type}
                        className={meta.visited?(meta.valid?styles.touched:styles.error):styles.default} 
                        placeholder={name} 
                        />
                }}
            </Field>
        </div>
    )
}

export default customField