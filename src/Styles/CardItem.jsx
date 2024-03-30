function CardItem({title, image, price}) {
    return (
        <div>
            <img src={image} />
            <div>
                <h2>{title}</h2>
                <p>{price}</p>
            </div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default CardItem;