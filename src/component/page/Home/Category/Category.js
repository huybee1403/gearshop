import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Category.css"

const Category = () => {
    return (
        <div className="category mt-4">
            <h1 className="title mb-5">SHOP BY CATEGORY</h1>
            <Container fluid>
                <Row>
                    <Col lg={3} md={6} className="mb-5">
                        <div className="cate-card">
                            <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-6-1_580x.jpg?v=1724896883" alt="" />
                            <div className="cate-content">
                                <h4 className="cate-title">Keyboards Gaming</h4>
                                <p>
                                    Shop now <i class="fa-solid fa-arrow-right"></i>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="mb-5">
                        <div className="cate-card">
                            <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-6-2_580x.jpg?v=1724896883" alt="" />
                            <div className="cate-content">
                                <h4 className="cate-title">Gaming Mouse</h4>
                                <p>
                                    Shop now <i class="fa-solid fa-arrow-right"></i>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="mb-5">
                        <div className="cate-card">
                            <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-6-3_580x.jpg?v=1724896883" alt="" />
                            <div className="cate-content">
                                <h4 className="cate-title">Headphones</h4>
                                <p>
                                    Shop now <i class="fa-solid fa-arrow-right"></i>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="mb-5">
                        <div className="cate-card">
                            <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-6-4_580x.jpg?v=1724896883" alt="" />
                            <div className="cate-content">
                                <h4 className="cate-title">Gaming Controllers</h4>
                                <p>
                                    Shop now
                                    <i class="fa-solid fa-arrow-right"></i>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Category