import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { deleteItem, showItem } from '../../api/item'
import Button from 'react-bootstrap/Button'

class ShowItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      item: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showItem(match.params.id, user)
      .then(res => this.setState({ item: res.data.item }))
      .then(() => {
        msgAlert({
          heading: 'Show item success',
          message: 'Yippie! Success!',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Show item failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleDelete = () => {
    const { match, user, msgAlert, history } = this.props

    deleteItem(match.params.id, user)
      .then(() => history.push('/'))
      .then(() => {
        msgAlert({
          heading: 'item deleted',
          message: 'Yippe! item deleted!',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'item deletion failed',
          message: 'item Delete Error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    if (this.state.item === null) {
      return 'loading...'
    }
    //  add owner back in
    const { brand, style, gender, size, category, pricePaid, priceValued, owner } = this.state.item
    const { user, history, match } = this.props

    return (
      <>
        <h3 className='item-title'>Item</h3>
        <div className='item-details'>
          <h6 className='item-details-title'>Brand</h6>
          <p className='item-details-info'>{brand}</p>
          <h6 className='item-details-title'>Style</h6>
          <p className='item-details-info'> {style}</p>
          <h6 className='item-details-title'>Gender</h6>
          <p className='item-details-info'>{gender}</p>
          <h6 className='item-details-title'>Size</h6>
          <p className='item-details-info'>{size}</p>
          <h6 className='item-details-title'>Category</h6>
          <p className='item-details-info'>{category}</p>
          <h6 className='item-details-title'>Price Paid</h6>
          <p className='item-details-info'>{pricePaid}</p>
          <h6 className='item-details-title'>Price Valued</h6>
          <p className='item-details-info'>{priceValued}</p>
          {user._id === owner && (
            <>
              <Button onClick={this.handleDelete}>Delete</Button>
              <Button onClick={() => history.push(`/items/${match.params.id}/update-item`)}>Update</Button>
            </>
          )}
        </div>
      </>
    )
  }
}

// component MUST be wrapped to use withRouter
export default withRouter(ShowItem)
