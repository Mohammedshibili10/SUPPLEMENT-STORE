import Login from "./pages/Login"
import Navbar from "./compoents/Navbar"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Productcard from "./compoents/Productcard"
import Product from "./pages/Product"
import Card from "./compoents/Card"
import Benfits from "./pages/Benfits"
import Reviewcard from "./compoents/Reviewcard"
import Review from "./pages/Review"
import About from "./pages/About"
import Seemore from "./compoents/Seemore"
import Productpage from "./pages/Productpage"
import Contact from "./pages/Contact"
import NewPeoducts from "./compoents/NewPeoducts"
import FeaturedProducts from "./compoents/FeaturedProducts"
import ProductDetails from "./pages/ProductDetails"
import Addcart from "./pages/Addcart"


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          {/* <Route path='/signup' element={<Signup />} /> */}
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Productpage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path='/cart' element={<Addcart />} />
          <Route path='/products' element={<Productpage />}>

            {/* <Route path="new" element={<NewPeoducts/>}/>
        <Route path="featured" element={<FeaturedProducts/>}/> */}
          </Route>

          <Route path='/contact' element={<Contact />} />



        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
