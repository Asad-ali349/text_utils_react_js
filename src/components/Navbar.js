import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

    const style={
        color:props.mode=='light'?'black':'white'
    }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About US</Link>
                </li>
            </ul>
            <form className="d-flex">
                <div className="form-check form-switch">
                    <input className="form-check-input" onChange={props.handleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" style={style} htmlFor="flexSwitchCheckDefault">{props.mode=='light'?'Enable DarkMode':'Enable LightMode'} </label>
                </div>
            </form>
            </div>
        </div>
    </nav>
  )
}



Navbar.propTypes={
    title: PropTypes.string
}
