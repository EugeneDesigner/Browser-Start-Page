import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import './Contact.scss'
import Form from '../components/Form'
import { bindActionCreators } from 'redux'
import { sendMessage } from '../../../store/actions/'


class Contact extends Component {

  constructor() {
    super()
    this.state = {
      underscore: ''
    }
    this.fixPosition = this.fixPosition.bind(this);
  }

  componentDidUpdate() {

    if (ReactDOM.findDOMNode(this.refs.lastmessage)) {
      document.getElementsByClassName('contact__form')[0].style.display = 'none'
    }
  }



  fixPosition(e) {
    if (this.state.underscore) {
      this.state.underscore.style.borderBottom = "3px solid transparent"
    }
    let clicked = e.currentTarget,
        form    = ReactDOM.findDOMNode(this.refs.form),
        website = ReactDOM.findDOMNode(this.refs.website);

    clicked.style.borderBottom = "3px solid #5d8cf7";
    this.setState({
      underscore: clicked
    })

    if (clicked == clicked.parentNode.childNodes[0]) {
          form.style.display    = 'none',
          website.style.display = 'block'
    } else {
        form.style.display    = 'block',
        website.style.display = 'none'

    }


  }



  render() {
    const { contact, sendMessage, form } = this.props
    console.log(contact)


    return (

      <section className="contact">

          <div className="contact__form">
          <h3>My name is Eugene, and you can either</h3>
          <div className="contact__form__choices" >
            <div onClick={this.fixPosition}>Go to my website</div>
            <div className="contact__form__choices--line"></div>
            <div onClick={this.fixPosition}>Send me a message</div>
          </div>
          <a href="http://eugenedeveloper.me" ref="website" className="logo"></a>
          <Form ref="form" sendMessage={sendMessage}/>
        </div>

        {
        form.contact && form.contact.submitSucceeded
          ? <div className="success" ref="lastmessage"> Thank you for your message, {contact.person[contact.person.length-1].name}. I'll get back to you as soon as I can </div>
          : null}
      </section>

    )
  }
}



function mapStateToProps (state)  {
  return {
    form: state.form,
    contact: state.contact

  }
}

const mapDispatchToProps = (dispatch) =>  ({
    sendMessage: () => dispatch(sendMessage())
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
