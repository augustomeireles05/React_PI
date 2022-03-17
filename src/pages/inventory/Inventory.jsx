import React from 'react'
import './Inventory.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SearchFilter from '../../components/SearchFilter/SearchFilter'
import ProductCard from '../../components/ProductCard/ProductCard'


function Inventory() {
    return (
        <>
            <Header />    
            <SearchFilter />
            <ProductCard />
            <Footer />
        </>
    )
}

export default Inventory