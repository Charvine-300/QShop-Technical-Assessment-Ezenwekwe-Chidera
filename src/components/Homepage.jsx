import 'bulma/css/bulma.min.css'
import Products from './Products';

const Homepage = ({ items }) => {
  
  return (  
    <div className="container">
      <Products items={items[0]} title={'Electronics'} />
      <Products items={items[1]} title={'Jewelery'} />
      <Products items={items[2]} title={'Men'} />
      <Products items={items[3]} title={'Women'} />
    </div>
  )
}
 
export default Homepage