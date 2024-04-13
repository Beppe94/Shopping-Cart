import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Nav";
import { useEffect, useState } from "react";
import CartProducts from "./cartProducts";

function ShoppingCart() {

    const clothesIndex = useSelector((state) => state.shop.value);
    const clothesArray = useSelector((state) => state.shop.clotheObject);
    const cartProducts = useSelector((state) => state.shop.cartProducts)
    const dispatch = useDispatch();

    const [indexArray, setIndexArray] = useState(clothesIndex)

    useEffect(() => {
        console.log(clothesArray);
    })

    return(
        <div>
            <NavBar cart={cartProducts.length}/>
            <div>
            {indexArray.map((index) => {
                const clothes = clothesArray[0].find((clothes) => clothes.id === index);

                return clothes ? (
                    <CartProducts 
                    title={clothes.title}
                    image={clothes.image}
                    price={clothes.price}
                    />
                ) : null
            })}
            </div>
        </div>
    )
}

export default ShoppingCart;