import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';


const Products = ({ items, title }) => {
 
  return ( 
    <>
      <h2 className="title mt-5 has-text-centered is-size-2"> {title} </h2>
      <div className="columns mt-5 is-8 is-variable width" id='justify'>
        {items.map(product => (
          <div key={product.id} className="column is-4-tablet is-3-desktop">
            <Link to={`/${product.id}`}>
              <div className="card" id='remove-back'>
                <div className="card-image">
                  <img src={product.image} alt={product.title} />
                  <div className='has-text-weight-light is-uppercase is-size-6'>
                    <p className='mt-2'> {product.title} </p>
                    <p className='mt-3'> ${product.price} </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
 
export default Products;