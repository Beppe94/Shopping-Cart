import { useState, useEffect } from "react"
import "/src/Styles/cardContainer.css"
import NavBar from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./CardItem";
import { addIndexClothes, cartTotalProducts, addMenClotheObject } from "./prouctSlice";

function MenShop() {
    const cartLength = useSelector((state) => state.cartProductsReducer.cartProducts);
    const dispatch = useDispatch();

    const [menClothes, setMenClothes] = useState(null);
    const [cart, setCart] = useState(cartLength);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let data;
            try {
                data = await fetch("https://fakestoreapi.com/products/category/men's clothing");
                if(!data.ok) {
                    throw new Error("Faied to fetch data");
                }
            } catch (error) {
                setError("Failed To Fetch Data");
            }

            if(data.ok) {
                const res = await data.json();
                setMenClothes(res);
                dispatch(addMenClotheObject(res));
            }
        }
        
        fetchData();
    },[])

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
            <div>
                <NavBar cart={cart.length} />
            </div>
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
                    error ? (
                        <h2>{error}</h2>
                    ) : (
                        <div className="loading"></div>
                    )
                )
                }
            </div>
        </div>
    )
}

export default MenShop;