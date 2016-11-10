import React, { Component } from 'react'
import './HomeView.scss'
import Search from '../components/SearchBar/Search'
import Filter from '../components/Filter/Filter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../store/actions/'



class HomeView extends Component {


  render() {
    const { page } = this.props
    console.log(page.category)
    const { getIcons, uploadIcons } = this.props.actions

      return (
      <div>
        <section className="search"><Search /></section>
        <section className="filter"><Filter category={page.category} icons={page.icons} getIcons={getIcons} uploadIcons={uploadIcons}/></section>
      </div>
)}

}


function mapStateToProps (state)  {
  return {
    user : state.user,
    page : state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
