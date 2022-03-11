import React from 'react'
import { Link } from 'react-router-dom'
import './OrderResume.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function OrderResume() {
    return (
        <>
            
            <Header />
            <div className="container">

                <div className="row-col-md-12 resumo-pedido mb-5 mt-5">
                    <h1 className="resumo ps-5 pb-2 pt-2">RESUMO DO PEDIDO</h1>
                </div>

                <div className="row g-5 px-3">
                    {/* inicio do menu lateral */}
                    <div className="col-md-4 flex-row justify-content-center align-items-start text-center">

                        {/*Navbar*/}
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
                    {/* fim do menu lateral */}


                    {/* inicio da confirmação do pedido */}
                    <div className="col-md">
                        <div className="d-flex pedido-concluido justify-content-center flex-column mb-4">

                            <span className="titulo-principal text-center pb-2 mb-3">STATUS DO PEDIDO</span>


                            {/*<img src="img/img-resumo-compra/certificado-de-garantia.png" className="img-certificado" alt="pedido concluido"/>*/}

                            <div className="sucesso d-flex justify-content-center align-items-center m-3">
                            <h2 className="text-center titulo-sucesso-compra mb-0 me-1">PEDIDO REALIZADO COM SUCESSO!</h2>
                            {/*<img src="img/img-resumo-compra/checked.png" alt="sucesso" className="img-sucess"/>*/}
                            </div>

                            <p className="text-center numero-pedido">NÚMERO DO PEDIDO: XXXXXXX </p>
                        </div>

                        <div className="detalhes-pedido">
                            <div className="detalhes-pedido d-flex justify-content-center align-items-center mb-3">
                                <h2 className="titulo-detalhes-pedido me-2 mb-0">DETALHES DO PEDIDO</h2>
                                <Link to="" href="#">
                                    {/*<img src="img/img-resumo-compra/printer.png" alt="imprimir resumo do pedido"
                                    className="print"/>*/}
                                </Link>
                            </div>

                            <div className="row resumo-produto mb-3">
                                <h3 className="col-12 mb-2 pt-2">PRODUTO</h3>
                                <div className="produtos d-flex justify-content-around">
                                    <div className="produto col-7">
                                        <p className="nome-produto1">PORSCHE 911 CARRERA 2021</p>
                                        <p className="nome-produto2"> AUDI A5 SPORTBACK S-LINE 2019</p>

                                    </div>

                                    <div className="qtd col-5">
                                        <p className="qtd-produto1 border-start-1">QUANTIDADE: 03</p>
                                        <p className="qtd-produto2 border-start-1">QUANTIDADE: 01</p>
                                    </div>
                                </div>
                            </div>


                            <div className="row resumo-pgmt mb-3">
                                <h3 className="mb-2 pt-2">FORMA DE PAGAMENTO</h3>
                                <div className="d-flex justify-content-between">
                                    <p className="forma-pmgt me-5">CARTÃO DE CRÉDITO </p>
                                    <p className="num-cartao me-5">************5030</p>
                                    <p className="parcelamento me-5">3X DE R$ 133.383,33</p>
                                </div>
                            </div>

                            <div className="row resumo-endereco mb-3">
                                <h3 className="mb-2 pt-2">ENDEREÇO DE ENTREGA</h3>
                                <p> RUA PRAÇA ROBERTO PEDRO GOMES Nº 101 MORUMBI SÃO PAULO/SP CEP: 12332-032</p>
                            </div>

                            <div className="row data-pedido mb-3">
                                <h3 className="col-6 pt-2">DATA DO PEDIDO</h3>
                                <p className="col-6 text-center pt-2">DD/mm/yyyy</p>
                            </div>

                            <div className="row valor-total mb-5">
                                <h3 className="col-6 pt-2">VALOR TOTAL</h3>
                                <p className="col-6 text-center pt-2">R$400.150,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fim da confirmação do pedido */}
            <Footer />
        </>
    )
}

export default OrderResume