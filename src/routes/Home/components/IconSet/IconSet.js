import React, { Component } from 'react'
import './Icons.scss'
import Icon from '../../../../static/Icons.js'

export default class IconSet extends Component {

  render() {
    const { icons } = this.props
  
    return (
      <div className="icons__set">

         {
          icons.map((item, index) =>
            <a target="_blank" className={"color-" + item.slice(0, item.indexOf("."))} href={"http://www." + item}><Icon icon={item}/></a>

          )
        }

        <a className="color-man"><p> Sorry, I am a human</p><Icon icon="man" size="100%"/></a>
      </div>
    )
  }
}
