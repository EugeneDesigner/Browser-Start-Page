import React, { Component } from 'react'
import './Icons.scss'
import Icon from '../../../../static/Icons.js'

export default class IconSet extends Component {

  render() {
    const { icons } = this.props
    console.log(icons)
    return (
      <div className="icons__set">

         {
          icons.map((item, index) =>
            <div className={"color-" + item}><Icon icon={item}/></div>

          )
        }
        {/* <div className="color-youtube"><Icon icon="youtube"/></div>
        <div className="color-facebook"><Icon icon="facebook"/></div>
        <div className="color-dribble"><Icon icon="dribble"/></div>
        <div className="color-twitter"><Icon icon="twitter"/></div>
        <div className="color-tumblr"><Icon icon="tumblr"/></div>
        <div className="color-pininterest"><Icon icon="pininterest"/></div>
        <div className="color-behance"><Icon icon="behance"/></div>
        <div className="color-gmail"><Icon icon="gmail"/></div>
        <div className="color-instagram"><Icon icon="instagram"/></div>
        <div className="color-wikipedia"><Icon icon="wikipedia"/></div>
        <div className="color-medium"><Icon icon="medium"/></div>
        <div className="color-linkedin"><Icon icon="linkedin"/></div>
        <div className="color-smashing"><Icon icon="smashing"/></div>
        <div className="color-drive"><Icon icon="drive"/></div>
        <div className="color-codepen"><Icon icon="codepen"/></div>
        <div className="color-overflow"><Icon icon="overflow"/></div> */}
        <div className="color-man"><p> Sorry, I am a human</p><Icon icon="man" size="100%"/></div>
      </div>
    )
  }
}
