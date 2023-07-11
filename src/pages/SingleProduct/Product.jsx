import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { site } from "../../components/backend";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import imgone from "./20230623_162657.jpg";
import imgtwo from "./20230623_162715.jpg";
import imgthree from "./20230623_162733.jpg";
import imgfour from "./20230623_162743.jpg";
import homeone from "../../img/homepage-new-image-box-img-1.png";
import hometwo from "../../img/homepage-new-image-box-img-2.png";
import homethree from "../../img/homepage-new-image-box-img-3.png";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";

const postCart = async (data) => {
  let toki = localStorage.getItem("token");

  const res = await axios.post(`${site}/carts`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
};
const Product = () => {
  const [data, setData] = useState([]);
  const { setCartCount } = useContext(CartContext);
  const { isAuth, token } = useSelector((store) => store.auth);
  const toast = useToast();

  const handleTheCart = (data) => {
    if (isAuth == false) {
      toast({
        position: "top",
        title: `Login to add the product in cart`,
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
      window.location = "/signin";

    } else {
      postCart(data);
      toast({
        position: "top",
        title: `Product is add in your cart`,
        status: "success",
        duration: 1500,
        isClosable: true,
      });
      setCartCount(previousCount => previousCount + 1);

    }
  };
  const handleTheBuyNow = (data) => {
    if (isAuth == false) {
      toast({
        position: "top",
        title: `Login to add the product in cart`,
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
      window.location = "/signin";
    } else {
      postCart(data);

      window.location = "/cart";
      toast({
        position: "top",
        title: `Prossed to Buy`,
        status: "success",
        duration: 1500,
        isClosable: true,
      });
      setCartCount(previousCount => previousCount + 1);

    }
  };
  const getData = async (id) => {
    const res = await axios.get(`${site}/products/64a41a8380d954c30e40cbaf`);
    const data = res.data;
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="product-template-default single single-product postid-2312 wp-embed-responsive theme-farmart woocommerce woocommerce-page woocommerce-no-js header-v1 full-content fm-preloader fm-show-qty woocommerce-active fm-product-layout-4 fm-product-full-width farmart-not-login elementor-default elementor-kit-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-dark-grayscale">
              <fecolormatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <fecomponenttransfer color-interpolation-filters="sRGB">
                <fefuncr type="table" tableValues="0 0.49803921568627" />
                <fefuncg type="table" tableValues="0 0.49803921568627" />
                <fefuncb type="table" tableValues="0 0.49803921568627" />
                <fefunca type="table" tableValues="1 1" />
              </fecomponenttransfer>
              <fecomposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-grayscale">
              <fecolormatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <fecomponenttransfer color-interpolation-filters="sRGB">
                <fefuncr type="table" tableValues="0 1" />
                <fefuncg type="table" tableValues="0 1" />
                <fefuncb type="table" tableValues="0 1" />
                <fefunca type="table" tableValues="1 1" />
              </fecomponenttransfer>
              <fecomposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-purple-yellow">
              <fecolormatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <fecomponenttransfer color-interpolation-filters="sRGB">
                <fefuncr
                  type="table"
                  tableValues="0.54901960784314 0.98823529411765"
                />
                <fefuncg type="table" tableValues="0 1" />
                <fefuncb
                  type="table"
                  tableValues="0.71764705882353 0.25490196078431"
                />
                <fefunca type="table" tableValues="1 1" />
              </fecomponenttransfer>
              <fecomposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-blue-red">
              <fecolormatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <fecomponenttransfer color-interpolation-filters="sRGB">
                <fefuncr type="table" tableValues="0 1" />
                <fefuncg type="table" tableValues="0 0.27843137254902" />
                <fefuncb
                  type="table"
                  tableValues="0.5921568627451 0.27843137254902"
                />
                <fefunca type="table" tableValues="1 1" />
              </fecomponenttransfer>
              <fecomposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-midnight">
              <fecolormatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <fecomponenttransfer color-interpolation-filters="sRGB">
                <fefuncr type="table" tableValues="0 0" />
                <fefuncg type="table" tableValues="0 0.64705882352941" />
                <fefuncb type="table" tableValues="0 1" />
                <fefunca type="table" tableValues="1 1" />
              </fecomponenttransfer>
              <fecomposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-magenta-yellow">
              <fecolormatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <fecomponenttransfer color-interpolation-filters="sRGB">
                <fefuncr type="table" tableValues="0.78039215686275 1" />
                <fefuncg type="table" tableValues="0 0.94901960784314" />
                <fefuncb
                  type="table"
                  tableValues="0.35294117647059 0.47058823529412"
                />
                <fefunca type="table" tableValues="1 1" />
              </fecomponenttransfer>
              <fecomposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-purple-green">
              <fecolormatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <fecomponenttransfer color-interpolation-filters="sRGB">
                <fefuncr
                  type="table"
                  tableValues="0.65098039215686 0.40392156862745"
                />
                <fefuncg type="table" tableValues="0 1" />
                <fefuncb type="table" tableValues="0.44705882352941 0.4" />
                <fefunca type="table" tableValues="1 1" />
              </fecomponenttransfer>
              <fecomposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-blue-orange">
              <fecolormatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <fecomponenttransfer color-interpolation-filters="sRGB">
                <fefuncr type="table" tableValues="0.098039215686275 1" />
                <fefuncg type="table" tableValues="0 0.66274509803922" />
                <fefuncb
                  type="table"
                  tableValues="0.84705882352941 0.41960784313725"
                />
                <fefunca type="table" tableValues="1 1" />
              </fecomponenttransfer>
              <fecomposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <div id="page" className="site">
          <div id="content" className="site-content">
            <div className="container-fluid">
              <div className="row">
                <div id="primary" className="content-area col-md-12">
                  <main id="main" className="site-main">
                    <div className="woocommerce-notices-wrapper"></div>
                    <div
                      id="product-2312"
                      className="product type-product post-2312 status-publish first instock product_cat-bottle product_cat-carlsberg product_cat-fruit-purees product_cat-heineken product_cat-water product_cat-wines-alcohol-drinks has-post-thumbnail sale featured shipping-taxable purchasable product-type-simple"
                    >
                      <div className="fm-product-detail clearfix fm-product-thumbnail-vertical has-gallery-image fm-product-bg-full-width">
                        <div className="farmart-container">
                          <div
                            className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-5 images"
                            data-columns="5"
                          >
                            <figure className="woocommerce-product-gallery__wrapper">
                              <div
                                data-thumb={imgone}
                                data-thumb-alt
                                className="woocommerce-product-gallery__image"
                              >
                                <a href={imgone}>
                                  <img
                                    width="600"
                                    height="600"
                                    src={imgone}
                                    className="wp-post-image"
                                    alt
                                    decoding="async"
                                    loading="lazy"
                                    title="07_7b"
                                    data-caption
                                    data-src={imgone}
                                    data-large_image={imgone}
                                    data-large_image_width="640"
                                    data-large_image_height="640"
                                    sizes="(max-width: 600px) 100vw, 600px"
                                  />
                                </a>
                              </div>
                              <div
                                data-thumb={imgtwo}
                                data-thumb-alt
                                className="woocommerce-product-gallery__image"
                              >
                                <a href={imgtwo}>
                                  <img
                                    width="600"
                                    height="600"
                                    src={imgtwo}
                                    className
                                    alt
                                    decoding="async"
                                    loading="lazy"
                                    title="07_10a"
                                    data-caption
                                    data-src={imgtwo}
                                    data-large_image={imgtwo}
                                    data-large_image_width="640"
                                    data-large_image_height="640"
                                  />
                                </a>
                              </div>
                              <div
                                data-thumb={imgthree}
                                data-thumb-alt
                                className="woocommerce-product-gallery__image"
                              >
                                <a href={imgthree}>
                                  <img
                                    width="600"
                                    height="600"
                                    src={imgthree}
                                    className
                                    alt
                                    decoding="async"
                                    loading="lazy"
                                    title="07_10a"
                                    data-caption
                                    data-src={imgthree}
                                    data-large_image={imgthree}
                                    data-large_image_width="640"
                                    data-large_image_height="640"
                                  />
                                </a>
                              </div>
                              <div
                                data-thumb={imgfour}
                                data-thumb-alt
                                className="woocommerce-product-gallery__image"
                              >
                                <a href={imgfour}>
                                  <img
                                    width="600"
                                    height="600"
                                    src={imgfour}
                                    className
                                    alt
                                    decoding="async"
                                    loading="lazy"
                                    title="07_10a"
                                    data-caption
                                    data-src={imgfour}
                                    data-large_image={imgfour}
                                    data-large_image_width="640"
                                    data-large_image_height="640"
                                  />
                                </a>
                              </div>
                            </figure>
                            <div className="product-image-ms ms-image-zoom">
                              <span className="farmart-svg-icon">
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  focusable="false"
                                  viewBox="0 0 32 32"
                                >
                                  <path d="M30.19 30.659l-9.509-10.374c2.143-2.242 3.32-5.173 3.32-8.286 0-3.205-1.248-6.219-3.515-8.485s-5.28-3.515-8.485-3.515-6.219 1.248-8.485 3.515-3.515 5.28-3.515 8.485 1.248 6.219 3.515 8.485 5.28 3.515 8.485 3.515c2.761 0 5.38-0.927 7.501-2.633l9.509 10.373c0.158 0.172 0.374 0.259 0.59 0.259 0.193 0 0.387-0.070 0.54-0.21 0.326-0.299 0.348-0.805 0.049-1.13zM1.6 12c0-5.735 4.665-10.4 10.4-10.4s10.4 4.665 10.4 10.4-4.665 10.4-10.4 10.4-10.4-4.665-10.4-10.4zM18.4 11.2h-5.6v-5.6c0-0.442-0.358-0.8-0.8-0.8s-0.8 0.358-0.8 0.8v5.6h-5.6c-0.442 0-0.8 0.358-0.8 0.8s0.358 0.8 0.8 0.8h5.6v5.6c0 0.442 0.358 0.8 0.8 0.8s0.8-0.358 0.8-0.8v-5.6h5.6c0.442 0 0.8-0.358 0.8-0.8s-0.358-0.8-0.8-0.8z"></path>
                                </svg>
                              </span>
                              Mouse over to zoom in
                            </div>
                            <div className="product-image-ms ms-image-view hide">
                              <span className="farmart-svg-icon">
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  focusable="false"
                                  viewBox="0 0 32 32"
                                >
                                  <path d="M30.19 30.659l-9.509-10.374c2.143-2.242 3.32-5.173 3.32-8.286 0-3.205-1.248-6.219-3.515-8.485s-5.28-3.515-8.485-3.515-6.219 1.248-8.485 3.515-3.515 5.28-3.515 8.485 1.248 6.219 3.515 8.485 5.28 3.515 8.485 3.515c2.761 0 5.38-0.927 7.501-2.633l9.509 10.373c0.158 0.172 0.374 0.259 0.59 0.259 0.193 0 0.387-0.070 0.54-0.21 0.326-0.299 0.348-0.805 0.049-1.13zM1.6 12c0-5.735 4.665-10.4 10.4-10.4s10.4 4.665 10.4 10.4-4.665 10.4-10.4 10.4-10.4-4.665-10.4-10.4zM18.4 11.2h-5.6v-5.6c0-0.442-0.358-0.8-0.8-0.8s-0.8 0.358-0.8 0.8v5.6h-5.6c-0.442 0-0.8 0.358-0.8 0.8s0.358 0.8 0.8 0.8h5.6v5.6c0 0.442 0.358 0.8 0.8 0.8s0.8-0.358 0.8-0.8v-5.6h5.6c0.442 0 0.8-0.358 0.8-0.8s-0.358-0.8-0.8-0.8z"></path>
                                </svg>
                              </span>
                              Click to open expanded view
                            </div>
                          </div>

                          <div className="summary entry-summary">
                            <div className="entry-summary-content">
                              <ul className="site-breadcrumb">
                                <li>
                                  <a className="home" href="/">
                                    <span>Home </span>
                                  </a>
                                </li>

                                <li>
                                  <span>{data && data.title}</span>
                                </li>
                              </ul>
                              <div className="fm-header-vendor"></div>
                              <div className="fm-entry-product-header">
                                <div className="entry-left">
                                  <h1 className="product_title entry-title">
                                    {data && data.title}
                                  </h1>
                                  <ul className="entry-meta">
                                    <li>
                                      <div className="woocommerce-product-rating">
                                        <div className="fm-rating">
                                          <div
                                            className="star-rating"
                                            role="img"
                                            aria-label="Rated 5.00 out of 5"
                                          >
                                            <span className="max-rating rating-stars">
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                            </span>

                                            <span
                                              className="user-rating rating-stars"
                                              style={{ width: "20%" }}
                                            >
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                            </span>
                                            <span className="screen-reader-text">
                                              Rated
                                              <strong className="rating">
                                                1.00
                                              </strong>
                                              out of 5 based on
                                              <span className="rating">
                                                1
                                              </span>{" "}
                                              customer rating
                                              {data && data.rating}
                                            </span>
                                          </div>
                                          <span className="count">(1)</span>
                                        </div>
                                        <a
                                          href="#reviews"
                                          className="woocommerce-review-link"
                                          rel="nofollow"
                                        >
                                          {data && data.reviews}
                                        </a>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <p className="price">
                                <del aria-hidden="true">
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        &#8377;
                                      </span>

                                      {data && data.strik}
                                    </bdi>
                                  </span>
                                </del>
                                <ins>
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        &#8377;
                                      </span>
                                      {data && data.price} 
                                    </bdi>
                                  </span>
                                  <span>
                                    <bdi>
                                 &nbsp;    Only
                                    </bdi>
                                  </span>
                                </ins>
                              </p>
                              <div className="fm-stock">
                                <p className="stock in-stock">
                                  <label>Availability:</label>In stock
                                </p>
                              </div>
                              <div className="woocommerce-product-details__short-description">
                                <ul className="farmart-list">
                                  <li>
                                    <b>Material: </b>&nbsp; Brass
                                  </li>
                                  <li>
                                    <b>Brand: </b>&nbsp; Jyoti
                                  </li>
                                  <li>
                                    <b>Item Dimensions LxWxH:</b>&nbsp;
                                    {data.Width} x {data.Length} x {data.Depth}
                                  </li>
                                  <li>
                                    <b>Weight</b>&nbsp; {data.Weight}
                                  </li>
                                  <li>
                                    <b>Exterior Finish:</b>&nbsp; Brass
                                  </li>
                                  <li>
                                    <b>Inlet Connection Type:</b>&nbsp;
                                    Compression
                                  </li>
                                  <li>
                                    <b>Specification Met:</b>&nbsp;{" "}
                                    {data.Certification}
                                  </li>
                                </ul>
                              </div>

                              <div
                                className="cart"
                                enctype="multipart/form-data"
                              >
                                <div className="single-button-wrapper">
                                  <div className="buttons-box">
                                    <button
                                      onClick={() => {handleTheCart(data)}}
                                      type="submit"
                                      name="submit"
                                      value="2312"
                                      className="single_add_to_cart_button quantity_button alt"
                                      data-title
                                    >
                                      Add-to-cart
                                    </button>
                                  </div>
                                  <div className="buttons-box">
                                
                                      <button
                                        onClick={() => {handleTheBuyNow(data)}}
                                        type="submit"
                                        name="submit"
                                        value="2312"
                                        className="single_add_to_cart_button quantity_button alt"
                                        data-title
                                      >
                                        Buy Now
                                      </button>
                            
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h4>About this item</h4>
                                <ul>
                                  <li>- 3 Years Warranty</li>
                                  <li>- Saves 20% Gas on Each Cylinder</li>
                                  <li>
                                    - Auto Shut Off while using Damage Or
                                    Rupture Pipe
                                  </li>
                                  <li>
                                    - Covered with Product Liability Insurance
                                  </li>
                                  <li>- Detects Minor Leakage</li>
                                  <li>- Advance Safety Lock System</li>
                                  <li>- Made for 25.6mm Valve Dia</li>
                                  <li>
                                    - Made for Domestic Cylinders Only (HP
                                    /Bharat /Indane etc.)
                                  </li>
                                  <li>
                                    - Auto Cut Off Gas Supply during Leakage
                                  </li>
                                  <li>- Controls Extra Pressure</li>
                                </ul>
                              </div>
                            </div>
                            <div className="entry-summary-sidebar product-sidebar">
                              <div
                                id="custom_html-1"
                                className="widget_text widget widget_custom_html"
                              >
                                <div className="textwidget custom-html-widget">
                                  <ul className="fm-products-list fm-sidebar-bg">
                                    <li>
                                      <img src={homeone} title alt />
                                      <div>
                                        <h6>Free Shipping</h6>
                                        <div className="text">
                                          For all orders over $200
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <img src={hometwo} title alt />
                                      <div>
                                        <h6>1 & 1 Returns</h6>
                                        <div className="text">
                                          Cancellation after 1 day
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <img src={homethree} title alt />
                                      <div>
                                        <h6>Secure Payment</h6>
                                        <div className="text">
                                          100% secure payments
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                id="custom_html-2"
                                className="widget_text widget widget_custom_html"
                              >
                                <div className="textwidget custom-html-widget">
                                  <div className="fm-sidebar-bg">
                                    <h6>Hotline Order:</h6>
                                    <div className="text">
                                      Mon - Fri: 7:00 am - 9:00PM
                                    </div>
                                    <h3 className="phone">+91 8007800010</h3>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="custom_html-3"
                                className="widget_text widget widget_custom_html"
                              >
                                <div className="textwidget custom-html-widget">
                                  <div
                                    className="text-center"
                                    stye="color: #000;"
                                  >
                                    Become a Vendor?
                                    <a href="#" className>
                                      Register now
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fm-product-summary">
                        <div className="woocommerce-tabs wc-tabs-wrapper clear farmart-container">
                          <ul className="tabs wc-tabs" role="tablist">
                            <li
                              className="description_tab"
                              id="tab-title-description"
                              role="tab"
                              aria-controls="tab-description"
                            >
                              <a href="#tab-description"> Description </a>
                            </li>
                            <li
                              className="reviews_tab"
                              id="tab-title-reviews"
                              role="tab"
                              aria-controls="tab-reviews"
                            >
                              <a href="#tab-reviews"> Reviews (1) </a>
                            </li>
                          </ul>
                          <div
                            className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                            id="tab-description"
                            role="tabpanel"
                            aria-labelledby="tab-title-description"
                          >
                            <p>
                              Jyoti Gas Safety Device - Unparalleled Protection
                              and Efficiency for Gas Safety
                            </p>
                            <p>
                              Jyoti Gas Safety Device is the ultimate solution
                              for ensuring the safety of your home and loved
                              ones. With its advanced features and cutting-edge
                              technology, this gas safety device offers
                              unmatched protection against potential gas leaks
                              and accidents. Let's explore the exceptional
                              features of the Jyoti Gas Safety Device that make
                              it a must-have for every household.
                            </p>
                            <p>
                              First and foremost, the Jyoti Gas Safety Device
                              comes with a remarkable 3-year warranty, providing
                              you with peace of mind and confidence in the
                              product's durability and reliability. You can
                              trust in its performance and rely on its
                              protection for years to come.
                            </p>
                            <figure
                              id="attachment_7076"
                              aria-describedby="caption-attachment-7076"
                              style={{ width: "960px" }}
                              className="wp-caption alignnone"
                            >
                              <img
                                decoding="async"
                                className="wp-image-7076 size-full"
                                src={imgtwo}
                                alt
                                style={{width:"550px", height:"480px"}}
                                width="860"
                                height="365"
                              />
                              <figcaption
                                id="caption-attachment-7076"
                                className="wp-caption-text"
                              >
                                Jyoti Gas Safety Device
                              </figcaption>
                            </figure>
                            <h4>Other Information:</h4>
                            <p>
                              One of the standout features of the Jyoti Gas
                              Safety Device is its ability to save up to 20% gas
                              on each cylinder. This impressive gas-saving
                              feature not only reduces your overall gas
                              consumption but also helps you save on utility
                              bills. With increasing energy costs, this
                              efficiency makes Jyoti Gas Safety Device a
                              cost-effective solution for your home.
                            </p>
                            <p>
                              Safety is of paramount importance, and the Jyoti
                              Gas Safety Device takes it to the next level. It
                              is equipped with an auto shut-off mechanism that
                              instantly activates when it detects damage or
                              rupture in the gas pipe. This feature ensures that
                              the gas supply is immediately cut off, preventing
                              any further gas leakage and potential hazards.
                            </p>
                            <p>
                              To provide you with added assurance, the Jyoti Gas
                              Safety Device is covered with product liability
                              insurance. This insurance coverage ensures that
                              you are protected in the unlikely event of any
                              product-related issues, further emphasizing the
                              reliability and trustworthiness of the device.
                              When it comes to gas leakage detection, the Jyoti
                              Gas Safety Device excels. It can detect even minor
                              leaks, giving you early warning signs before the
                              situation worsens. This early detection capability
                              enables prompt action and prevents potential
                              accidents.
                            </p>
                            <p>
                              The advanced safety lock system integrated into
                              the Jyoti Gas Safety Device ensures foolproof
                              protection. It adds an extra layer of security,
                              preventing unauthorized access or tampering with
                              the device. Your safety is prioritized at every
                              level. Designed to fit domestic cylinders with a
                              25.6mm valve diameter, the Jyoti Gas Safety Device
                              offers universal compatibility and easy
                              installation. It is specifically crafted for use
                              with popular domestic cylinders such as HP,
                              Bharat, Indane, and more.
                            </p>
                            <p>
                              Thanks to its automatic cut-off feature, the Jyoti
                              Gas Safety Device swiftly shuts off the gas supply
                              during any leakage. This rapid response prevents
                              the escalation of potential dangers and ensures
                              the safety of your household. Additionally, the
                              Jyoti Gas Safety Device controls extra pressure,
                              providing a stable gas flow and protecting your
                              appliances from damage. This pressure control
                              mechanism helps optimize gas usage, leading to
                              energy efficiency and cost savings.
                            </p>
                            <p>
                              In conclusion, the Jyoti Gas Safety Device stands
                              as a pinnacle of gas safety technology. With its
                              comprehensive features, including a 3-year
                              warranty, gas-saving capabilities, auto shut-off,
                              product liability insurance, leakage detection,
                              safety lock system, and pressure control, it is
                              the ultimate solution to safeguard your home and
                              loved ones. Upgrade to Jyoti Gas Safety Device and
                              experience unparalleled protection, efficiency,
                              and peace of mind.
                            </p>
                          </div>
                          <div
                            className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab"
                            id="tab-reviews"
                            role="tabpanel"
                            aria-labelledby="tab-title-reviews"
                          >
                            <div id="reviews" className="woocommerce-Reviews">
                              <div className="fm-product-rating row">
                                <div className="col-md-5 col-sm-12 col-xs-12 col-average-rating">
                                  <div className="average-rating">
                                    <h3 className="average-value">5.00</h3>
                                    <div className="woocommerce-product-rating">
                                      <div className="fm-rating">
                                        <div
                                          className="star-rating"
                                          role="img"
                                          aria-label="Rated 5.00 out of 5"
                                        >
                                          <span className="max-rating rating-stars">
                                            <span className="farmart-svg-icon">
                                              <svg
                                                aria-hidden="true"
                                                role="img"
                                                focusable="false"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                              >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                              </svg>
                                            </span>

                                            <span className="farmart-svg-icon">
                                              <svg
                                                aria-hidden="true"
                                                role="img"
                                                focusable="false"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                              >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                              </svg>
                                            </span>
                                            <span className="farmart-svg-icon">
                                              <svg
                                                aria-hidden="true"
                                                role="img"
                                                focusable="false"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                              >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                              </svg>
                                            </span>
                                            <span className="farmart-svg-icon">
                                              <svg
                                                aria-hidden="true"
                                                role="img"
                                                focusable="false"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                              >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                              </svg>
                                            </span>
                                            <span className="farmart-svg-icon">
                                              <svg
                                                aria-hidden="true"
                                                role="img"
                                                focusable="false"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                              >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                              </svg>
                                            </span>
                                          </span>
                                          <span
                                            className="user-rating rating-stars"
                                            style={{ width: "20%" }}
                                          >
                                            <span className="farmart-svg-icon">
                                              <svg
                                                aria-hidden="true"
                                                role="img"
                                                focusable="false"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                              >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                              </svg>
                                            </span>
                                            <span className="farmart-svg-icon">
                                              <svg
                                                aria-hidden="true"
                                                role="img"
                                                focusable="false"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                              >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                              </svg>
                                            </span>
                                            <span className="farmart-svg-icon">
                                              <svg
                                                aria-hidden="true"
                                                role="img"
                                                focusable="false"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                              >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                              </svg>
                                            </span>
                                            <span className="farmart-svg-icon">
                                              <svg
                                                aria-hidden="true"
                                                role="img"
                                                focusable="false"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                              >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                              </svg>
                                            </span>
                                            <span className="farmart-svg-icon">
                                              <svg
                                                aria-hidden="true"
                                                role="img"
                                                focusable="false"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                              >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                              </svg>
                                            </span>
                                          </span>
                                          <span className="screen-reader-text">
                                            Rated
                                            <strong className="rating">
                                              1.00
                                            </strong>{" "}
                                            out of 5 based on
                                            <span className="rating">
                                              1
                                            </span>{" "}
                                            customer rating
                                          </span>
                                        </div>
                                        <span className="count">(1)</span>
                                      </div>
                                      <span className="average-label">
                                        Avg. Star Rating:
                                      </span>
                                      <a
                                        href="#reviews"
                                        className="woocommerce-review-link"
                                        rel="nofollow"
                                      >
                                        (<span className="count">1 Review</span>
                                        )
                                      </a>
                                    </div>
                                    <div className="bar-rating">
                                      <div className="star-item 5-stars">
                                        <div className="slabel">5 Stars</div>
                                        <div className="sbar">
                                          <div className="bar-content">
                                            <span
                                              style={{ width: "100%" }}
                                            ></span>
                                          </div>
                                        </div>
                                        <div className="svalue">100%</div>
                                      </div>
                                      <div className="star-item 4-stars">
                                        <div className="slabel">4 Stars</div>
                                        <div className="sbar">
                                          <div className="bar-content">
                                            <span
                                              style={{ width: "0%" }}
                                            ></span>
                                          </div>
                                        </div>
                                        <div className="svalue">0%</div>
                                      </div>
                                      <div className="star-item 3-stars">
                                        <div className="slabel">3 Stars</div>
                                        <div className="sbar">
                                          <div className="bar-content">
                                            <span
                                              style={{ width: "0%" }}
                                            ></span>
                                          </div>
                                        </div>
                                        <div className="svalue">0%</div>
                                      </div>
                                      <div className="star-item 2-stars">
                                        <div className="slabel">2 Stars</div>
                                        <div className="sbar">
                                          <div className="bar-content">
                                            <span
                                              style={{ width: "0%" }}
                                            ></span>
                                          </div>
                                        </div>
                                        <div className="svalue">0%</div>
                                      </div>
                                      <div className="star-item 1-stars">
                                        <div className="slabel">1 Star</div>
                                        <div className="sbar">
                                          <div className="bar-content">
                                            <span
                                              style={{ width: "0%" }}
                                            ></span>
                                          </div>
                                        </div>
                                        <div className="svalue">0%</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-7 col-sm-12 col-xs-12 col-review_form">
                                  <div id="review_form_wrapper">
                                    <div id="review_form">
                                      <div
                                        id="respond"
                                        className="comment-respond"
                                      >
                                        <span
                                          id="reply-title"
                                          className="comment-reply-title"
                                        >
                                          Add your review
                                          <small>
                                            <a
                                              rel="nofollow"
                                              id="cancel-comment-reply-link"
                                              href="index.html#respond"
                                              style={{ display: "none" }}
                                            >
                                              Cancel reply
                                            </a>
                                          </small>
                                        </span>
                                        <form
                                          action="https://drfurithemes.com/farmart2/wp-comments-post.php"
                                          method="post"
                                          id="commentform"
                                          className="comment-form"
                                        >
                                          <p className="comment-notes">
                                            <span id="email-notes">
                                              Your email address will not be
                                              published.
                                            </span>
                                            <span className="required-field-message">
                                              Required fields are marked
                                              <span className="required">
                                                *
                                              </span>
                                            </span>
                                          </p>
                                          <div className="comment-form-rating">
                                            <label for="rating">
                                              Your rating:
                                              <span className="required">
                                                *
                                              </span>
                                            </label>
                                            <select
                                              name="rating"
                                              id="rating"
                                              aria-required="true"
                                              required
                                            >
                                              <option value>
                                                Rate&hellip;
                                              </option>
                                              <option value="5">Perfect</option>
                                              <option value="4">Good</option>
                                              <option value="3">Average</option>
                                              <option value="2">
                                                Not that bad
                                              </option>
                                              <option value="1">
                                                Very poor
                                              </option>
                                            </select>
                                          </div>
                                          <p className="comment-form-comment">
                                            <label for="comment">
                                              Review:
                                              <span className="required">
                                                *
                                              </span>
                                            </label>
                                            <textarea
                                              id="comment"
                                              required
                                              name="comment"
                                              cols="45"
                                              rows="8"
                                              aria-required="true"
                                            ></textarea>
                                          </p>
                                          <p className="comment-form-author">
                                            <label for="author">
                                              Name:
                                              <span className="required">
                                                *
                                              </span>
                                            </label>
                                            <input
                                              id="author"
                                              name="author"
                                              required
                                              type="text"
                                              value
                                              size="30"
                                              aria-required="true"
                                            />
                                          </p>
                                          <p className="comment-form-email">
                                            <label for="email">
                                              Email:
                                              <span className="required">
                                                *
                                              </span>
                                            </label>
                                            <input
                                              id="email"
                                              name="email"
                                              type="email"
                                              required
                                              value
                                              size="30"
                                              aria-required="true"
                                            />
                                          </p>
                                          <p className="clear"></p>
                                          <p className="comment-form-cookies-consent">
                                            <input
                                              id="wp-comment-cookies-consent"
                                              name="wp-comment-cookies-consent"
                                              type="checkbox"
                                              value="yes"
                                            />
                                            <label for="wp-comment-cookies-consent">
                                              Save my name, email, and website
                                              in this browser for the next time
                                              I comment.
                                            </label>
                                          </p>
                                          <p className="form-submit">
                                            <input
                                              name="submit"
                                              type="submit"
                                              id="submit"
                                              className="submit"
                                              value="Submit Review"
                                            />
                                            <input
                                              type="hidden"
                                              name="comment_post_ID"
                                              value="2312"
                                              id="comment_post_ID"
                                            />
                                            <input
                                              type="hidden"
                                              name="comment_parent"
                                              id="comment_parent"
                                              value="0"
                                            />
                                          </p>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="comments">
                                <h2 className="woocommerce-Reviews-title">
                                  1 Review For This Product
                                </h2>

                                <ol className="commentlist">
                                  <li
                                    className="review even thread-even depth-1"
                                    id="li-comment-48"
                                  >
                                    <div
                                      id="comment-48"
                                      className="comment_container"
                                    >
                                      <img
                                        alt
                                        src="https://secure.gravatar.com/avatar/376884b8bc318a228cd24631bd2ebbf4?s=60&amp;d=mm&amp;r=g"
                                        srcset="
                                      https://secure.gravatar.com/avatar/376884b8bc318a228cd24631bd2ebbf4?s=120&#038;d=mm&#038;r=g 2x
                                    "
                                        className="avatar avatar-60 photo"
                                        height="60"
                                        width="60"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <div className="comment-text">
                                        <p className="meta">
                                          <strong className="woocommerce-review__author">
                                            admindokan112
                                          </strong>
                                          <span className="woocommerce-review__dash">
                                            &ndash;
                                          </span>
                                          <time
                                            className="woocommerce-review__published-date"
                                            datetime="2021-05-27T07:15:24+00:00"
                                          >
                                            May 27, 2021
                                          </time>
                                        </p>

                                        <div className="fm-rating">
                                          <div
                                            className="star-rating"
                                            role="img"
                                            aria-label="Rated 1 out of 5"
                                          >
                                            <span className="max-rating rating-stars">
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                            </span>
                                            <span
                                              className="user-rating rating-stars"
                                              style={{ width: "20%" }}
                                            >
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                              <span className="farmart-svg-icon">
                                                <svg
                                                  aria-hidden="true"
                                                  role="img"
                                                  focusable="false"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="currentColor"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                              </span>
                                            </span>
                                            <span className="screen-reader-text">
                                              Rated
                                              <strong className="rating">
                                                1
                                              </strong>{" "}
                                              out of 5 based on
                                              <span className="rating">
                                                1
                                              </span>{" "}
                                              customer rating
                                            </span>
                                          </div>
                                          <span className="count">(1)</span>
                                        </div>
                                        <div className="description">
                                          <p>
                                             Joyti - Gas Safety Device -
                                             Auto Cut Off - Gas Leakage Detector
                                            (for LPG Cylinders) 500ml
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ol>
                              </div>
                              <div className="clear"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fm-vertical-tab" id="fm-vertical-tab"></div>
        <div
          id="cart-panel"
          className="cart-panel cart-panel-mobile offscreen-panel side-right"
        >
          <div className="fm-off-canvas-layer"></div>
          <div className="box-cart-wrapper">
            <div className="box-cart-content">
              <div className="top-content">
                <div className="text-cart">
                  <span className="title">Shopping Cart</span>
                  <span className="mini-item-counter fm-mini-cart-counter">
                    1
                  </span>
                </div>
                <span className="go-back">
                  <span className="farmart-svg-icon">
                    <svg
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        className="path1"
                        d="M990.901 519.499l-307.2-307.2c-9.997-9.997-26.206-9.997-36.203 0-9.998 9.998-9.998 26.206 0 36.205l263.498 263.496h-834.195c-14.138 0-25.6 11.461-25.6 25.6s11.462 25.6 25.6 25.6h834.195l-263.496 263.499c-9.998 9.997-9.998 26.206 0 36.203 4.998 4.998 11.549 7.498 18.101 7.498s13.102-2.499 18.101-7.499l307.2-307.2c9.998-9.997 9.998-26.205 0-36.202z"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          id="fm-quick-view-modal"
          className="fm-quick-view-modal fm-modal woocommerce"
          tabindex="-1"
        >
          <div className="fm-modal-overlay"></div>
          <div className="modal-content container">
            <a href="#" className="close-modal">
              <span className="farmart-svg-icon">
                <svg
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 32 32"
                >
                  <path d="M17.131 16.8l9.034-9.034c0.312-0.312 0.312-0.819 0-1.131s-0.819-0.312-1.131 0l-9.034 9.034-9.034-9.034c-0.312-0.312-0.819-0.312-1.131 0s-0.312 0.819 0 1.131l9.034 9.034-9.034 9.034c-0.312 0.312-0.312 0.819 0 1.131 0.156 0.156 0.361 0.234 0.566 0.234s0.409-0.078 0.566-0.234l9.034-9.034 9.034 9.034c0.156 0.156 0.361 0.234 0.566 0.234s0.409-0.078 0.566-0.234c0.312-0.312 0.312-0.819 0-1.131l-9.034-9.034z"></path>
                </svg>
              </span>
            </a>

            <div className="product-modal-content"></div>
          </div>
          <div className="fm-loading"></div>
        </div>

        <div
          className="fm-catalog-sorting-mobile"
          id="fm-catalog-sorting-mobile"
        ></div>
        <div
          id="pswp"
          className="pswp"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="pswp__bg"></div>

          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item"></div>
              <div className="pswp__item"></div>
              <div className="pswp__item"></div>
            </div>

            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter"></div>

                <button
                  className="pswp__button pswp__button--close"
                  title="Close (Esc)"
                ></button>

                <button
                  className="pswp__button pswp__button--share"
                  title="Share"
                ></button>

                <button
                  className="pswp__button pswp__button--fs"
                  title="Toggle fullscreen"
                ></button>

                <button
                  className="pswp__button pswp__button--zoom"
                  title="Zoom in/out"
                ></button>

                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip"></div>
              </div>

              <button
                className="pswp__button pswp__button--arrow--left"
                title="Previous (arrow left)"
              ></button>

              <button
                className="pswp__button pswp__button--arrow--right"
                title="Next (arrow right)"
              ></button>

              <div className="pswp__caption">
                <div className="pswp__caption__center"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="wcboost-products-compare-popup"
          className="wcboost-products-compare-popup"
          aria-hidden="true"
        >
          <div className="wcboost-products-compare-popup__backdrop"></div>
          <div className="wcboost-products-compare-popup__body">
            <div className="wcboost-products-compare-popup__header">
              <div className="wcboost-products-compare-popup__title">
                Compare products
              </div>
              <a
                href="#"
                className="wcboost-products-compare-popup__close"
                role="button"
              >
                <span className="wcboost-products-compare-popup__close-icon">
                  <svg
                    width="20"
                    height="20"
                    role="image"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                  </svg>
                </span>
                <span className="screen-reader-text">Close</span>
              </a>
            </div>
            <div className="wcboost-products-compare-popup__content"></div>
          </div>
        </div>

        <a id="scroll-top" className="backtotop" href="#page-top">
          <span className="farmart-svg-icon">
            <svg
              aria-hidden="true"
              role="img"
              focusable="false"
              viewBox="0 0 32 32"
            >
              <path d="M0 24c0 0.205 0.078 0.409 0.234 0.566 0.312 0.312 0.819 0.312 1.131 0l13.834-13.834 13.834 13.834c0.312 0.312 0.819 0.312 1.131 0s0.312-0.819 0-1.131l-14.4-14.4c-0.312-0.312-0.819-0.312-1.131 0l-14.4 14.4c-0.156 0.156-0.234 0.361-0.234 0.566z"></path>
            </svg>
          </span>
        </a>
      </div>
    </>
  );
};
export default Product;
