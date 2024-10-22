import React from "react"
import Header from "../../global/Header/Header"
import Banner from "./Banner/Banner"
import Content from "./ContentTab/Content"
import Category from "./Category/Category"

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Content></Content>
            <Category></Category>
        </>
    )
}

export default Home
