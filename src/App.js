// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Slider from './components/slider';
import Separator from './components/Separator';
import ProductList from './components/ProductsList';
import {Routes, Route, Link} from "react-router-dom";
import About from './components/About';
import Prodict from './components/product';


function App() {
  
  return (
    <div className='bg-dark'>
      <Navbar />
      <Routes>
      <Route path='/'
            element={
              <>
                <Slider />
                <Separator title={"Our Products"}/>
                <ProductList />
              </>
            }
      />

  <Route path='about'
            element={
              <>
                <About />
              </>
            }
      />
      
  <Route path='product/:productId' 
            element={
              <>
                <Prodict />
              </>
            }
      />

      </Routes>
      


    </div>
  )


  };
export default App;
