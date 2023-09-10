
import { BrowserRouter} from 'react-router-dom'
import AppRoutes from './Routes'
import './styles/global.css'
import { useState } from 'react'
import Productdetail from './data/Productdetail'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

function App() {

  // add to cart
  const [cart, setCart] = useState([])
  //product Detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) => 
  {
    const change = Productdetail.filter((x) => 
    {
      return x.Cat === product
    })
    setProduct(change)
  }
  //product detail
  const view = (product) => 
  {
    setDetail([{...product}])
    setClose(true)
  }

  // add to cart
  const addtocart = (product) => 
  {
    const exsit = cart.find((x) => 
    {
      return x.id === product.id
    })
    if(exsit)
    {
      alert("This Product is already added to cart")
    }
    else
    { 
      setCart([...cart, {...product, qty:1}])
      alert("product is added to cart")
    }
  } 
  console.log(cart)

  return (
    <>
      <BrowserRouter>
      <NavBar searchbtn={searchbtn}></NavBar>
      <AppRoutes product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}></AppRoutes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App

