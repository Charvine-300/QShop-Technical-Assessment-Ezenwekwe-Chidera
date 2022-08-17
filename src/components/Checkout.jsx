import 'animate.css'
import CheckoutImg from '../assets/checkout.png';
import { Link } from 'react-router-dom';

const Checkout = () => {

  return (  
    <>
      <div className="Loader-header animate__animated animate__bounceInDown">
        <img src={CheckoutImg} alt="Checkout Message"  />
        <h1 className="title mt-5 has-text-centered has-text-weight-light is-size-4"> 
          Thank you for your purchase!
        </h1> 
        <Link to={'/'}>
          <button className="button is-black"> Home </button>
        </Link>
      </div>
    </>
  );
}
 
export default Checkout;