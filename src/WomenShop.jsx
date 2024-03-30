import NavBar from "./Nav";
import { useEffect, useState } from "react";
import CardItem from "./Styles/CardItem";

function WomenShop() {
    const [womenClothes, setWomenClothes] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          const data = await fetch("https://fakestoreapi.com/products/category/women's clothing")
          const res = await data.json()
          setWomenClothes(res)
          console.log(womenClothes);
        }

        fetchData()
      },[])

    return (
        <div>
            <NavBar />
            {womenClothes ? (
                womenClothes.map((object) => (
                    <CardItem 
                    index={object.id}
                    title={object.title}
                    image={object.image}
                    price={object.price}
                    />
                ))
            ) : (
                <p>loading...</p>
            )}
        </div>
    )
}

export default WomenShop;