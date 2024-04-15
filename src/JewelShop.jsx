import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Nav";
import { useEffect, useState } from "react";
import { addJewelery } from "./prouctSlice";

function JewelShop() {

    const cartLength = useSelector((state) => state.shop.cartProducts);
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

    return (
        <div>
            <div>
                <NavBar cart={cart.length}/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default JewelShop;