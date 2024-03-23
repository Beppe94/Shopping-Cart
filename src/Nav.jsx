import { Link } from "react-router-dom";
import "/src/Styles/nav.css"

function NavBar() {

    return (
        <div className="navBar">
            <div>
                <h1>MyShop</h1>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="shop">Shop</Link>
                <Link to="cart">Cart</Link>
            </div>
        </div>
    )
}

export default NavBar;