import { Link, useSearchParams } from "react-router-dom";
import "/src/Styles/nav.css"
import ShoppingCart from "./Images/ShoppingCart.svg"
import Shop from "./Images/Shop.svg"
import Home from "./Images/Home.svg"
import ArrowDown from "./Images/ArrowDown.svg"
import ArrowUp from "./Images/ArrowUp.svg"
import { useState } from "react";

function NavBar() {
    const [dropDown, setDropDown] = useState(false)


    return (
        <div className="navBar">
            <div>
                <h1>My E-Shop</h1>
            </div>
            <div className="links">
                <div className="homeLink align">
                    <Link to="/">Home</Link>
                    <img src={Home} alt="Home icon" />
                </div>
                <div className="dropDownContainer" onClick={() => setDropDown((prev) => !prev)}>
                    <div className="shopButton">
                        <button className="align">
                            <img src={dropDown ? ArrowUp : ArrowDown} alt="Arrow icon" />
                            Shop
                            <img src={Shop} alt="Shopping Cart icon" />
                        </button>
                    </div>
                    {
                        dropDown && (
                            <div className="dropDown">
                                <ul>
                                    <li>
                                        <Link to="womenShop">
                                            <button>Women's Clothes</button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="menShop">
                                            <button>Men's Clothes</button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="jewelery">
                                            <button>Jewelery</button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="techShop">
                                            <button>Tech Shop</button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            
                <div className=" align">
                    <Link to="cart">Cart</Link>
                    <div className="cartItems">
                        <img src={ShoppingCart} alt="Shopping Cart icon" />
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;