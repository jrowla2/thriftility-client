import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { withRouter } from 'react-router-dom'

// import EventForm from '../shared/EventForm'

import { createItem } from '../../api/item'

class CreateItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      brand: '',
      style: '',
      gender: '',
      size: '',
      category: '',
      pricePaid: '',
      priceValued: '',
      owner: ''
    }
  }

  handleChange = (event) => {
    // The event.target of this event will be an input element
    // Which will have a `name` attribute (key in the state) & a `value` (what the user typed)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // add history below to do the push
    const { user, msgAlert, history } = this.props

    createItem(this.state, user)
      .then(res => history.push('/items/' + res.data.item._id))
      .then(() => msgAlert({ heading: 'Item Created!', message: 'Party Time!', variant: 'success' }))
      .catch(err => {
        msgAlert({
          heading: 'Item creation failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <>
        <div className='form-box'>
          <div className='row'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
              <h3 className='page-title'>Create Item</h3>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId='brand'>
                  <Form.Label>Item Brand</Form.Label>
                  <Form.Control
                    required
                    name='brand'
                    value={this.state.brand}
                    placeholder='Item brand'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='style'>
                  <Form.Label>Style</Form.Label>
                  <Form.Control
                    required
                    name='style'
                    value={this.state.style}
                    placeholder='Item Style'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='gender'>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    required
                    name='gender'
                    value={this.state.gender}
                    placeholder='Item Gender'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='size'>
                  <Form.Label>Size</Form.Label>
                  <Form.Control
                    required
                    name='size'
                    value={this.state.size}
                    placeholder='Item Size'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='category'>
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    required
                    name='category'
                    value={this.state.category}
                    placeholder='Item Category'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='pricePaid'>
                  <Form.Label>Price Paid</Form.Label>
                  <Form.Control
                    required
                    name='pricePaid'
                    value={this.state.pricePaid}
                    placeholder='Price Paid'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='priceValued'>
                  <Form.Label>Price Valued</Form.Label>
                  <Form.Control
                    required
                    name='priceValued'
                    value={this.state.priceValued}
                    placeholder='Price Valued'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button type='submit'>Submit</Button>
              </Form>
            </div>
          </div>
        </div>
      </>
    )
  }
}
// add withRouter() when doing the history push above
export default withRouter(CreateItem)
