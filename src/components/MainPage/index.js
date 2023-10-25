import {Component} from 'react'

import {AiOutlinePrinter, AiOutlineCheck, AiOutlineClose} from 'react-icons/ai'
import NavBar from '../Navbar'
import OrderNumber from '../OrderNumber'
import OrderDetails from '../OrderDetails'

import './index.css'

const orderItems = {
  id: 1,
  productName: 'ChickenBreastFillets',
  brand: 'Hornel Black',
  price: '$60',
  quantity: '0*6LB',
  total: '0',
}

class MainPage extends Component {
  state = {
    status: '',
  }

  onClickUpdateStatusToTrue = () => {
    this.setState({status: 'Approved'})
  }

  onClickUpdateStatusToNotApproved = () => {
    this.setState({status: 'Missing'})
  }

  render() {
    const {status} = this.state
    return (
      <div>
        <NavBar />
        <OrderNumber />
        <OrderDetails />
        <div className="d-flex flex-column containers">
          <div className="d-flex flex-row align-center justify-content-between">
            <input type="search" className="input" placeholder="Search...." />
            <div className="d-flex flex-row align-center">
              <button className="button-add-items" type="button">
                Add Item
              </button>
              <AiOutlinePrinter className="icon" />
            </div>
          </div>
          <div className="d-flex flex-row align-center justify-content-between">
            <img
              className="img"
              src="https://i.ibb.co/x5WsL1Q/Avocado-Hass.jpg"
              alt="avocado"
            />
            <p>{orderItems.productName}</p>
            <p>{orderItems.brand}</p>
            <p>{orderItems.quantity}</p>
            <p>{orderItems.quantity}</p>
            <p>{orderItems.total}</p>
            {status === 'Approved' ? <p>{status}</p> : <p>{status}</p>}
            <button
              type="button"
              className="check"
              onClick={this.onClickUpdateStatusToTrue}
            >
              {' '}
              <AiOutlineCheck />
            </button>
            <button
              type="button"
              className="rigger-button check"
              onClick={this.onClickUpdateStatusToNotApproved}
            >
              {' '}
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default MainPage
