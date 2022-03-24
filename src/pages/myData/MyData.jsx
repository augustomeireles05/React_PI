import './MyData.css'
import { Link } from 'react-router-dom'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/Button/Button'

import Input from '../../components/Input/Input'
import Label from '../../components/Input/Label'
import Subtittle from '../../components/Subtittle/Subtittle'
import SideBar from '../../components/Sidebar/Sidebar'


function MyData() {
    return (
        <>
             <Header/>

            <section>


                <article className="page-content container">
                    { /* coluna Menu */}
                    <div className=" row">
                        <div className=" d-flex justify-content-center d-none d-md-block col-md-3">
                            { /*responsividade menu*/}
                            <div className="column ms-3">

                                { /*Navbar*/}
                                <nav className=" navbar navbar-light mb-3 mt-0 pt-0 pb-2">
                                    {/* <div className="container-fluid d-block text-center"> */}
                                        <Subtittle menu="MENU"/>

                                    {/* </div> */}
                                
                                <SideBar></SideBar>


                                {/* <div className="btn-group-vertical background-container-subject me-3 shadow" role="group" aria-label="Vertical button group">
                                    <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu">
                                        <Link to="/myData" className="link-solution">MEUS DADOS</Link>
                                    </button>
                                    <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu">
                                        <Link to="/myOrder" className="link-solution">MEUS PEDIDOS</Link>
                                    </button>
                                    <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu">
                                        <Link to="/cart" className="link-solution">CARRINHO DE COMPRA</Link>
                                    </button>
                                    <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu">
                                        <Link to="/wishList" className="link-solution">LISTA DE DESEJOS</Link>
                                    </button>
                                    <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu">
                                        <Link to="/" className="link-solution">SAIR</Link>
                                    </button>
                                </div> */}
                                </nav>
                            </div>
                        </div>
                        {/* fim do menu lateral */}
                        <div className="col-9 ajusteFormulario">
                            {/* <div className=" text-center title col-12 ">
                                <span>MEUS DADOS</span>
                            </div> */}
                            <Subtittle subtitulo="MEUS DADOS"/>
                            { /* 1 Formulario*/}
                            <form>
                                <div className="row ajusteFormulario">

                                    <div className="col-12 inputsFormulario">
                                        <div className="mb-3">
                                            <Label label="Nome completo" for="nome"/>
                                            <Input type="text" aria-label="nome" id="nome"/>
                                        </div>

                                    </div>



                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <Label label="Email" for="email"/>
                                            <Input type="email" aria-label="email" id="email"/>
                                        </div>

                                    </div>


                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <Label label="CPF" for="cpf"/>
                                            <Input type="text" aria-label="cpf" id="cpf"/>
                                        </div>


                                    </div>

                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <Label label="Data de Nascimento" for="dtNascimento"/>
                                            <Input type="date" aria-label="dtNascimento" id="dtNascimento"/>

                                        </div>

                                    </div>


                                    <div className="col-6 col-md-4">
                                        <div className="mb-3">
                                            {/* <Link className="btn btn-warning mt-6 d-block float-md-end" to="#" role="button">
                                                SALVAR </Link> */}
                                                
                                            <Button link="" name="SALVAR" />    
                                        </div>


                                        

                                    </div>



                                </div>


                            </form>

                          
                            <Subtittle subtitulo="ALTERAR SENHA"/>
                            

                            { /*2 FORMULARIO*/}
                            <form>
                                <div className="row mb-5">
                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <Input type="password" aria-label="password" />
                                            <Label label="Informe sua senha atual"/>
                                        </div>

                                    </div>

                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <Input type="password" aria-label="password" />
                                            <Label label="Informe sua nova senha"/>

                                        </div>
                                    </div>


                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <Input type="password" aria-label="password" />
                                            <Label label="Confirme sua nova senha"/>

                                        </div>


                                    </div>


                                    <div className="col-6 col-md-5">
                                        <div className="mb-3">
                                            {/* <Link className="btn btn-warning mt-6 d-block float-md-end" to="#" role="button">
                                                MODIFICAR</Link> */}
                                             
                                            <Button link="" name="MODIFICAR" />   
                                        </div>

                                    </div>



                                </div>
                            </form>

                        </div>
                    </div>






                </article>

            </section >

            
             < Footer/>

        </>
    )
}

export default MyData