import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// API request
import { updateItem, showItem } from '../../api/item'
// import MovieForm from '../shared/MovieForm'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class UpdateItem extends Component {
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

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user, msgAlert } = this.props

    showItem(match.params.id, user)
      .then(res => this.setState({ item: res.data.item }))
      .then(() => msgAlert({
        heading: 'Show item success',
        message: 'Check out the item',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Show item failed :(',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      }))
  }

  // handleChange = (event) => {
  //   // because `this.state.movie` is an object with multiple keys, we have to do some fancy updating
  //   const userInput = { [event.target.name]: event.target.value }
  //   this.setState(currState => {
  //     // "Spread" out current movie state key/value pairs, then add the new one at the end
  //     // this will override the old key/value pair in the state but leave the others untouched
  //     return { event: { ...currState.event, ...userInput } }
  //   })
  // }
  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })

    handleSubmit = (event) => {
      event.preventDefault()

      const { user, msgAlert, history, match } = this.props

      updateItem(this.state, match.params.id, user)
        .then(res => history.push('/items/' + match.params.id))
        .then(() => msgAlert({ heading: 'Item Updated!', message: 'Nice work, go check out your item.', variant: 'success' }))
        .catch(err => {
          msgAlert({
            heading: 'Item update failed :(',
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
                <h3 className='page-title'>Update Item</h3>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId='brand'>
                    <Form.Label>Item Brand</Form.Label>
                    <Form.Control
                      required
                      name='brand'
                      value={this.state.brand}
                      placeholder={this.state.item?.brand}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId='style'>
                    <Form.Label>Item Style</Form.Label>
                    <Form.Control
                      required
                      name='style'
                      value={this.state.style}
                      placeholder={this.state.item?.style}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId='gender'>
                    <Form.Label>Item Gender</Form.Label>
                    <Form.Control
                      required
                      name='gender'
                      value={this.state.gender}
                      placeholder={this.state.item?.gender}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId='size'>
                    <Form.Label>Item Size</Form.Label>
                    <Form.Control
                      required
                      name='size'
                      value={this.state.size}
                      placeholder={this.state.item?.size}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId='category'>
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      required
                      name='category'
                      value={this.state.category}
                      placeholder={this.state.item?.category}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId='pricePaid'>
                    <Form.Label>Price Paid</Form.Label>
                    <Form.Control
                      required
                      name='pricePaid'
                      value={this.state.pricePaid}
                      placeholder={this.state.item?.pricePaid}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId='priceValued'>
                    <Form.Label>Price Valued</Form.Label>
                    <Form.Control
                      required
                      name='priceValued'
                      value={this.state.priceValued}
                      placeholder={this.state.item?.priceValued}
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

export default withRouter(UpdateItem)
