import "/src/Styles/CardItem.css"

function CardItem({title, image, price, handleClickF, count, rated, index}) {

    return (
        <div className="card">
            <div>
                <img src={image} />
            </div>
            <div className="cardInfo">
                <h2>{title}</h2>
                <div>
                    <p>{count} Reviews {rated}</p>
                </div>
                <div className="cardButton">
                    <h3>{price}€</h3>
                    <button onClick={() => handleClickF(index)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardItem;