import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import '../../index.scss'

class DisplayLanding extends Component {
  constructor (props) {
    super(props)

    this.state = {
      items: null
    }
  }

  //   componentDidMount () {
  //     const { user, msgAlert } = this.props

  //     indexItems(user)
  //       .then((res) => this.setState({ items: res.data.items }))
  //       .then(() => {
  //         msgAlert({
  //           heading: 'Index Success',
  //           message: 'Yippie indexed!',
  //           variant: 'success'
  //         })
  //       })
  //       .catch(error => {
  //         msgAlert({
  //           heading: 'Index Failed',
  //           message: 'Index Error: ' + error.message,
  //           variant: 'danger'
  //         })
  //       })
  //   }

  render () {
    return (
      <>
        <div className='main'><img className='main-img' src={process.env.PUBLIC_URL + '/Your.jpg'}/></div>
      </>
    )
  }
}
export default DisplayLanding
