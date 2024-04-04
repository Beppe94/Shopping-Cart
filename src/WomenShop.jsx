import NavBar from "./Nav";
import { useEffect, useState } from "react";
import CardItem from "./CardItem";

function WomenShop() {
    const [womenClothes, setWomenClothes] = useState(null)
    const [cart, setCart] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const data = await fetch("https://fakestoreapi.com/products/category/women's clothing")
          const res = await data.json()
          setWomenClothes(res)
        }

        fetchData()
    },[])

    function handleClick(index) {
        setCart([...cart, index]);
    }

    return (
        <div>
            <NavBar
                cart={cart}
            />
            <div>    
                {womenClothes ? (
                    womenClothes.map((object, index) => (
                        <CardItem 
                        key={index}
                        index={object.id}
                        title={object.title}
                        image={object.image}
                        price={object.price}
                        handleClick={handleClick}
                        />
                    ))
                ) : (
                    <p>loading...</p>
                )}
            </div>
        </div>
    )
}

export default WomenShop;