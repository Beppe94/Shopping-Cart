import NavBar from "./Nav";
import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
import { addWomenClotheObject, addIndexClothes, cartTotalProducts } from "./prouctSlice";
import "/src/Styles/cardContainer.css"

function WomenShop() {
    const cartLength = useSelector((state) => state.cartProductsReducer.cartProducts);

    const [womenClothes, setWomenClothes] = useState(null)
    const [cart, setCart] = useState([])


    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchData = async () => {
          const data = await fetch("https://fakestoreapi.com/products/category/women's clothing")
          const res = await data.json()
          setWomenClothes(res)
          dispatch(addWomenClotheObject(res));
        }
        
        fetchData();
    },[])

    function handleClick(index) {
        dispatch(addIndexClothes(index));
        if(!cart.includes(index)) {
            setCart([...cart, index]);
            dispatch(cartTotalProducts(index));
        }
    }

    useEffect(() => {
        if(cartLength.length >= cart.length) {
            setCart(cartLength);
        }
    });

    function renderStar(numberOfStars) {
        const stars = "★".repeat(Math.floor(numberOfStars))

        return stars;
    }

    return (
        <div>
            <NavBar
                cart={cart.length}
            />
            <div className="cardContainer">    
                {womenClothes ? (
                    womenClothes.map((object, index) => (
                        <CardItem 
                        key={index}
                        index={object.id}
                        title={object.title}
                        image={object.image}
                        price={object.price}
                        handleClickF={handleClick}
                        count={object.rating.count}
                        rated={renderStar(object.rating.rate)}
                        />
                    ))
                ) : <div className="loading"></div>}
            </div>
        </div>
    )
}

export default WomenShop;