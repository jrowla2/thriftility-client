import React, { Component } from 'react'
import { indexItems } from '../../api/item'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../index.scss'

class IndexItems extends Component {
  constructor (props) {
    super(props)

    this.state = {
      items: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexItems(user)
      .then((res) => this.setState({ items: res.data.items }))
      .then(() => {
        msgAlert({
          heading: 'Index Success',
          message: 'Yippie indexed!',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Index Failed',
          message: 'Index Error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { items } = this.state
    const { user } = this.props

    if (items === null) {
      return 'Loading...'
    }

    let itemsJsx
    // checking if the user has any events
    if (items.length === 0) {
      itemsJsx = 'No items, create some'
      // checking if user is not logged-in
    } else {
      // filtering items then mapping through the event where owner is equal to user id
      itemsJsx = items.filter(item => item.owner === user._id).map(item => (
        <Col key={item._id}>
          <Card border="secondary">
            <Card.Header>
              <Link
                className='item-link'
                to={`/items/${item._id}`}>
                {item.brand} {item.style}
              </Link>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Category: {item.category}
              </Card.Text>
              <Card.Text>
                Gender: {item.gender}
              </Card.Text>
              <Card.Text>
                Size: {item.size}
              </Card.Text>
              <Card.Text>
                Potential Profit ${(parseFloat(item.priceValued)) - (parseFloat(item.pricePaid))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))
    }

    return (
      <>
        <div className='hero'><img className='hero-img' src={process.env.PUBLIC_URL + '/hero2.jpeg'}/></div>
        <div className='main-content'>
          <h3 className='page-title'></h3>
          <Row xs={1} md={3} className="g-4">
            {itemsJsx}
          </Row>
          <br></br>
          <br></br>
        </div>
      </>
    )
  }
}

export default IndexItems
