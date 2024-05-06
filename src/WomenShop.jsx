import NavBar from "./Nav";
import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
import { addWomenClotheObject, addIndexClothes, cartTotalProducts, addProductQuantity } from "./prouctSlice";
import "/src/Styles/cardContainer.css"

function WomenShop() {
    const cartLength = useSelector((state) => state.cartProductsReducer.cartProducts);
    const dispatch = useDispatch();

    const [womenClothes, setWomenClothes] = useState(null);
    const [cart, setCart] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            let data;
            try {
                data = await fetch("https://fakestoreapi.com/products/category/women's clothing");
                if(!data.ok) {
                    throw new Error("Faied to fetch data");
                }
            } catch(error) {
                setError("Failed to fetch data, try again later");
            }

            if(data.ok) {
                const res = await data.json();
                setWomenClothes(res);
                dispatch(addWomenClotheObject(res));
            }
        }
        
        fetchData();
    },[])
    
    useEffect(() => {
        setCart(cartLength);
    }, [cartLength])    

    function handleClick(index) {
        dispatch(addIndexClothes(index));
        if(!cart.includes(index)) {
            setCart([...cart, index]);
            dispatch(cartTotalProducts(index));
            dispatch(addProductQuantity({index, quantity: 1}));
        }
    }

    function renderStar(numberOfStars) {
        const stars = "★".repeat(Math.floor(numberOfStars));

        return stars;
    }

    return (
        <div>
            <div>
                <NavBar cart={cart.length} />
            </div>
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
                ) : (
                    error ? (
                        <h2>{error}</h2>
                    ) : (
                        <div className="loading"></div>
                    )
                )}
            </div>
        </div>
    )
}

export default WomenShop;