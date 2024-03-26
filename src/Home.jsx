import groupShopping from "./Images/GroupShopping.webp"
import ClothesF from "./Images/ClothesF.webp"
import ClothesM from "./Images/ClothesM.webp"
import Jewelery from "./Images/Jewelery.webp"
import { Link } from "react-router-dom"
import "/src/Styles/home.css"

function Home() {
    return(
        <div className="main">
            <div className="groupShop grid">
                <div>
                    <img src={groupShopping} alt="Group of people with shopping bags"/>
                </div>
                <div>
                    <h2>Browse our collection of clothes and accessories</h2>
                </div>
            </div>
            <div className="womenShop grid">
                <div>
                    <h2>Check out the latest collection for women</h2>
                    <Link to="womenShop">
                        <button>Women's Clothes</button>
                    </Link>
                </div>
                <div>
                    <img src={ClothesF} alt="Woman shopping for clothes" />
                </div>
            </div>
            <div className="menShop grid">
                <div>
                    <img src={ClothesM} alt="Man shopping for clothes" />
                </div>
                <div>
                    <h2>Check out the latest collection for men</h2>
                    <Link to="menShop">
                        <button>Men's Clothes</button>
                    </Link>
                </div>
            </div>
            <div className="accessoriesShop grid">
                <div>
                    <h3>Designed just for you</h3>
                    <h2>Browse our collection of timeless jewels</h2>
                    <p>Indulge in timeless elegance with our exquisite jewelry collection, curated to adorn you with sophistication and style.</p>
                    <Link to="jewelery">
                        <button>Jewels Shop</button>
                    </Link>
                </div>
                <div>
                    <img src={Jewelery} alt="Various jewels" />
                </div>
            </div>
        </div>
    )
}

export default Home;