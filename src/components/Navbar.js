import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";
export default function Navbar(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <>
    <nav className ={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className ="container-fluid my-1">
        <a className ="navbar-brand" href="/">{props.title}</a>
        <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className ="navbar-toggler-icon"></span>
        </button>
        <div className ="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
            <li className ="nav-item">
              <Link className ="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className ="nav-item">
              <Link className ="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className="btn-group mx-4 my-1" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" onClick={()=>{props.toggleThemes('danger')}} name="btnradio" id="btnradio1" autocomplete="off"/>
            <label className="btn btn-outline-danger" for="btnradio1">Danger</label>

            <input type="radio" className="btn-check" onClick={()=>{props.toggleThemes('warning')}} name="btnradio" id="btnradio2" autocomplete="off"/>
            <label className="btn btn-outline-warning" for="btnradio2">Warning</label>

            <input type="radio" className="btn-check" onClick={()=>{props.toggleThemes('success')}} name="btnradio" id="btnradio3" autocomplete="off"/>
            <label className="btn btn-outline-success" for="btnradio3">Success</label>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} my-1`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" for="flexSwitchCheckDefault">{capitalize(props.mode)} Mode</label>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

//this defines the type of props used
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

//this defines the output to shown if there is no input

Navbar.defaultProps = {
    title: 'Add title here',
    aboutText: 'About text here'
}