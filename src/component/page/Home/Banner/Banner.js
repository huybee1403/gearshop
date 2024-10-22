import React, { useEffect, useState } from "react"
import "./Banner.css"
const Banner = () => {
    const [id, setId] = useState(1)
    const handleSlider = (index) => {
        setId(index)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setId(id < 3 ? id + 1 : 1)
        }, 5000)
        return () => clearTimeout(timer)
    }, [id])
    return (
        <div className="slider-container">
            <div className={`slider-item ${id === 1 ? "active" : ""}`}>
                <div className="slider-img">
                    <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/s-6-3.jpg?v=1724894834&width=3840" alt="" />
                </div>
                <div className="slider-content">
                    <h1 className="caption">
                        Essential Gaming
                        <br />
                        Equipment for Champions
                    </h1>
                    <p className="desc">Engineered for Uncompromising Performance and Unparalleled Immersion</p>
                    <button className="shop">Shop Now</button>
                </div>
            </div>
            <div className={`slider-item ${id === 2 ? "active" : ""}`}>
                <div className="slider-img">
                    <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/s-6-2.jpg?v=1724894834&width=3840" alt="" />
                </div>
                <div className="slider-content">
                    <h1 className="caption">
                        Essential Gaming
                        <br />
                        Equipment for Champions
                    </h1>
                    <p className="desc">Engineered for Uncompromising Performance and Unparalleled Immersion</p>
                    <button className="shop">Shop Now</button>
                </div>
            </div>
            <div className={`slider-item ${id === 3 ? "active" : ""}`}>
                <div className="slider-img">
                    <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/s-6-1.jpg?v=1724894835&width=3840" alt="" />
                </div>
                <div className="slider-content">
                    <h1 className="caption">
                        Essential Gaming
                        <br />
                        Equipment for Champions
                    </h1>
                    <p className="desc">Engineered for Uncompromising Performance and Unparalleled Immersion</p>
                    <button className="shop">Shop Now</button>
                </div>
            </div>
            <div className="list-button">
                <div className={`slider-dot ${id === 1 ? "active" : ""}`} onClick={() => handleSlider(1)}></div>
                <div className={`slider-dot ${id === 2 ? "active" : ""}`} onClick={() => handleSlider(2)}></div>
                <div className={`slider-dot ${id === 3 ? "active" : ""}`} onClick={() => handleSlider(3)}></div>
            </div>
        </div>
    )
}

export default Banner