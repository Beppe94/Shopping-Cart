import groupShopping from "./Images/GroupShopping.webp"
import ClothesF from "./Images/ClothesF.webp"
import ClothesM from "./Images/ClothesM.webp"
import Jewelery from "./Images/Jewelery.webp"
import Electronics from "./Images/Electronics.webp"
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
                    <h3>Stylish and sophisticated outfit</h3>
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
                    <h3>Quality and fashion</h3>
                    <h2>Explore the latest collection for men</h2>
                    <p>Discover sophistication and style in every stitch with our curated collection of men's apparel</p>
                    <Link to="menShop">
                        <button>Men's Clothes</button>
                    </Link>
                </div>
            </div>
            <div className="accessoriesShop grid">
                <div>
                    <h3>Elegance and luxury made for you</h3>
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
            <div className="techShop grid">
                <div>
                    <img src={Electronics} alt="Various electronics" />
                </div>
                <div>
                    <h3>High end tech gear</h3>
                    <h2>Dive into the future of tech</h2>
                    <p>Inovation and cutting-edge tech for your gaming sessions</p>
                    <Link to="techShop">
                        <button>Tech Shop</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;