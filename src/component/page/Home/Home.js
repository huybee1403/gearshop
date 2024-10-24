import React from "react"
import Header from "../../global/Header/Header"
import Banner from "./Banner/Banner"
import Content from "./ContentTab/Content"
import Category from "./Category/Category"
import CardProduct from "../../global/CardProduct/CardProduct"

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Category></Category>
            <CardProduct></CardProduct>
        </>
    )
}

export default Home
