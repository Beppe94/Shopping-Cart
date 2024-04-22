import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTech } from "./prouctSlice";
import NavBar from "./Nav";
import CardItem from "./CardItem";

function TechShop() {

    const cartLenght = useSelector((state) => state.cartProductsReducer.cartProducts);

    const dispatch = useDispatch();

    const [techOject, setTechObject] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("https://fakestoreapi.com/products/category/electronics");
            const res = await data.json();
            setTechObject(res);
            dispatch(addTech(res));
            console.log(res);
        }

        fetchData();
    }, [])

    useEffect(() => {
        if(cartLenght.length >= cart.length) {
            setCart(cartLenght);
        }
    })
    
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
                ) : <div className="loading"></div>}
            </div>
        </div>
    )
}

export default TechShop;