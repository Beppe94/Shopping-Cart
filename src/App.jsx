import { useEffect, useState } from 'react'
import './Styles/App.css'
import NavBar from './Nav'
import Home from './Home'

function App() {

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.escuelajs.co/api/v1/products")
      const res = data.json()
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
