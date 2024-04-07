import NavBar from "./Nav";
import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
import { addClotheObject, addIndexClothes } from "./prouctSlice";


function WomenShop() {
    const [womenClothes, setWomenClothes] = useState(null)
    const [cart, setCart] = useState([])

    const count = useSelector((state) => state.womenClothes.value);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchData = async () => {
          const data = await fetch("https://fakestoreapi.com/products/category/women's clothing")
          const res = await data.json()
          setWomenClothes(res)
          dispatch(addClotheObject(res));
        }
        
        fetchData();
    },[])

    function handleClick(index) {
        dispatch(addIndexClothes(index));
        if(!cart.includes(index)) {
            setCart([...cart, index]);
        }
    }

    useEffect(() => {
        console.log(cart);
    })

    return (
        <div>
            <NavBar
                cart={cart.length}
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
                        handleClickF={handleClick}
                        />
                    ))
                ) : (
                    <p>loading...</p>
                )}
            </div>
            <span>{count}</span>
        </div>
    )
}

export default WomenShop;