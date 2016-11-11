import React, { Component } from 'react';
import './Form.scss';
import { reduxForm }  from 'redux-form';
import _ from 'lodash';


const FIELDS ={
  name: {
    type: 'input'
  },
  email: {
    type: 'input'
  },
  message: {
    type: 'textarea'
  }

}

console.log(FIELDS);


class Form extends Component {
  onSubmit(props) {
    alert ('post submitted')
  }



render() {
  const { sendMessage, fields: { name, email, message }, handleSubmit } = this.props

    return (
        <form
          className="ContactForm__form"

          onSubmit={handleSubmit(sendMessage)}
        >
          <div>
            <input
              type="text"
              placeholder="Name"
              className="ContactForm__input"
              {...name}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="ContactForm__input"
              {...email}
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Write a short message"
              className="ContactForm__input"
              {...message}
            />
          </div>

          <button
            type="submit"

            className="ContactForm__button"
          >
            Send
          </button>
        </form>
      )

    }
}



export default reduxForm({
  form: 'Form',
  fields: _.keys(FIELDS),

})(Form);
