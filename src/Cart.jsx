import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Nav";
import { useEffect, useState } from "react";
import CartProducts from "./cartProducts";
import "/src/Styles/cart.css"
import { removeCartProducts, decreaseProductQuantity, changeProductQuantity, removeProductQuantity } from "./prouctSlice";

function ShoppingCart() {

    const clothesIndex = useSelector((state) => state.clothesIndexReducer.value);
    const productsArray = useSelector((state) => state.womenClothesReducer.productObject);
    const cartLength = useSelector((state) => state.cartProductsReducer.cartProducts);
    const itemAmount = useSelector((state) => state.amountOfItemsReducer.quantity);
    const dispatch = useDispatch();

    const [indexArray, setIndexArray] = useState(clothesIndex);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [itemAmountState, setItemAmountState] = useState(itemAmount)

    function removeItem(index) {
        const newIndexArray = indexArray.filter(element => element !== index);
        const newCart = cart.filter(element => element !== index);

        setIndexArray(newIndexArray);
        setCart(newCart);
        dispatch(removeCartProducts(index));
        dispatch(removeProductQuantity(index));
    }

    useEffect(() => {
        setCart(cartLength);
    },[cartLength])

    function reduceQuantity(e) {
        const productTarget = e.target.closest(".cartCard");
        const productIndex = Number(productTarget.dataset.key);

        const newItemAmount = itemAmountState.map(item => {
            if(item.index === productIndex && item.quantity > 1) {
                return {...item, quantity: item.quantity -1}
            } else if(item.index === productIndex && item.quantity === 1) {
                removeItem(productIndex)
            }
            return item;
        })

        setItemAmountState(newItemAmount);
        dispatch(decreaseProductQuantity(productIndex))
    }

    function increaseQuantity(e) {
        const productTarget = e.target.closest(".cartCard");
        const productIndex = Number(productTarget.dataset.key);

        const newItemAmount = itemAmountState.map(item => {
            if(item.index === productIndex) {
                return {...item, quantity: item.quantity +1}
            }
            return item;
        })
        
        setItemAmountState(newItemAmount)
        dispatch(changeProductQuantity(productIndex))
    }

    useEffect(() => {
        let totalPrice = 0;

        itemAmount.forEach((item) => {
            const women = productsArray.womenClothes.map(clothes => clothes.find(element => element.id === item.index))[0];
            const men = productsArray.menClothes.map(clothes => clothes.find(element => element.id === item.index))[0];
            const jewelery = productsArray.jewelery.map(jewels => jewels.find(element => element.id === item.index))[0];
            const electronics = productsArray.techs.map(tech => tech.find(element => element.id === item.index))[0];
            
            if(women) {
                totalPrice += women.price * item.quantity;
            } else if(men) {
                totalPrice += men.price * item.quantity;
            } else if(jewelery) {
                totalPrice += jewelery.price * item.quantity;
            } else if(electronics) {
                totalPrice += electronics.price * item.quantity;
            }
        })

        setTotal(totalPrice);
    }, [itemAmount])

    return(
        <div className="cartComponent">
            <div className="navSection">
                <NavBar cart={cart.length}/>
            </div>
            <div className="cartTotal">
                <h2>Total: {total.toFixed(2)}€</h2>
            </div>
            <div className="cardContainer">
                {indexArray.length > 0 ? (
                    indexArray.map((index) => {
                    const women = productsArray.womenClothes.map(clothes => clothes.find(element => element.id === index));
                    const men = productsArray.menClothes.map(clothes => clothes.find(element => element.id === index));
                    const jewelery = productsArray.jewelery.map(jewels => jewels.find(element => element.id === index));
                    const electronics = productsArray.techs.map(tech => tech.find(element => element.id === index));
                    
                    const productAmount = itemAmountState.find(item => item.index === index);
                    
                    if(women || men || jewelery || electronics) {
                        const object = women[0] || men[0] || jewelery[0] || electronics[0]; 

                        return (
                            <CartProducts
                            index={object.id}
                            title={object.title}
                            price={(object.price * productAmount.quantity).toFixed(2)}
                            image={object.image}
                            handleRemove={removeItem}
                            reduceQuantity={reduceQuantity}
                            increaseQuantity={increaseQuantity}
                            quantity={productAmount.quantity}
                            />
                        )
                    }
                })) : (
                    <div className="emptyCart">
                        <h1>The cart is empty!</h1>
                        <h3>Choose something from our shop</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ShoppingCart;