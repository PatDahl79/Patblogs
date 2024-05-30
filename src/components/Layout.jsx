import React from 'react'
import Footer from './Footer'
import NavbarComponent from './Navbar'

function Layout({ children }) {
    return (
        <div>
            {/* Navbar  */}
            <NavbarComponent/>


            {/* main Content  */}
            <div className="content min-h-screen">
                {children}
            </div>

            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Layout