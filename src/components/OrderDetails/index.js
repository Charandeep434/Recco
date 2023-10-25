import './index.css'

const OrderDetails = () => (
  <div className="d-flex flex-row align-center justify-content-around">
    <div className="containers">
      <p className="p-details">Supplier</p>
      <h1 className="h1-details">East Coast Fruits and Vegetables</h1>
    </div>
    <div className="containers">
      <p className="p-details">Shipping Date</p>
      <h1 className="h1-details">Thu, Feb 10</h1>
    </div>
    <div className="containers">
      <p className="p-details">Total</p>
      <h1 className="h1-details">$15,028.3</h1>
    </div>
    <div className="containers">
      <p className="p-details">Department</p>
      <h1 className="h1-details">300-444-678</h1>
    </div>
    <div className="containers">
      <p className="p-details">Status</p>
      <h1 className="h1-details">Awaiting Approval</h1>
    </div>
  </div>
)
export default OrderDetails
