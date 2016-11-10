import React, { PropTypes, Component } from 'react'
import IconSet from '../IconSet'
import './Filter.scss'



export default class Filter extends Component {

  onTagBtnClick(e) {
    console.log(e.target.innerText.toLowerCase());
    this.props.uploadIcons(e.target.innerText.toLowerCase());
  }

  render() {
    const {category, icons} = this.props
    const tags = ['All', 'Design', 'Web Development', 'Entertainment', 'Social', 'Serious']

    return (
      <div>
        <section className="filter__buttons">

            {
              tags.map((item, key) => {
              return <button onClick={::this.onTagBtnClick} key={key}>{item}</button>
              })
            }
        </section>

    <section><IconSet icons={icons}/></section>
    </div>

    )

  }
}


Filter.propTypes = {
   icons: PropTypes.array.isRequired,
   getIcons: PropTypes.func.isRequired,
     tag: PropTypes.string.isRequired
 }
