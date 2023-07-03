import React from 'react'
import './bsmin.css'
import './Header.css'

export default function Header(prop) {
    return (
        <header>
            <div className='container'>
                <nav className="navbar navbar-expand-sm bg-dark">

                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">{prop.title}</a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Services</a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        </header>
    )
}
