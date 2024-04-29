import "/src/Styles/productInCart.css"
import add from "./Images/add.svg"
import remove from "./Images/remove.svg"

function CartProducts({title, price, image, index, handleRemove, quantity}) {
    return (
        <div className="productInCart" data-key="lol">
            <div>
                <img src={image} />
            </div>
            <div className="productInfos">
                <div className="productTitle">
                    <h2>{title}</h2>
                </div>
                <div className="productPrice">
                    <p>{price}€</p>
                </div>
                <div className="productButtons">
                        <h3>Select Amount</h3>
                        <h2>Quantity: {quantity}</h2>
                    <div className="selectBtn">
                        <button><img src={remove} alt="" /></button>
                        <button> <img src={add} alt="" /></button>
                    </div>
                    <button className="removeBtn"
                    onClick={() => handleRemove(index)}
                    >Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartProducts;