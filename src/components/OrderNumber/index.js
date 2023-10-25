import {AiOutlineRight} from 'react-icons/ai'
import './index.css'

const OrderNumber = () => (
  <div>
    <div className="order-number-container ">
      <div className="d-flex flex-row align-center">
        <p>Order</p>
        <AiOutlineRight />
        <p className="p">Order 32457ABC</p>
      </div>
      <div className="d-flex flex-row align-center justify-content-between">
        <h1>Order 32457ABC</h1>
        <div>
          <button type="button" className="button-back">
            Back
          </button>
          <button type="button" className="button-approve">
            Approve Order
          </button>
        </div>
      </div>
    </div>
  </div>
)
export default OrderNumber
