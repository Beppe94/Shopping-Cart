import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTech, cartTotalProducts, addIndexClothes } from "./prouctSlice";
import NavBar from "./Nav";
import CardItem from "./CardItem";

function TechShop() {

    const cartLenght = useSelector((state) => state.cartProductsReducer.cartProducts);
    const dispatch = useDispatch();

    const [techOject, setTechObject] = useState(null);
    const [cart, setCart] = useState(cartLenght);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let data;
            try {
                data = await fetch("https://fakestoreapi.com/products/category/electronics");
                if(!data.ok) {
                    throw new Error("Failed to fetch data");
                }
            } catch (error) {
                setError("Failed to fetch data, try again later");
            }

            if(data.ok) {
                const res = await data.json();
                setTechObject(res);
                dispatch(addTech(res));
            }
        }

        fetchData();
    }, [])
    
    function handleClick(index) {
        dispatch(addIndexClothes(index));
        if(!cart.includes(index)) {
            setCart([...cart, index]);
            dispatch(cartTotalProducts(index));
        }
    }
    
    function renderStar(numberOfStars) {
        const stars = "★".repeat(Math.floor(numberOfStars));

        return stars;
    }

    return (
        <div>
            <div>
                <NavBar cart={cart.length}/>
            </div>
            <div className="cardContainer">
                {techOject ? (
                    techOject.map((object, index) => (
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

export default TechShop;