import './SchedulingDetails.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
//import Header from '../../components/header/Header'
//import Footer from '../../components/footer/Footer'

          

function schedulingDetails() {
    return (
        <>

          {/* <Header/> */}

            <div className="container">

                <div className="row-col-md-12 resumo-agendamento mt-5 mb-5">
                    <h1 className="resumo ps-5 pb-2 pt-2">RESUMO DO AGENDAMENTO</h1>
                </div>

                <div className="row g-5 px-3">
                    {/* inicio do menu lateral */}
                    <div className="col-md-4 flex-row justify-content-center text-center">


                        {/*Navbar*/}
                        <nav className="navbar navbar-light border-bottom-menu titulo-menu mb-3 mt-0 pt-0 pb-2">
                            <div className="container-fluid d-block text-center">
                                <span>MENU</span>
                            </div>
                        </nav>

                        <div className="btn-group-vertical background-container-subject me-3 shadow" role="group"
                            aria-label="Vertical button group">
                            <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><a
                                className="link-solution" to="/myData">MEUS DADOS</a></button>
                            <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><a
                                className="link-solution" to="/myOrder">MEUS PEDIDOS</a></button>
                            <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><a
                                className="link-solution" to="/cart">CARRINHO DE COMPRA</a></button>
                            <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><a
                                className="link-solution" to="/wishList">MEUS FAVORITOS</a></button>
                            <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><a
                                className="link-solution" to="/">SAIR</a></button>
                        </div>


                    </div>
                    {/* fim do menu lateral */}


                    {/* inicio da confirmação do pedido */}
                    <div className="col-md-8">
                        <div className="d-flex pedido-concluido justify-content-center flex-column mb-4">

                            <span className="titulo-pricipal text-center pb-2 mb-3">AGENDAMENTO</span>


                            {/* <img src="img/img-resumo-compra/certificado-de-garantia.png" className="img-certificado"
                                alt="agendamento concluido"> */}

                            <div className="sucesso d-flex justify-content-center align-items-center m-3">
                                <h2 className="text-center titulo-sucesso-agendamento mb-0 me-1">AGENDAMENTO REALIZADO COM SUCESSO!
                                </h2>
                                {/* <img src="img/img-resumo-compra/checked.png" alt="sucesso" className="img-sucess"> */}
                            </div>

                            <p className="text-center numero-pedido">PROTOCOLO DE AGENDAMENTO: XXXXXXXXXX </p>
                        </div>

                        <div className="detalhes-pedido">
                            <div className="detalhes-pedido d-flex justify-content-center align-items-center mb-3">
                                <h2 className="titulo-detalhes-agendamento me-2 mb-0">DETALHES DO AGENDAMENTO</h2>
                                <a to="#" />
                                {/* <img src="img/img-resumo-compra/printer.png" alt="imprimir resumo do pedido"
                                    className="print"</a> */}
                            </div>

                            <div className="row resumo-produto mb-3">
                                <h3 className="col-12 mb-2 pt-2 subtitulo">PRODUTO</h3>
                                <div className="produtos d-flex justify-content-around">
                                    <div className="produto col-7">
                                        <p className="nome-produto1">AUDI RS Q8 2021 AZUL</p>
                                    </div>

                                    <div className="qtd col-5">
                                        <p className="qtd-produto1 text-end">QTD: 01</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row data-agendamento mb-3">
                                <h3 className="subtitulo col-6 pt-2">DATA DO AGENDAMENTO</h3>
                                <p className="col-6 text-end pt-2">DD/mm/yyyy</p>
                            </div>

                            <div className="row valor-total mb-5">
                                <h3 className="subtitulo col-6 pt-2">VALOR DO BEM</h3>
                                <p className="col-6 text-end pt-2">R$400.150,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fim da confirmação do pedido */}

             {/* < Footer/> */}

        </>
    )
}

export default schedulingDetails

