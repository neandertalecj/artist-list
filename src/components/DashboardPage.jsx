import React, { Component } from 'react'
import AdvContent from './Content'
import Pagination from './Pagination/index'

import { connect } from 'react-redux'
import { getItems } from '../actions/itemActions'

class DashboardPage extends Component {
  state = {
    page: 1
  }

  componentDidMount(){
    const { page } = this.state
    this.props.getItems(page)
    console.log(this.props)
  }

  handlePageChange = ({ target }) => {
    const btnType = target.getAttribute('data-name');
    let { page } = this.state;

    if(!isNaN(btnType)) {
      this.updatePage(+btnType);
    } else {
      switch (btnType) {
        case 'next':
          this.updatePage(page + 1);
          break;
        case 'prev':
          this.updatePage(page - 1);
          break;
        default: null; /*eslint-disable-line*/
      }
    }
  }

  updatePage = (number) => {
      this.setState({
              page: number
          },
          this.props.getItems(number)
      )
  }

  render() {
    const { page } = this.state
    // const { perPage } = this.props.items.@attr.perPage
    const perPage = 50
    return (
      <div>
        <Pagination
          onClick={this.handlePageChange}
          page={page}
          lastPage={perPage}
        />
        <AdvContent data={this.props} />
        
      </div>
      
    )
  }
}
 
const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(
  mapStateToProps,
  { getItems }
)(DashboardPage)