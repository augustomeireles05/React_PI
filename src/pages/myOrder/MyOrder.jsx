import { Link } from 'react-router-dom'
import './MyOrder.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import Subtittle from '../../components/Subtittle/Subtittle'
// import Button from '../../components/Button/Button'
// import SupportButton from '../../components/Button/SupportButton'

import SchedulingIcon from '../../assets/images/MyOrder/andamento.png'
import Cancelstatusicon from '../../assets/images/MyOrder/cancelado.png'
import Deliveredicon from '../../assets/images/MyOrder/entregue.png'

import Audir8azul from '../../assets/images/MyOrder/Mercedes.jpg'
import MercedesAmgGt63 from '../../assets/images/MyOrder/MercedesBenz-AMG-GT63S2020.jpg'
import BmwX72021 from '../../assets/images/MyOrder/BMW-X7-2021.jpg'

function MyOrder() {
    return (
        <>
            {/* <Button link="/home" name="PRINCIPAL"/>
        <SupportButton link="/home" name="SECUNDARIO"/> */}
            <Header />
            <div className="container">
                <div className="row mb-3 mt-4">
                    <h1 className="titulo-pagina pb-3 pt-3 ps-5 text-center w-100">PÁGINA DE PEDIDOS</h1>
                </div>


                <div className="row justify-content-center g-5 px-3">
                    {/* inicio do menu lateral */}
                    <div className="col-md-4 flex-row justify-content-center text-center">

                        {/*Navbar*/}
                        <Subtittle menu="MENU" />

                        <Sidebar />
                    </div>
                    {/* fim do menu lateral */}


                    {/* inicio dos cards de pedidos */}
                    <div className="col-md rounded-1 mb-5">

                        <div className="d-flex justify-content-around titulo-menu mb-3 mt-0 pt-0 pb-4">
                            <div className="col-3 text-end text-md-center">
                                <span className="fs-6">PEDIDO</span>
                            </div>

                            <div className="col text-center">
                                <span className="fs-6 me-5 me-md-0">STATUS</span>
                            </div>

                            <div className="col text-center d-none d-md-none d-xl-block d-xxl-block">
                                <span className="fs-6">DATA</span>
                            </div>

                            <div className="col text-center d-none d-md-none d-xl-block d-xxl-block">
                                <span className="fs-6">TOTAL</span>
                            </div>
                        </div>



                        {/* acordeon pedido 1 */}
                        <div className="row accordion-item mb-3">
                            <h2 className="accordion-header p-0" id="flush-headingOne">
                                <button className="justify-content-center accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">

                                    <div className="col-3">
                                        <span className="ms-md-3">#43775</span>
                                    </div>

                                    <div className="col status-pedido d-flex align-items-center justify-content-center">
                                        <img src={SchedulingIcon} alt="agendado" className="figura-status" />
                                        <span className="ms-1">AGENDADO</span>
                                    </div>

                                    <div className="col dt-pedido text-sm-center d-none d-md-none d-xl-block d-xxl-block">
                                        <span className="ps-5">15/11/2021</span>
                                    </div>

                                    <div className="col valor-pedido text-end d-none d-md-none d-xl-block d-xxl-block">
                                        <span className="">R$ 930.000,00</span>
                                    </div>

                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    {/* item 1 do pedido 1 */}
                                    <div className="row justify-content-between">
                                        <div className="col-12 col-sm-12 col-lg-3 text-center mb-3 mb-sm-0 text-sm-center mb-sm-2">
                                            <img src={Audir8azul} alt="audi-r8-azul" className="img-pedido" />
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="d-flex flex-column">
                                                <span className="titulo-descricao text-center text-sm-center">DESCRIÇÃO ITENS</span>
                                                <span className="descricao text-center">AUDI RS Q8 2021 AZUL</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-2">
                                            <div className="d-flex flex-column text-sm-center">
                                                <span className="titulo-descricao text-center text-sm-center mt-4 mt-sm-0">COD</span>
                                                <span className="descricao text-center text-sm-center">0234</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-1">
                                            <div className="d-flex flex-column text-sm-center">
                                                <span className="titulo-descricao text-center text-sm-center mt-4 mt-sm-0">QUANTIDADE</span>
                                                <span className="descricao text-center text-sm-center">1</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-2">
                                            <div className="d-flex flex-column text-sm-center">
                                                <span className="titulo-descricao text-center text-sm-center mt-4 mt-sm-0">VALOR (R$)</span>
                                                <span className="descricao text-center text-sm-center">930.000,00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* fim do item 1 do pedido 1 */}


                                    {/* detalhes de pagamento */}
                                    <div className="row pagamento mt-5">
                                        <div className="col-sm">
                                            <div className="d-flex flex-column text-sm-end">
                                                <span className="titulo-data-pgmt text-start text-sm-end">DATA DO PAGAMENTO: </span>
                                                <span className="data-pgmt text-start text-sm-end">12/11/2021</span>
                                            </div>
                                        </div>
                                        {/* fim dos detalhes de pagamento */}
                                    </div>

                                    <div className="row entrega mt-5 d-block d-md-none">
                                        <div className="col-sm">
                                            <div className="d-flex flex-column text-sm-end">
                                                <span className="titulo-data-pgmt text-start text-sm-end">DATA DO PEDIDO</span>
                                                <span className="data-pgmt text-start text-sm-end">15/11/2021</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* acordeon pedido 2 */}
                        <div className="accordion accordion-flush" id="flush-headingTwo">
                            <div className="row accordion-item mb-3">
                                <h2 className="accordion-header p-0" id="flush-headingTwo">
                                    <button className="justify-content-center accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">

                                        <div className="col-3">
                                            <span className="ms-md-3">#73475</span>
                                        </div>

                                        <div className="col status-pedido d-flex align-items-center justify-content-center ms-1">
                                            <img src={Cancelstatusicon} alt="cancelado" className="figura-status me-1" />
                                            <span className="">CANCELADO</span>
                                        </div>

                                        <div className="col dt-pedido text-sm-center d-none d-md-none d-xl-block d-xxl-block">
                                            <span className="ps-5">25/12/2021</span>
                                        </div>

                                        <div className="col valor-pedido text-end d-none d-md-none d-xl-block d-xxl-block">
                                            <span className="">R$ 600.000,00</span>
                                        </div>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#flush-headingTwo">

                                    <div className="accordion-body">

                                        {/* item 1 do pedido 2 */}
                                        <div className="row justify-content-between">
                                            <div className="col-12 col-sm-12 col-lg-3 text-center mb-3 mb-sm-0 text-sm-center mb-sm-2">
                                                <img src={MercedesAmgGt63} alt="MercedesBenz-AMG-GT63-2020" className="img-pedido" />
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="d-flex flex-column">
                                                    <span className="titulo-descricao text-center text-sm-center">DESCRIÇÃO ITENS</span>
                                                    <span className="descricao text-center text-sm-center">MERCEDES BENZ AMG GT63 2020
                                                        BRANCO</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-2">
                                                <div className="d-flex flex-column text-sm-center">
                                                    <span className="titulo-descricao text-center text-sm-center mt-4 mt-sm-0">COD</span>
                                                    <span className="descricao text-center text-sm-center">0235</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-1">
                                                <div className="d-flex flex-column text-sm-center">
                                                    <span className="titulo-descricao text-center text-sm-center mt-4 mt-sm-0">QUANTIDADE</span>
                                                    <span className="descricao text-center text-sm-center">1</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-2 ">
                                                <div className="d-flex flex-column text-sm-center ">
                                                    <span className="titulo-descricao text-center text-sm-center mt-4 mt-sm-0">VALOR(R$)</span>
                                                    <span className="descricao  text-center text-sm-center">600.000,00</span>
                                                </div>
                                            </div>

                                            <div className="row entrega mt-5 d-block d-md-none">
                                                <div className="col-sm">
                                                    <div className="d-flex flex-column text-sm-end">
                                                        <span className="titulo-data-pgmt text-start text-sm-end">DATA DO PEDIDO</span>
                                                        <span className="data-pgmt text-start text-sm-end">25/12/2021</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* fim do acordeon pedido 2 */}


                        {/* acordeon pedido 3 */}
                        <div className="row accordion-item mb-3">
                            <h2 className="accordion-header p-0" id="flush-headingThree">
                                <button className="justify-content-center accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">

                                    <div className="col-3">
                                        <span className="ms-md-3">#43775</span>
                                    </div>

                                    <div className="col status-pedido d-flex align-items-center justify-content-center">
                                        <img src={Deliveredicon} alt="cancelado" className="figura-status" />
                                        <span className="ms-1">ENTREGUE</span>
                                    </div>

                                    <div className="col dt-pedido text-sm-center d-none d-md-none d-xl-block d-xxl-block">
                                        <span className="ps-5">15/11/2021</span>
                                    </div>

                                    <div className="col valor-pedido text-end d-none d-md-none d-xl-block d-xxl-block">
                                        <span className="text-start">R$ 780.000,00</span>
                                    </div>

                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    {/* item 1 do pedido 2 */}
                                    <div className="row justify-content-between">
                                        <div className="col-12 col-sm-12 col-lg-3 text-center mb-3 mb-sm-0 text-sm-center mb-sm-2">
                                            <img src={BmwX72021} alt="MercedesBenz AMG GT63 2020 Branco" className="img-pedido" />
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="d-flex flex-column">
                                                <span className="titulo-descricao text-center text-sm-center">DESCRIÇÃO ITENS</span>
                                                <span className="descricao text-center text-sm-center">BMW X7 2021</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-2">
                                            <div className="d-flex flex-column text-sm-center">
                                                <span className="titulo-descricao text-center text-sm-center mt-4 mt-sm-0">COD</span>
                                                <span className="descricao text-center text-sm-center">0236</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-1">
                                            <div className="d-flex flex-column text-sm-center">
                                                <span className="titulo-descricao text-center text-sm-center mt-4 mt-sm-0">QUANTIDADE</span>
                                                <span className="descricao text-center text-sm-center">1</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-2">
                                            <div className="d-flex flex-column text-sm-center">
                                                <span className="titulo-descricao text-center text-sm-center mt-4 mt-sm-0">VALOR(R$)</span>
                                                <span className="descricao text-center text-sm-center">780.000,00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* fim do item 1 do pedido 2 */}


                                    {/* detalhes de entrega */}
                                    <div className="row entrega mt-5">
                                        <div className="col-sm-10">
                                            <div className="d-flex flex-column">
                                                <span className="titulo-descricao-endereco ">ENDEREÇO DE ENTREGA</span>
                                                <span className="descricao-endereco">CEP: 12332-032<br />RUA PRAÇA ROBERTO PEDRO
                                                    GOMES Nº 101 - MORUMBI
                                                    (SÃO PAULO/SP)</span>
                                            </div>
                                        </div>

                                        <div className="col-sm">
                                            <div className="d-flex flex-column text-sm-center">
                                                <span className="titulo-descricao-data mt-5 mt-md-4 text-md-start mt-sm-0">DATA DE ENTREGA</span>
                                                <span className="descricao-data text-md-start">25/12/2021</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* fim dos detalhes de entrega */}


                                    {/* detalhes de pagamento */}
                                    <div className="row pagamento mt-5">
                                        <div className="col-sm-10">
                                            <div className="d-flex flex-column">
                                                <span className="titulo-descricao-pgmt text-md-start mt-sm-0">FORMA DE PAGAMENTO</span>
                                                <span className="descricao-pgmt text-md-start">TRANSFERÊNCIA BANCÁRIA</span>
                                            </div>
                                        </div>

                                        <div className="col-sm mt-4">
                                            <div className="d-flex flex-column text-sm-center">
                                                <span className="titulo-data-pgmt  text-md-start mt-sm-0 mt-md-4">DATA DO PAGAMENTO</span>
                                                <span className="data-pgmt text-md-start">10/11/2021</span>
                                            </div>
                                        </div>
                                        {/* fim dos detalhes de pagamento */}
                                    </div>


                                    {/* total do pedido que só aparecerá em tela de celular */}
                                    <div className="row mt-5 d-block d-md-block d-xl-none d-xxl-none">
                                        <div className="d-flex text-sm-center justify-content-between">
                                            <span className="titulo-data-pgmt">TOTAL</span>
                                            <span className="data-pgmt">R$ 780.000,00</span>
                                        </div>
                                    </div>
                                    {/*fim do total do pedido que só aparecerá em tela de celular */}


                                    {/* imprimir nf */}
                                    <div className="imprimir-nf mt-5 text-end">
                                        <Link to={"#"} className="text-decoration-none text-dark p-2 rounded-1 btn-nfe">Download da N-F Eletrônica</Link>
                                    </div>
                                    {/* fim do imprimir nf */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* fim dos cards de pedidos */}

            </div>

            <Footer />
        </>
    )
}

export default MyOrder