import groupShopping from "./Images/GroupShopping.jpg"
import ClothesF from "./Images/ClothesF.jpg"
import ClothesM from "./Images/ClothesM.jpg"
import { Link } from "react-router-dom"
import "/src/Styles/home.css"

function Home() {
    return(
        <div className="main">
            <div className="groupShop">
                <div>
                    <img src={groupShopping} alt="Group of people with shopping bags"/>
                </div>
                <div>
                    <h2>Browse our collection of clothes and accessories</h2>
                </div>
            </div>
            <div className="womenShop">
                <div>
                    <h2>Check out the latest collection for women</h2>
                    <Link to="womenShop">
                        <button>Shop</button>
                    </Link>
                </div>
                <div>
                    <img src={ClothesF} alt="Woman shopping for clothes" />
                </div>
            </div>
            <div className="womenShop">
                <div>
                    <img src={ClothesM} alt="Man shopping for clothes" />
                </div>
                <div>
                    <h2>Check out the latest collection for men</h2>
                    <Link to="menShop">
                        <button>Shop</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;