import { useEffect, useState } from 'react'
import './Styles/App.css'
import NavBar from './Nav'
import Home from './Home'

function App() {

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products/category/jewelery")
      const res = await data.json()
      console.log(res);
    }

    fetchData()
  })

  return (
    <div>
      <NavBar />
      <Home />
    </div>
  )
}

export default App
