import "/src/Styles/CardItem.css"

function CardItem({title, image, price, handleClick, count, rated, index}) {

    return (
        <div className="card">
            <div>
                <img src={image} />
            </div>
            <div className="cardInfo">
                <h2>{title}</h2>
                <div className="ratings">
                    <p>{count}</p> 
                    <p>Reviews</p>
                    <p>{rated}</p>
                </div>
                <div className="cardButton">
                    <h3>{price}€</h3>
                    <button onClick={() => handleClick(index)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardItem;