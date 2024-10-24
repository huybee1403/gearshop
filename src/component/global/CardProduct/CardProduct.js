import React, { useState } from "react"
import Slider from "react-slick"
import "./CardProduct.css"
import { Col, Container, Modal, Row } from "react-bootstrap"

const CardProduct = () => {
    const rate = 3
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Container fluid className="d-flex gap-5">
            <div className="card-product">
                <div className="card-img">
                    <img src="https://product.hstatic.net/200000722513/product/_____20240816153223_c42865bb150b497193dbfa2fa870796e_grande.png" alt="" />
                </div>
                <div className="card-infor">
                    <h5 className="title">AKKO 5075B Plus Transparent ASA Black Piano Pro</h5>
                    <div className="rate">
                        {[...Array(rate)].map((index) => (
                            <i key={index} style={{ color: "yellow", marginRight: "7px" }} className="fa-solid fa-star"></i>
                        ))}
                    </div>
                    <h4 className="price">$70.46</h4>
                </div>
                <div className="card-btn">
                    <div className="btn-wishlist">
                        <span>Add To WishList</span>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="btn-addcart">
                        <span>Add To Cart</span>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="btn-quickview">
                        <span>Quick View</span>
                        <i className="fa-regular fa-eye" onClick={handleShow}></i>
                    </div>
                </div>
                <div className="quickview-popup">
                    <Modal show={show} onHide={handleClose} size="xl" className="mt-5">
                        <Modal.Header closeButton>
                            <Modal.Title>AKKO 5075B Plus Transparent ASA Black Piano Pro</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="pb-5">
                            <div className="content-popup">
                                <Row className="align-items-center">
                                    <Col lg={6}>
                                        <Slider {...settings}>
                                            <img src="https://product.hstatic.net/200000722513/product/_____20240816153223_c42865bb150b497193dbfa2fa870796e_grande.png" alt="" />
                                            <img src="https://product.hstatic.net/200000722513/product/_____20240816153223_c42865bb150b497193dbfa2fa870796e_grande.png" alt="" />
                                            <img src="https://product.hstatic.net/200000722513/product/_____20240816153223_c42865bb150b497193dbfa2fa870796e_grande.png" alt="" />
                                        </Slider>
                                    </Col>
                                    <Col lg={6} className="d-flex flex-column gap-2">
                                        <h5 className="title">AKKO 5075B Plus Transparent ASA Black Piano Pro</h5>
                                        <h3 className="price" style={{ fontFamily: "Orbitron" }}>
                                            $70.46
                                        </h3>
                                        <ul className="details p-0">
                                            <li>Details: </li>
                                            <li>- KeyCap: ASA Profile Transparent Black Color</li>
                                            <li>- Switch: Akko V3 Piano Pro</li>
                                            <li>- Support For: Windows / MacOS / Linux</li>
                                            <li>- Size: 335*146*42mm</li>
                                        </ul>
                                        <div className="quantity">
                                            <Row className="align-items-center">
                                                <Col className="position-relative" lg={4}>
                                                    <i
                                                        className="fa-solid fa-plus"
                                                        style={{
                                                            position: "absolute",
                                                            right: "18px",
                                                            top: "50%",
                                                            transform: "translateY(-50%)",
                                                            cursor: "pointer",
                                                        }}
                                                    ></i>
                                                    <input
                                                        type="text"
                                                        value={0}
                                                        style={{
                                                            width: "100%",
                                                            padding: "7px 0px",
                                                            borderRadius: "18px",
                                                            outline: "none",
                                                            border: "1px solid black",
                                                            textAlign: "center",
                                                        }}
                                                        disabled={true}
                                                    />
                                                    <i
                                                        className="fa-solid fa-minus"
                                                        style={{
                                                            position: "absolute",
                                                            left: "18px",
                                                            top: "50%",
                                                            transform: "translateY(-50%)",
                                                            cursor: "pointer",
                                                        }}
                                                    ></i>
                                                </Col>
                                                <Col lg={8}>
                                                    <div className="add-cart w-100 text-center">Add To Cart</div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="buy-now text-center">Buy It Now</div>
                                    </Col>
                                </Row>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </Container>
    )
}

export default CardProduct
