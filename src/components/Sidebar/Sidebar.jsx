import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        
        <div className="btn-group-vertical background-container-subject me-3 shadow" role="group"
            aria-label="Vertical button group">
            <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><a className="btn"> <Link to={'/myData'} className="link-solution">MEUS DADOS</Link></a></button>
            <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><Link to={'/myOrder'} className="link-solution">MEUS PEDIDOS</Link></button>
            <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><Link to={'/cart'} className="link-solution">MEU CARRINHO</Link></button>
            <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><Link to={'/wishList'} className="link-solution">LISTA DE DESEJOS</Link></button>
            <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><Link to={' '} className="link-solution"></Link>SAIR</button>
        </div>
       
    )
}

export default Sidebar