import "/src/Styles/productInCart.css"


function CartProducts({title, price, image, index, handleRemove}) {
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
                    <div className="selectBtn">
                        <button>+</button>
                        <input type="text" />
                        <button>-</button>
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