import { useState, useEffect } from 'react'
import NavBar from './Nav'
import Home from './Home'
import { useSelector } from 'react-redux'

function App() {
  const cartLength = useSelector((state) => state.cartProductsReducer.cartProducts);
    
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartLength);
  }, [cartLength])

  return (
    <div>
        <NavBar cart={cart.length} />
        <Home />
    </div>
  )
}

export default App
