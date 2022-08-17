import 'animate.css';
import 'bulma/css/bulma.min.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../features/cartitems/cartSlice';
import { Link, useParams } from 'react-router-dom';


const ProductDetails = ({ items }) => {

  //Dispatch actions to add items to cart
  const cartList = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [displayAlert, setDisplayAlert] = useState(['none', '']);
  const [itemCount, setItemCount] = useState('1 X');
  const [inputValue, setInputValue] = useState(1);

  const { id } = useParams();
  const productJuice = items.filter(item => item.id === parseInt(id));

  //Extracting the only item from the filtered array
  const product = productJuice[0];

  //Function to display the alert message
  const cartAlert = () => {
    setItemCount(`${inputValue} X `);
    setDisplayAlert(['flex', 'animate__bounceIn']);
    let item = {...product, quantity: parseInt(inputValue)};
    console.log(item);

    //Add item to cart
    dispatch(add(item));
  }

  return (  
    <>
      <div style={{'display': `${displayAlert[0]}`}} className={`notification px-4 mt-5 animate__animated ${displayAlert[1]}`}>
        <p className='is-color-black is-size-6'>
          {itemCount}"{product.title}" has been added to your cart! 
        </p>
        <Link to='/cart'>
          <button className="button is-size-6 has-text-weight-bold"> View Cart </button>
        </Link>
      </div>
      <section id='product-wrapper' className='is-flex is-flex-wrap-wrap is-align-items-center mt-5'>
        <div className="mt-6 mb-3 contain">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="card mt-4 contain" id="remove-back">
          <div className="card-content px-1 py-1">
            <div className="content has-text-left">
              <h3 className='is-size-4 mb-1'> {product.title} </h3>
              <h3 className='is-size-3 has-text-weight-light my-3'> 
                ${product.price} 
              </h3>
              <p className="has-text-weight-light is-size-6"> 
                {product.description} 
              </p>
              <input 
                type="number" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="input item-quantity" 
              />
              <button 
                onClick={cartAlert}
                className="button is-black"> Add To Cart </button>
            </div> 
          </div>
        </div>
      </section>
    </>
  );
}
 
export default ProductDetails;