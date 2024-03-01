import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/freshcart-logo.svg";
import { AuthenticationContext } from "../../Context/Authentication/Authentication";
import { cartContext } from "../../Context/Cart/Cart";
import { wishlistContext } from "../../Context/Wishlist/Wishlist";

const Navbar = () => {
  let { token, setToken } = useContext(AuthenticationContext);
  let { wishlistCounter } = useContext(wishlistContext);

  let navigate = useNavigate();

  let { numOfItems } = useContext(cartContext);

  function logout() {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <nav className="nav navbar navbar-expand-lg shadow-sm py-3">
      <div className="container">
        <Link to="/">
        <img src={logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category">
                    Category
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/brand">
                    Brand
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/allorders">
                    All orders
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {token ? (
              <>
                <li className="nav-item d-flex align-items-center position-relative me-3">
                  <Link className="nav-link" aria-current="page" to="/wishlist">
                    Wishlist
                    <i className="fa-solid fa-heart ms-1"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {wishlistCounter}
                    </span>
                  </Link>
                </li>

                <li className="nav-item d-flex align-items-center position-relative me-3">
                  <Link className="nav-link" aria-current="page" to="/cart">
                    Cart
                    <i className="fa-solid fa-cart-shopping ms-1"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {numOfItems}
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <span
                    onClick={logout}
                    style={{ cursor: "pointer" }}
                    className="nav-link"
                  >
                    Logout
                  </span>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
