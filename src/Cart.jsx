import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Nav";
import { useEffect, useState } from "react";
import CartProducts from "./cartProducts";
import "/src/Styles/cart.css"
import { removeCartProducts, amountOfItems } from "./prouctSlice";

function ShoppingCart() {

    const clothesIndex = useSelector((state) => state.clothesIndexReducer.value);
    const productsArray = useSelector((state) => state.womenClothesReducer.productObject);
    const cartLength = useSelector((state) => state.cartProductsReducer.cartProducts);
    const dispatch = useDispatch();

    const [indexArray, setIndexArray] = useState(clothesIndex);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    
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

    function getkey(e) {
        const target = e.target.closest(".productInCart");
        const index = target.dataset.key;
        console.log(target.dataset.key);
    }

    useEffect(() => {
        const object = document.querySelectorAll(".productInCart");
        let amountArray = [];

        for(let i = 0; i < object.length; i++) {
            const price = object[i].childNodes[1].childNodes[1].textContent.split("€")[0];
            const amount = object[i].childNodes[1].childNodes[2].childNodes[1].textContent.split("Quantity: ")[1];
            amountArray.push({price, amount})
            
            console.log(amountArray);
        }

        const totalPrice = amountArray.reduce((a,b) => {
            const subTotal = parseFloat(b.price) * b.amount

            console.log(a + subTotal);
            return a + subTotal
        }, 0)

        setTotal(totalPrice)
    })

    return(
        <div className="cartComponent">
            <div className="navSection">
                <NavBar cart={cart.length}/>
            </div>
            <div>
                <h2>Total: {total}</h2>
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
                            getKey={getkey}
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