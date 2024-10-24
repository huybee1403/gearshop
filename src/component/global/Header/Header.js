import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Header.css"

const Header = () => {
    const [resProdct, setResProdct] = useState(true)
    const [resPage , setResPage] = useState(false)
    const [resMenu, setResMenu] = useState(false)
    
    return (
        <>
            <Container fluid className="header pt-4 pb-4 d-flex flex-row align-items-center justify-content-around">
                <div className="logo d-flex">
                    <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/Logo_white.png?v=1722670258&width=150" alt="" />
                </div>
                <ul className="menu d-flex gap-5 align-items-center m-0">
                    <li>Home</li>
                    <li className="products">
                        Products
                        <div className="cate-product">
                            <Row className="pt-3 pb-3">
                                <Col lg={6} className="d-flex align-items-center justify-content-center mt-4 mb-5">
                                    <div className="product-item">
                                        <div className="img-product">
                                            <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-5-1_900x.jpg?v=1724640419" alt="" />
                                        </div>
                                        <div className="content-product">
                                            <h4 className="title mb-3">Gaming Mouse</h4>
                                            <div className="btn-shop">
                                                <i className="fa-solid fa-arrow-right"></i>
                                                Shop Now
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} className="d-flex align-items-center justify-content-center mt-4 mb-5">
                                    <div className="product-item">
                                        <div className="img-product">
                                            <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-5-2_900x.jpg?v=1724640419" alt="" />
                                        </div>
                                        <div className="content-product">
                                            <h4 className="title mb-3">Gaming Mouse</h4>
                                            <div className="btn-shop">
                                                <i className="fa-solid fa-arrow-right"></i>
                                                Shop Now
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} className="d-flex align-items-center justify-content-center mb-5">
                                    <div className="product-item">
                                        <div className="img-product">
                                            <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-5-3_900x.jpg?v=1724640419" alt="" />
                                        </div>
                                        <div className="content-product">
                                            <h4 className="title mb-3">Gaming Mouse</h4>
                                            <div className="btn-shop">
                                                <i className="fa-solid fa-arrow-right"></i>
                                                Shop Now
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} className="d-flex align-items-center justify-content-center mb-5">
                                    <div className="product-item">
                                        <div className="img-product">
                                            <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-5-4_900x.jpg?v=1724640419" alt="" />
                                        </div>
                                        <div className="content-product">
                                            <h4 className="title mb-3">Gaming Mouse</h4>
                                            <div className="btn-shop">
                                                <i className="fa-solid fa-arrow-right"></i>
                                                Shop Now
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </li>
                    <li>Contact Us</li>
                    <li>News</li>
                </ul>
                <div className="btn-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-user"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i onClick={() => setResMenu(true)} className="fa-solid fa-bars"></i>
                </div>
                <div className="search-popup" style={{ display: "none" }}></div>
                <div className={`menu-container ${resMenu ? "active" : ""}`}>
                    <div className="close-btn" onClick={() => setResMenu(false)}>
                        <i  className="fa-solid fa-xmark"></i>
                    </div>
                    <ul className={`res-menu ${resProdct ? "active" : ""}`}>
                        <li>Home <span><i className="fa-solid fa-house"></i></span></li>
                        <li onClick={() => setResProdct(!resProdct)}>Product 
                            <span><i className="fa-solid fa-list"></i></span>
                        </li>
                        <li>Pages <span><i className="fa-solid fa-file-lines"></i></span></li>
                        <li>Contact Us <span><i className="fa-solid fa-address-book"></i></span></li>
                        <li>News <span><i className="fa-solid fa-newspaper"></i></span></li>
                    </ul>
                     <ul className={`sub-product p-0 mt-1 ${resProdct ? "": "active"}`}>
                        <li onClick={() => setResProdct(!resProdct)}>Return <span><i className="fa-solid fa-arrow-rotate-left"></i></span></li>
                        <li>Gaming Keyboard <span><i className="fa-solid fa-keyboard"></i></span></li>
                        <li>Gaming Mouse <span><i className="fa-solid fa-computer-mouse"></i></span></li>
                        <li>Gaming Headphone <span><i className="fa-solid fa-headphones"></i></span></li>
                        <li>Gaming Console <span><i className="fa-solid fa-gamepad"></i></span></li>
                    </ul>
                     
                </div>
            </Container>
        </>
    )
}

export default Header
