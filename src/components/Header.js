import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav>
            <Link to="home">Home</Link> {" "}
            <Link to="products">Products</Link>
        </nav>
    )
}
