import React from 'react'
import './Sidebar.css'


import SidebarItem from '../../components/Sidebar/SidebarItem'
import ButtonTrigger from '../../components/Sidebar/ButtonTrigger'

function Sidebar() {
    return (
        <>  
            
            <div className="col-md-4 flex-row justify-content-center align-items-start text-center mt-0 px-0">
                <ButtonTrigger />
                <nav id="sidebarMenu"
                    className=" col-12 d-md-block bg-light sidebar collapse btn-group-vertical background-container-subject bg-white mt-0 mw-100">

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