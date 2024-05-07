import "/src/Styles/productInCart.css"
import add from "./Images/add.svg"
import remove from "./Images/remove.svg"

function CartProducts({
    title, 
    price, 
    image, 
    index, 
    handleRemove, 
    reduceQuantity,
    increaseQuantity,
    quantity}) {


    return (
        <div className="productInCart" data-key={index}>
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
                        <h2 id="quantity">Quantity: {quantity}</h2>
                    <div className="selectBtn">
                        <button onClick={(e) => reduceQuantity(e)}><img src={remove} alt="" /></button>
                        <button onClick={(e) => increaseQuantity(e)}> <img src={add} alt="" /></button>
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