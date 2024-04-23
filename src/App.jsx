import { useEffect, useState } from 'react'
import './Styles/App.css'
import NavBar from './Nav'
import Home from './Home'
import { useSelector } from 'react-redux'

function App() {
  const cartLength = useSelector((state) => state.cartProductsReducer.cartProducts);
    
  const [cart, setCart] = useState([]);

  useEffect(() => {
      if(cartLength.length >= cart.length) {
          setCart(cartLength);
      }
  })

  return (
    <div>
        <NavBar cart={cart.length} />
        <Home />
    </div>
  )
}

export default App
