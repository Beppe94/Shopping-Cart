import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Nav";
import { useEffect, useState } from "react";
import CartProducts from "./cartProducts";
import "/src/Styles/cart.css"
import { removeCartProducts } from "./prouctSlice";

function ShoppingCart() {

    const clothesIndex = useSelector((state) => state.clothesIndexReducer.value);
    const productsArray = useSelector((state) => state.womenClothesReducer.productObject);
    const cartLength = useSelector((state) => state.cartProductsReducer.cartProducts);
    const dispatch = useDispatch();

    const [indexArray, setIndexArray] = useState(clothesIndex);
    const [cart, setCart] = useState([]);
 
    function removeItem(index) {
        const newIndexArray = indexArray.filter(element => element !== index);
        const newCart = cart.filter(element => element !== index);

        setIndexArray(newIndexArray);
        setCart(newCart);
        dispatch(removeCartProducts(index));
    }

    useEffect(() => {
        setCart(cartLength);
    })

    return(
        <div className="cartComponent">
            <div className="navSection">
                <NavBar cart={cart.length}/>
            </div>
            <div>
                <h2>Total: </h2>
            </div>
            <div className="cardContainer">
                {indexArray.length > 0 ? (
                    indexArray.map((index) => {
                    const women = productsArray.womenClothes.map(clothes => clothes.find(element => element.id === index));
                    const men = productsArray.menClothes.map(clothes => clothes.find(element => element.id === index));
                    const jewelery = productsArray.jewelery.map(jewels => jewels.find(element => element.id === index));
                    const electronics = productsArray.techs.map(tech => tech.find(element => element.id === index));

                    if(women || men || jewelery || electronics) {
                        const object = women[0] || men[0] || jewelery[0] || electronics[0]; 

                        return (
                            <CartProducts
                            index={object.id}
                            title={object.title}
                            price={object.price}
                            image={object.image}
                            handleRemove={removeItem}
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