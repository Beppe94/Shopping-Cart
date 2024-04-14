import { useState, useEffect } from "react"
import "/src/Styles/cardContainer.css"
import NavBar from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./CardItem";
import { addIndexClothes, cartTotalProducts, addMenClotheObject } from "./prouctSlice";

function MenShop() {
    const cartLength = useSelector((state) => state.shop.cartProducts);
    const dispatch = useDispatch();

    const [menClothes, setMenClothes] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const data = await fetch("https://fakestoreapi.com/products/category/men's clothing");
          const res = await data.json();
          setMenClothes(res);
          dispatch(addMenClotheObject(res));
        }
        
        fetchData();
    },[])

    useEffect(() => {
        if(cartLength >= cart) {
            setCart(cartLength);
        }
    })

    function handleClick(index) {
        dispatch(addIndexClothes(index));
        if(!cart.includes(index)) {
            setCart([...cart, index]);
            dispatch(cartTotalProducts(index))
        }
    }

    function renderStar(numberOfStars) {
        const stars = "★".repeat(Math.floor(numberOfStars));

        return stars;
    }

    return (
        <div>
            <NavBar cart={cart.length} />
            <div className="cardContainer">
                {menClothes ? (
                    menClothes.map((object, index) => (
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
                ) : (
                    <p>...loading</p>
                )}
            </div>
        </div>
    )
}

export default MenShop;