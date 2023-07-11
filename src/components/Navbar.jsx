import { useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/auth.action";
import { site } from "./backend";
import axios from "axios";
import logs from "../img/Jyoti-logo-04.png";
import footerlogo from "../img/footer/JyotilogoFooter.png";
import { CartContext } from "../CartContext";

const Navbar = () => {
  const { cartCount, setCartCount } = useContext(CartContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuth, token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const role = localStorage.getItem("role");

  const handleTheLogout = () => {
    dispatch(logout());
  };

  const GoToCart = () => {
    if (isAuth) {
      return navigate("/cart");
    } else {
      return toast({
        title: "Required Login",
        position: "top",
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    }
  };
  const getCartNumberData = async () => {
    let token = localStorage.getItem("token");
    const res = await axios.get(`${site}/carts/carProductcount`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    setCartCount(res.data.count);
  };

  useEffect(() => {
    getCartNumberData();
  }, [data]);
  const handleTheAdmin = () => {
    console.log("welcome admin");
  };

  const getData = async (text) => {
    const res = await axios.get(`${site}/products/title?search=${text}`);
    const data = res.data;
    return data;
  };

  const handleTheEmpty = () => {
    setData([]);
  };
  const handleTheSearch = (e) => {
    setText(e.target.value);
    getData(text)
      .then((res) => setData(res))
      .catch((e) => console.log(e));
  };
  const handleTheKeyPress = (e) => {
    if (e.key == "Enter") {
      console.log("enter pressed");
    }
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header id="site-header" className="site-header">
        <div className="header-main has-center">
          <div className="header-container farmart-container">
            <div className="header-wrapper">
              <div className="header-items header-items--left">
                <div className="site-branding">
                  <a href="/" className="logo logo-svg">
                    <img
                      src={logs}
                      alt="Jyoti Gas Safety Device - Product"
                      className="logo-dark"
                      width="155"
                    />
                  </a>

                  <p className="site-title">
                    <a href rel="home">
                      Jyoti Gas Safety Device - Product
                    </a>
                  </p>
                </div>
              </div>

              <div className="header-items header-items--center">
                <div className="farmart-products-search search-products no-margin"></div>
              </div>

              <div className="header-items header-items--right">
                <div className="header-element header-element--account login">
                  <p
                    id="menu-item-5717"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5717"
                  >
                    {" "}
                    {isAuth && (
                      <Link to={"/user/Orders"}>
                        <a style={{ color: "#fff", fontSize: "18px" }}>
                          Order History
                        </a>
                      </Link>
                    )}{" "}
                  </p>
                </div>
                <div className="header-element header-element--wishlist">
                  <p
                    id="menu-item-5717"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5717"
                  >
                    <Link to={"/login"}>
                      {!isAuth && (
                        <a style={{ color: "#fff", fontSize: "18px" }}>Login</a>
                      )}
                    </Link>
                    {isAuth && (
                      <a
                        style={{ color: "#fff", fontSize: "18px" }}
                        onClick={handleTheLogout}
                      >
                        Logout
                      </a>
                    )}
                  </p>
                </div>
                <div className="header-element header-element--wishlist">
                  <p
                    id="menu-item-5717"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5717"
                  >
                    <Link to={"/admin"}>
                      {role == "Admin" && (
                        <a
                          style={{ color: "#fff", fontSize: "18px" }}
                          onClick={handleTheAdmin}
                        >
                          Admin
                        </a>
                      )}
                    </Link>

                    {role == "User" && (
                      <a style={{ color: "#fff", fontSize: "18px" }}>User</a>
                    )}

                    <Link to={"/signin"}>
                      {!role && (
                        <a style={{ color: "#fff", fontSize: "18px" }}>
                          Register
                        </a>
                      )}
                    </Link>
                  </p>
                </div>
                <div
                  onClick={GoToCart}
                  className="header-element header-element--cart"
                  style={{ marginRight:"15px"}}
                >
                  <a
                    onClick={GoToCart}
                    className="cart-contents"
                    href="#"
                    data-toggle="link"
                    data-target="cart-panel"
                  >
                    <span className="cart-content">
                      <span className="cart-icon">
                        <span className="mini-item-counter fm-mini-cart-counter">
                          {cartCount}
                        </span>
                        <span className="farmart-svg-icon">
                          <svg
                            aria-hidden="true"
                            role="img"
                            focusable="false"
                            viewBox="0 0 1024 1024"
                          >
                            <path d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4 102.4 45.936 102.4 102.4-45.936 102.4-102.4 102.4zM409.6 870.4c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"></path>
                            <path d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4 102.4 45.936 102.4 102.4-45.936 102.4-102.4 102.4zM768 870.4c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"></path>
                            <path d="M898.021 228.688c-12.859-15.181-32.258-23.888-53.221-23.888h-626.846l-5.085-30.506c-6.72-40.315-43.998-71.894-84.869-71.894h-51.2c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6h51.2c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395c6.718 40.314 43.997 71.893 84.867 71.893h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zM862.331 276.694l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"></path>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </a>
                  <span className="dropdown"></span>
                </div>
                <div
                  style={{ borderLeft: " 1px solid white" }}
                  className="header-element header-element--header-bar"
                >
                  <div className="header-bar__box-content">
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: "bold",
                        paddingLeft: "20px",
                        border: "10px",
                        borderColor: "white",
                      }}
                    >
                      Contact Us:{" "}
                    </p>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      8007800010
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-mobile">
          <div className="header-items-mobile header-items-mobile--left">
            <div className="fm-menu-mobile farmart-menu-mobile">
              <div className="menu-box-title">
                <div className="fm-icon menu-icon menu-icon-js">
                  <span className="farmart-svg-icon">
                    <svg
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        className="path1"
                        d="M896 307.2h-768c-14.138 0-25.6-11.462-25.6-25.6s11.462-25.6 25.6-25.6h768c14.139 0 25.6 11.462 25.6 25.6s-11.461 25.6-25.6 25.6z"
                      ></path>
                      <path
                        className="path2"
                        d="M896 563.2h-768c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h768c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z"
                      ></path>
                      <path
                        className="path3"
                        d="M896 819.2h-768c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h768c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="menu-mobile-wrapper">
                <div className="primary-menu-mobile">
                  <div className="menu-box">
                    <div className="top-content">
                      <span className="farmart-svg-icon go-back close-canvas-mobile-panel">
                        <svg
                          aria-hidden="true"
                          role="img"
                          focusable="false"
                          viewBox="0 0 32 32"
                        >
                          <path d="M1.034 16.234l9.6-9.6c0.312-0.312 0.819-0.312 1.131 0s0.312 0.819 0 1.131l-8.234 8.234h26.069c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8h-26.069l8.234 8.234c0.312 0.312 0.312 0.819 0 1.131-0.156 0.156-0.361 0.234-0.566 0.234s-0.409-0.078-0.566-0.234l-9.6-9.6c-0.312-0.312-0.312-0.819 0-1.131z"></path>
                        </svg>
                      </span>
                      <div className="author">
                        <a id href="/login">
                          <span className="farmart-svg-icon">
                            <svg
                              aria-hidden="true"
                              role="img"
                              focusable="false"
                              viewBox="0 0 1024 1024"
                            >
                              <path d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z"></path>
                              <path d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z"></path>
                            </svg>
                          </span>
                          <span className="header-account--text">
                            <span></span>
                            {!isAuth && <Link to={"/signin"}>Register</Link>}
                            {/* {isAuth && <Link to={"/signin"}>Register</Link>} */}
                          </span>
                        </a>
                      </div>
                    </div>
                    <nav className="menu-content">
                      <ul
                        id="menu-primary-menu-1"
                        className="fm-nav-mobile-menu menu"
                      >
                        <li
                          id="menu-item-5716"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5716"
                        >
                          <a href="/">Home</a>
                        </li>
                        <li
                          id="menu-item-5717"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5717"
                        >
                          <Link to={"/admin"}>
                            {role == "Admin" && (
                              <a onClick={handleTheAdmin}>Admin</a>
                            )}
                          </Link>

                          {role == "User" && <a>User</a>}

                          <Link to={"/signin"}>{!role && <a>Register</a>}</Link>
                        </li>
                        <li
                          id="menu-item-5717"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5717"
                        >
                          {isAuth && (
                            <Link to={"/user/Orders"}>Order History</Link>
                          )}
                        </li>
                        <li
                          onClick={GoToCart}
                          id="menu-item-5717"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5717"
                        >
                          {isAuth && (
                            <span className="cart-icon">
                              <span className="mini-item-counter fm-mini-cart-counter">
                                {cartCount}
                              </span>
                              <span className="farmart-svg-icon">
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  focusable="false"
                                  viewBox="0 0 1024 1024"
                                >
                                  <path d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4 102.4 45.936 102.4 102.4-45.936 102.4-102.4 102.4zM409.6 870.4c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"></path>
                                  <path d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4 102.4 45.936 102.4 102.4-45.936 102.4-102.4 102.4zM768 870.4c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"></path>
                                  <path d="M898.021 228.688c-12.859-15.181-32.258-23.888-53.221-23.888h-626.846l-5.085-30.506c-6.72-40.315-43.998-71.894-84.869-71.894h-51.2c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6h51.2c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395c6.718 40.314 43.997 71.893 84.867 71.893h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zM862.331 276.694l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"></path>
                                </svg>
                              </span>
                            </span>
                          )}
                        </li>

                        <li
                          id="menu-item-5717"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5717"
                        >
                          <Link to={"/login"}>{!isAuth && <a>Login</a>}</Link>
                          {isAuth && <a onClick={handleTheLogout}>Logout</a>}
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="fm-off-canvas-layer"></div>
            </div>
          </div>
          <div className="header-items-mobile header-items-mobile--center">
            <div className="site-branding">
              <a href="/" className="logo logo-svg">
                <img src={footerlogo} alt="Jyoti Gas Safety Device - Product" />
              </a>

              <p className="site-title">
                <a href rel="home">
                  Jyoti Gas Safety Device - Product
                </a>
              </p>
            </div>
          </div>
          <div className="header-items-mobile header-items-mobile--right">
            <div className="fm-search-form fm-search-form--mobile fm-search-form--mobile-right search-panel">
              <a href="#" className="open-search-panel">
                <span className="farmart-svg-icon">
                  <svg
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    viewBox="0 0 32 32"
                  >
                    <path d="M30.19 30.659l-9.509-10.374c2.143-2.242 3.32-5.173 3.32-8.286 0-3.205-1.248-6.219-3.515-8.485s-5.28-3.515-8.485-3.515-6.219 1.248-8.485 3.515-3.515 5.28-3.515 8.485 1.248 6.219 3.515 8.485 5.28 3.515 8.485 3.515c2.761 0 5.38-0.927 7.501-2.633l9.509 10.373c0.158 0.172 0.374 0.259 0.59 0.259 0.193 0 0.387-0.070 0.54-0.21 0.326-0.299 0.348-0.805 0.049-1.13zM1.6 12c0-5.735 4.665-10.4 10.4-10.4s10.4 4.665 10.4 10.4-4.665 10.4-10.4 10.4-10.4-4.665-10.4-10.4z"></path>
                  </svg>
                </span>
              </a>

              <div className="search-panel-content">
                <div className="top-content">
                  <form
                    method="get"
                    className="form-search"
                    action="https://drfurithemes.com/farmart2/"
                  >
                    <div className="search-inner-content">
                      <div className="text-search">
                        <div className="search-wrapper">
                          <input
                            type="text"
                            name="s"
                            className="search-field"
                            autocomplete="off"
                            placeholder="I’m searching for..."
                          />
                          <input
                            type="hidden"
                            name="post_type"
                            value="product"
                          />
                          <a href="#" className="close-search-results">
                            <span className="farmart-svg-icon">
                              <svg
                                aria-hidden="true"
                                role="img"
                                focusable="false"
                                viewBox="0 0 32 32"
                              >
                                <path d="M28 32h-25.6c-1.323 0-2.4-1.077-2.4-2.4v-25.6c0-1.323 1.077-2.4 2.4-2.4h25.6c1.323 0 2.4 1.077 2.4 2.4v25.6c0 1.323-1.077 2.4-2.4 2.4zM2.4 3.2c-0.441 0-0.8 0.359-0.8 0.8v25.6c0 0.441 0.359 0.8 0.8 0.8h25.6c0.441 0 0.8-0.359 0.8-0.8v-25.6c0-0.441-0.359-0.8-0.8-0.8h-25.6zM22.931 22.602l-6.527-5.802 6.527-5.802c0.33-0.294 0.36-0.799 0.066-1.129s-0.799-0.36-1.129-0.066l-6.668 5.928-6.668-5.928c-0.33-0.293-0.836-0.264-1.129 0.066s-0.264 0.836 0.066 1.129l6.527 5.802-6.527 5.802c-0.33 0.294-0.36 0.799-0.066 1.129 0.158 0.178 0.378 0.268 0.598 0.268 0.189 0 0.379-0.067 0.531-0.202l6.669-5.928 6.668 5.928c0.152 0.135 0.342 0.202 0.531 0.202 0.221 0 0.44-0.091 0.598-0.268 0.294-0.33 0.264-0.836-0.066-1.129z"></path>
                              </svg>
                            </span>
                          </a>
                          <button type="submit">
                            <span className="farmart-svg-icon">
                              <svg
                                aria-hidden="true"
                                role="img"
                                focusable="false"
                                viewBox="0 0 32 32"
                              >
                                <path d="M30.19 30.659l-9.509-10.374c2.143-2.242 3.32-5.173 3.32-8.286 0-3.205-1.248-6.219-3.515-8.485s-5.28-3.515-8.485-3.515-6.219 1.248-8.485 3.515-3.515 5.28-3.515 8.485 1.248 6.219 3.515 8.485 5.28 3.515 8.485 3.515c2.761 0 5.38-0.927 7.501-2.633l9.509 10.373c0.158 0.172 0.374 0.259 0.59 0.259 0.193 0 0.387-0.070 0.54-0.21 0.326-0.299 0.348-0.805 0.049-1.13zM1.6 12c0-5.735 4.665-10.4 10.4-10.4s10.4 4.665 10.4 10.4-4.665 10.4-10.4 10.4-10.4-4.665-10.4-10.4z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <a href="#" className="close-search-panel">
                          Cancel
                        </a>
                      </div>
                      <div className="box-search-results">
                        <div className="field-notice">
                          <span className="count-results"></span>Search results
                        </div>
                        <div className="search-results woocommerce"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="fm-off-canvas-layer"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
