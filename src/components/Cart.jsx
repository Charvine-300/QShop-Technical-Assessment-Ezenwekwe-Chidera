import 'bulma/css/bulma.min.css';
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../features/cartitems/cartSlice";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Cart = () => {
  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  //Variable for the total price of the cartItems
  let cartTotal = 0;

  for (let index = 0; index < items.cartItems.length; index++) {
    cartTotal += (items.cartItems[index].quantity * items.cartItems[index].price);
  };

  useEffect(() => {
    console.log(items);
  }, [items]);
  
  return (  
    <>
      <h2 className="title mt-5 has-text-centered is-size-2"> Cart </h2>
      {/* Template for empty cart */}
      {
        items.cartItems.length === 0 && 
        <div className="notification px-4 mt-5 animate__animated animate__fadeIn">
          <p className='is-color-black is-size-6'>
            Your cart is empty. 
          </p>
          <Link to='/'>
            <button className="button is-size-6 has-text-weight-bold"> Back To Shop </button>
          </Link>
        </div>
      }

      {/* Template for cart items in mobile view */}
      {items.cartItems.length !== 0 && items.cartItems.map(item => (
        <table key={item.id} className="table is-bordered my-4 is-narrow is-striped mobile-table">
          <thead>
            <tr>
              <th>
                <p 
                  onClick={() => {dispatch(remove(item))}} 
                  className="has-text-danger-dark has-text-left"> 
                  x 
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr> 
              <th> Product: </th>
              <td> {item.title} </td>
            </tr>
            <tr> 
              <th> Price: </th>
              <td> ${item.price} </td>
            </tr>
            <tr> 
              <th> Quantity: </th>
              <td> {item.quantity} </td>
            </tr>
            <tr> 
              <th> Subtotal: </th>
              <td> ${item.price * item.quantity} </td>
            </tr>
          </tbody>
        </table>
      ))}

      {/* Template for cart items in desktop view */}
      {items.cartItems.length !== 0 && 
      <table className="table is-bordered my-4 is-striped desktop-table">
        <thead>
          <tr>
            <th> </th>
            <th> Product </th>        
            <th> Price </th>
            <th> Quantity </th>
            <th> Subtotal </th>
          </tr>
        </thead>
        <tbody>
          {items.cartItems.map(item => (
            <tr key={item.id}>
              <th> 
                <p 
                  onClick={() => {dispatch(remove(item))}} 
                  className="has-text-danger-dark has-text-left"> 
                  x 
                </p>
              </th>
              <td> 
                <img className='mr-6' src={item.image} alt={item.title} />
                {item.title} 
              </td>
              <td> ${item.price} </td>
              <td> {item.quantity} </td>
              <td> ${item.price * item.quantity} </td>
            </tr>
          ))}
        </tbody>
      </table>}

      {items.cartItems.length !== 0 && <div className="cart-total mt-6">
        <h2 className="title mt-5 has-text-right is-size-4"> Cart Total </h2>
        <table className="table is-bordered my-4 mt-2 is-striped">
          <tbody>
            <tr> 
              <th> Subtotal: </th>
              <td> ${cartTotal} </td>
            </tr>
            <tr> 
              <th> Total: </th>
              <td> ${cartTotal} </td>
            </tr>
          </tbody>
        </table>
        <Link to='/checkout'>
          <button className="button is-black"> To CheckOut </button>
        </Link>
      </div>}
    </>
  );
}
export default Cart;