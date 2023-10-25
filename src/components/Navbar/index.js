import {AiOutlineShoppingCart, AiOutlineDown} from 'react-icons/ai'
import './index.css'

const Navbar = () => (
  <div className="d-flex flex-row justify-content-between nav">
    <div className="d-flex flex-row align-center ">
      <h1 className="h1">Reeco</h1>
      <div className="d-flex flex-row justify-content-around ">
        <p className="nav-items">Store</p>
        <p className="nav-items">Orders</p>
        <p className="nav-items">Analytics</p>
      </div>
    </div>
    <div className="d-flex flex-row align-center justify-content-even">
      <AiOutlineShoppingCart />
      <p className="nav-items">Hello,James</p>
      <AiOutlineDown />
    </div>
  </div>
)
export default Navbar
