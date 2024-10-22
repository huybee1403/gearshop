import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Header.css"

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    const [activeSearch, setActiveSearch] = useState(false)
    const handlePopUpSearch = () => {
        setActiveSearch(!activeSearch)
    }
    const handleMenu = (value) => {
        setMenuActive(value)
    }
    return (
        <Container fluid className="header">
            <div className="thumb">
                <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/Logo_white.png?v=1722670258&width=150" alt="" />
            </div>
            <div className="menu">
                <ul className={`${menuActive ? "active" : ""}`}>
                    <li>Home</li>
                    <li className="products">
                        Products
                        <Container fluid className="">
                            <div className="sub-product">
                                <Row>
                                    <Col lg={6}>
                                        <div className="left">
                                            <Row>
                                                <Col lg={6}>
                                                    <div className="product-item">
                                                        <div className="img-product">
                                                            <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-5-1_900x.jpg?v=1724640419" alt="" />
                                                        </div>
                                                        <div className="content-product">
                                                            <h4 className="title">Gaming Mouse</h4>
                                                            <div className="btn-shop">
                                                                <i class="fa-solid fa-arrow-right"></i>
                                                                Shop Now
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="product-item">
                                                        <div className="img-product">
                                                            <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-5-2_900x.jpg?v=1724640419" alt="" />
                                                        </div>
                                                        <div className="content-product">
                                                            <h4 className="title">Gaming Mouse</h4>
                                                            <div className="btn-shop">
                                                                <i class="fa-solid fa-arrow-right"></i>
                                                                Shop Now
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="product-item">
                                                        <div className="img-product">
                                                            <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-5-3_900x.jpg?v=1724640419" alt="" />
                                                        </div>
                                                        <div className="content-product">
                                                            <h4 className="title">Gaming Mouse</h4>
                                                            <div className="btn-shop">
                                                                <i class="fa-solid fa-arrow-right"></i>
                                                                Shop Now
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="product-item">
                                                        <div className="img-product">
                                                            <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-5-4_900x.jpg?v=1724640419" alt="" />
                                                        </div>
                                                        <div className="content-product">
                                                            <h4 className="title">Gaming Mouse</h4>
                                                            <div className="btn-shop">
                                                                <i class="fa-solid fa-arrow-right"></i>
                                                                Shop Now
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="right d-flex">
                                            <div className="social">
                                                <i class="fa-brands fa-facebook"></i>
                                                <i class="fa-brands fa-instagram"></i>
                                                <i class="fa-brands fa-twitter"></i>
                                                <i class="fa-brands fa-twitch"></i>
                                                <i class="fa-brands fa-x-twitter"></i>
                                            </div>
                                            <form action="" className="search">
                                                <input type="text" placeholder="Enter Your Key Search" />
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </form>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </li>
                    <li>Contact Us</li>
                    <li>News</li>
                    <li>
                        <i class="fa-solid fa-xmark" onClick={() => handleMenu(false)}></i>
                    </li>
                </ul>
            </div>
            <div className="icon">
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-cart-shopping"></i>
                <i className={`fa-solid ${activeSearch ? "fa-xmark" : "fa-magnifying-glass"}`} onClick={handlePopUpSearch}></i>
                <i class="fa-solid fa-bars" onClick={() => handleMenu(true)}></i>
            </div>
            <div className={`search-popup ${activeSearch ? "active" : ""}`}>
                <form action="" className="search">
                    <input type="text" placeholder="Enter Your Key Search" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
            </div>
        </Container>
    )
}

export default Header
