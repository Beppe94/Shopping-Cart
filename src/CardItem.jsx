import "/src/Styles/CardItem.css"

function CardItem({title, image, price, index, handleClick}) {

    return (
        <div className="card">
            <div>
                <img src={image} />
            </div>
            <div className="cardInfo">
                <h2>{title}</h2>
                <p>{price}€</p>
                <div>
                    <button onClick={() => handleClick(index)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardItem;