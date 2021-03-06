import React from 'react'
import './Search.scss';



export const Search = () => {
  return (
    <div className='search-field'>
      <h3>No Yahoo or Yandex. Just
            <span className="blue"> G</span>
            <span className="red">o</span>
            <span className="orange">o</span>
            <span className="blue">g</span>
            <span className="green">l</span>
            <span className="red">e </span>
           and take it easy</h3>
      <form className="search-field__form" action="https://www.google.com/search">
      <input type="hidden" name="ie" value="utf-8" />
      <input name="q" className="search-field__form--input" type="text" size="40" />
      <button type="submit">G</button>
      </form>
    </div>
  )
}

export default Search
