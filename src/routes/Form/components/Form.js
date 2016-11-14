import React, { Component } from 'react';
import './Form.scss';
import { Field, reduxForm, submit }  from 'redux-form';



const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Can I call you Secret Santa?'
  } else if (values.name.length > 20) {
    errors.username = 'Wow, maybe smth less than 20 characters?'
  }

  if (!values.email) {
    errors.email = 'Can I send back my answer by a horse?'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Hm.. Maybe typo somewhere?'
  }
  if (!values.message) {
    errors.message = 'I know, not easy to start conversation with stranger, but still...'
  } else if (values.message.length > 300) {
    errors.message = 'Would you mind keeping it ' + (values.message.length - 300) + 'signs shorter?'
  } else if (values.message.length < 20) {
    errors.message = 'I am so sad and lonely, maybe you can write ' + (20 - values.message.length) + ' letter(-s) more?'

  }
  return errors
}



const renderField = ({tag, input, placeholder, type, className, meta: {touched, error} }) => (
  <div>
    {
      tag=="input" ?  <input {...input} placeholder={placeholder}  type={type} className={className}/> :
      <textarea {...input} placeholder={placeholder} type={type} className={className}/>
    }
    {touched && ((error && <span className="ContactForm__error">{error}</span>))}
  </div>
)




const Form = (props) => {
  const {sendMessage, handleSubmit} = props


    return (
        <form
          className="ContactForm__form"

          onSubmit={handleSubmit(sendMessage)}>

       <Field name="name" type="text" tag="input" placeholder="Your name" component={renderField} className="ContactForm__input"/>
       <Field name="email" type="email" tag="input" placeholder="Your email" component={renderField} className="ContactForm__input"/>
       <Field name="message" type="text"  tag="textarea" placeholder="Short message" component={renderField} className="ContactForm__input"/>

       <button type="submit" className="ContactForm__button">
            Send
      </button>
      </form>
      )

  }



export default reduxForm({
  form: 'contact',
  validate
})(Form);
