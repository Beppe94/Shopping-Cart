import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Nav";
import { useEffect, useState } from "react";
import { addJewelery, addIndexClothes, cartTotalProducts } from "./prouctSlice";
import CardItem from "./CardItem";

function JewelShop() {

    const cartLength = useSelector((state) => state.cartProductsReducer.cartProducts);
    const dispatch = useDispatch();

    const [cart, setCart] = useState([]);
    const [jewelsProduct, setJewelProduct] = useState(null);

    useEffect(() => {
        if(cartLength.length >= cart.length) {
            setCart(cartLength)
        }
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("https://fakestoreapi.com/products/category/jewelery")
            const res = await data.json();
            setJewelProduct(res);
            dispatch(addJewelery(res));
            console.log(res);
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
                ) : <div className="loading"></div>}
            </div>
        </div>
    )
}

export default JewelShop;