import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "./features/products/productsSlice";
import Products from './components/Products';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Loading from './assets/loading.png';
import Error from './assets/error.png';
import Checkout from './components/Checkout';
import ScrollToTop from './components/ScrollToTop';


function App() { 
  const [count, setCount] = useState(0);
  const productList = useSelector((state) => state.product);
  const dispatch = useDispatch();
  
  //Filtering through the product list by category
  const Electronics = productList.products.filter((product) => product.category === "electronics");
  const Jewelery = productList.products.filter((product) => product.category === "jewelery");
  const Men = productList.products.filter((product) => product.category === "men's clothing");
  const Women = productList.products.filter((product) => product.category === "women's clothing");
  
  
  //Grouping products to send as prop to Homepage component
  const Home =[Electronics, Jewelery, Men, Women];


  useEffect(() => {
    dispatch(fetchProducts());
    console.log(productList.products);
  }, [])


  return (
    <Router>
      <ScrollToTop />
      {productList.loading && 
        <div className="Loader-header">
          <img src={Loading} alt="Loading Message" className='logo' />
          <h1 className="title mt-5 has-text-centered has-text-weight-light is-size-4"> Loading Store... </h1> 
        </div>
      }
      {!productList.loading && productList.error ? 
        <div className="Loader-header">
          <img src={Error} alt="Error Message" />
          <h1 className="title mt-5 has-text-centered has-text-weight-light is-size-4"> Error: {productList.error} </h1> 
        </div>
        : null
        }
      {!productList.loading && productList.products.length ? (
        console.log('Products fetched!')
        ): null
      }
    
      <Navbar itemNo={count} />
      <Routes>
        <Route 
          path='/*' 
          element={<Homepage items={Home} />} 
        />
        <Route 
          path='/electronics' 
          element={<Products items={Electronics} title={'Electronics'} />} 
        />
        <Route 
          path='/jewelery' 
          element={<Products items={Jewelery} title={'Jewelery'} />} 
        />
        <Route 
          path='/men' 
          element={<Products items={Men} title={'Men'} />}
        />
        <Route 
          path='/women' 
          element={<Products items={Women} title={'Women'} />}
        />
        <Route 
          path='/:id'
          element={<ProductDetails 
            count={count}
            setCount={setCount}
            items={productList.products}  />}
        />
        <Route 
          path='/cart' element={<Cart />}
        />
        <Route 
          path='/checkout' element={<Checkout />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
