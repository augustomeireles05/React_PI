import React from 'react'
import './Sidebar.css'


import SidebarItem from '../../components/Sidebar/SidebarItem'


function Sidebar() {
    return (
        <>
        
            <button class="navbar-toggler d-md-none collapsed"
                type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu" aria-expanded="false"
                aria-label="Toggle navigation">
                <div class="navbar-toggler-icon text-center w-100">
                    MENU
                </div>
            </button>


            <div className="col-md-4 flex-row justify-content-center align-items-start text-center mt-0 px-0">

                <nav id="sidebarMenu"
                    className=" col-12 d-md-block bg-light sidebar collapse btn-group-vertical background-container-subject bg-white">

                    <div className="position-sticky w-100">
                        <ul className="nav flex-column">
                            <SidebarItem link="/myData" item="MEUS DADOS"/>

                            <SidebarItem link="/myOrder" item="MEUS PEDIDOS"/>

                            <SidebarItem link="/cart" item="CARRINHO DE COMPRA"/>

                            <SidebarItem link="/wishList" item="LISTA DE DESEJOS"/>

                            <SidebarItem link="/" item="SAIR"/>
                        </ul>
                    </div>
                </nav>
            </div>





            {/* <div className="col-md-4 flex-row justify-content-center align-items-start text-center">

                <div className="col-12 btn-group-vertical background-container-subject me-3 shadow bg-white" role="group" aria-label="Vertical button group">

                    <Link to="/myData" className="link-solution button-menu-lateral sidebar-font border-button-sidebar-menu w-100 p-2">MEUS DADOS</Link>
                    <Link to="/myData" className="link-solution button-menu-lateral sidebar-font border-button-sidebar-menu w-100 p-2">MEUS PEDIDOS</Link>
                    <Link to="/myData" className="link-solution button-menu-lateral sidebar-font border-button-sidebar-menu w-100 p-2">CARRINHO DE COMPRA</Link>
                    <Link to="/myData" className="link-solution button-menu-lateral sidebar-font border-button-sidebar-menu w-100 p-2">LISTA DE DESEJOS </Link>
                    <Link to="/myData" className="link-solution button-menu-lateral sidebar-font border-button-sidebar-menu w-100 p-2">SAIR </Link>

                </div>
            </div> */}

        </>
    )
}

export default Sidebar