import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Nav";
import { useEffect, useState } from "react";
import CartProducts from "./cartProducts";
import "/src/Styles/cart.css"

function ShoppingCart() {

    const clothesIndex = useSelector((state) => state.shop.value);
    const clothesArray = useSelector((state) => state.shop.productObject);
    const cartProducts = useSelector((state) => state.shop.cartProducts)
    const dispatch = useDispatch();

    const [indexArray, setIndexArray] = useState(clothesIndex)

    useEffect(() => {
       
    })

    return(
        <div className="cartComponent">
            <div className="navSection">
                <NavBar cart={cartProducts.length}/>
            </div>
            <div className="cardContainer">
                {indexArray.length > 0 ? (
                    indexArray.map((index) => {
                    const women = clothesArray.womenClothes.map(clothes => clothes.find(element => element.id === index));
                    const men = clothesArray.menClothes.map(clothes => clothes.find(element => element.id === index));
                    
                    if(women || men) {
                        const clothes = women[0] || men[0]; 

                        return (
                            <CartProducts
                            title={clothes.title}
                            price={clothes.price}
                            image={clothes.image}
                            />
                        )
                    }
                })) : (
                    <div>
                        <h1>The cart is empty!</h1>
                        <h3>Choose something from our shop</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ShoppingCart;