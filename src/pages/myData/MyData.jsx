import './MyData.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'

function MyData() {
    return (
        <>


            <section>


                <article className="page-content container">
                    { /* coluna Menu */}
                    <div className="col-row">
                        <div className="col-3 d-md-block d-none">
                            { /*responsividade menu*/}
                            <div className="column ms-4">

                                { /*Navbar*/}
                                <nav className="navbar navbar-light border-bottom-menu titulo-menu mb-3 mt-0 pt-0 pb-2">
                                    <div className="container-fluid d-block text-center">
                                        <span>MENU</span>

                                    </div>
                                </nav>

                                <div className="btn-group-vertical background-container-subject me-3 shadow" role="group" aria-label="Vertical button group">
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
                        </div>

                        </div>
                    </div>
                    {/* fim do menu lateral */}


                                

                            </div>
                        

                        <div className="col-12 col-md-9 ajusteFormulario">


                            <div className=" text-center title col-12 ">
                                <span>MEUS DADOS</span>
                            </div>
                            { /* 1 Formulario*/}
                            <form>
                                <div className="row ajusteFormulario">

                                    <div className="col-12 col-md-6 inputsFormulario">
                                        <div className="mb-3">
                                            <input placeholder="Informe seu nome" type="email" className="form-control"
                                                id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>

                                    </div>


                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <input placeholder="Informe seu sobrenome" type="email" className="form-control"
                                                id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>

                                    </div>


                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <input placeholder="Informe seu e-mail" type="email" className="form-control"
                                                id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>

                                    </div>


                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <input placeholder="123 ***- *** 48" type="email" className="form-control"
                                                id="exampleInputEmail1" aria-describedby="emailHelp" />

                                        </div>


                                    </div>

                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <input placeholder="Data de Nascimento" type="email" className="form-control"
                                                id="exampleInputEmail1" aria-describedby="emailHelp" />

                                        </div>

                                    </div>


                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <Link className="btn btn-warning mt-6 d-block float-md-end" to="#" role="button">
                                                SALVAR </Link>
                                        </div>

                                    </div>



                                </div>


                            </form>

                            <div className=" text-center title col-12 ">
                                <span>ALTERAR SENHA</span>
                            </div>

                            { /*2 FORMULARIO*/}
                            <form>
                                <div className="row mb-5">
                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <input placeholder="INSIRA SUA SENHA ATUAL" type="email" className="form-control"
                                                id="exampleInputEmail1" aria-describedby="emailHelp" />

                                        </div>

                                    </div>

                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <input placeholder="INSIRA SUA NOVA SENHA" type="email" className="form-control"
                                                id="exampleInputEmail1" aria-describedby="emailHelp" />

                                        </div>
                                    </div>


                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <input placeholder="CONFIRME A NOVA SENHA" type="email" className="form-control"
                                                id="exampleInputEmail1" aria-describedby="emailHelp" />

                                        </div>


                                    </div>


                                    <div className="col-12">
                                        <div className="mb-3">
                                            <Link className="btn btn-warning mt-6 d-block float-md-end" to="#" role="button">
                                                MODIFICAR</Link>
                                        </div>

                                    </div>



                                </div>
                            </form>

                        </div>



                    


                </article>

            </section >

        </>
    )
}

export default MyData




