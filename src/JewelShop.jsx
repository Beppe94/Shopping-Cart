import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Nav";
import { useEffect, useState } from "react";
import { addJewelery, addIndexClothes, cartTotalProducts } from "./prouctSlice";
import CardItem from "./CardItem";

function JewelShop() {

    const cartLength = useSelector((state) => state.cartProductsReducer.cartProducts);
    const dispatch = useDispatch();

    const [cart, setCart] = useState(cartLength);
    const [jewelsProduct, setJewelProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let data;
            try {
                data = await fetch("https://fakestoreapi.com/products/category/jewelery");
                if(!data.ok) {
                    throw new Error("Failed to fetch data");
                }
            } catch (error) {
                setError("Failed to fetch data, try again later");
            }

            if(data.ok) {
                const res = await data.json();
                setJewelProduct(res);
                dispatch(addJewelery(res));
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
                {jewelsProduct ? (
                    jewelsProduct.map((object, index) => (
                        <CardItem
                        key={index}
                        index={object.id}
                        title={object.title}
                        price={object.price}
                        image={object.image}
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

export default JewelShop;