import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Nav";
import { useEffect, useState } from "react";
import CardItem from "./CardItem";

function ShoppingCart() {

    const clothesIndex = useSelector((state) => state.womenClothes.value);
    const clothesArray = useSelector((state) => state.womenClothes.clotheObject);
    const dispatch = useDispatch();

    const [indexArray, setIndexArray] = useState(clothesIndex)


    return(
        <div>
            <NavBar />
            <div>
            {indexArray.map((index) => {
                const clothes = clothesArray[0].find((clothes) => clothes.id === index);

                return clothes ? (
                    <CardItem 
                    title={clothes.title}
                    image={clothes.image}
                    price={clothes.price}
                    />
                ) : null
            })}
            </div>
        </div>
    )
}

export default ShoppingCart;