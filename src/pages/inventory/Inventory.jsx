import React from 'react'
import { Link } from 'react-router-dom';
import './Inventory.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SearchFilter from '../../components/SearchFilter/SearchFilter'

import ProductList from '../../components/ProductCard/ProductList'

import LamborghiniUrus from '../../assets/images/Inventory/LamborghiniUrus.jpg'
import LamborghiniUracan from '../../assets/images/Inventory/LamborghiniHuracan.jpg'
import BugattiChiron from '../../assets/images/Inventory/BugattiChiron.jpg'
import NissanGTR from '../../assets/images/Inventory/Nissan_GT-R.jpg'
import MercedesBenzClasseS from '../../assets/images/Inventory/Mercedes-BenzClasseS.jpg'
import MercedesBenzClasseG from '../../assets/images/Inventory/Mercedes-BenzClasseG.jpg'
import MercedesBenzAMGGTR from '../../assets/images/Inventory/Mercedes-BenzAMG-GT R.jpg'
import AstonMartinDB11 from '../../assets/images/Inventory/AstonMartinDB11.jpg'
import MercedesBenzAMGF12016 from '../../assets/images/Inventory/Mercedes-BenzAMG-F1-2016.jpg'
import BentleyContinentalGT3 from '../../assets/images/Inventory/BentleyContinentalGT3.jpg'
import BentleyMullinerBacalar from '../../assets/images/Inventory/BentleyMullinerBacalar.jpg'
import AresS1 from '../../assets/images/Inventory/AresS1.jpg'

import LogoDevcarsModal from '../../assets/images/Inventory/logo-rev01.jpeg'
import Button from '../../components/Button/Button'
import SupportButton from '../../components/Button/SupportButton';



function Inventory() {
    return (
        <>
            <Header />
            <div className="container">
                <SearchFilter />


                <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
                    {/* Inicio dos Cards */}

                    {/* card 1 */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-1">
                        {/* link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src={LamborghiniUrus} className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title titulo-card">Lamborghini Urus </h5>
                                    <p className="card-text text-center"><strong> R$ 3.000.000,00</strong></p>
                                    {/* <div className="btn mt-3 btn_buscar btn-detalhes mb-2" role="button">VER DETALHES</div> */}
                                    <Button link="#Mmodal-produto-1" name="VER DETALHES" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-2">
                        {/* link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src={BugattiChiron} className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title titulo-card">Bugatti Chiron</h5>
                                    <p className="card-text text-center"><strong> R$ 21.000.000,00 </strong></p>
                                    {/* <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div> */}
                                    <Button link="#Mmodal-produto-2" name="VER DETALHES" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-3">
                        {/* link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src={NissanGTR} className="card-img" alt="..." ></img>
                                <div className="card-body">
                                    <h5 className="card-title titulo-card">NissanGT-R</h5>
                                    <p className="card-text text-center"><strong> R$ 769.109,00 </strong></p>
                                    {/* <div className="btn  mt-3 btn_buscar" role="button">VER DETALHES</div> */}
                                    <Button link="#Mmodal-produto-3" name="VER DETALHES" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-4">
                        {/* link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src={MercedesBenzClasseS} className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title titulo-card">Mercedes-Benz Classe S (V223)</h5>
                                    <p className="card-text text-center"><strong>R$ 641.000,00</strong></p>
                                    {/* <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div> */}
                                    <Button link="#Mmodal-produto-4" name="VER DETALHES" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 5 */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-5">
                        {/* link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src={MercedesBenzClasseG} className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title titulo-card">Mercedes-Benz Classe G (W463) AMG</h5>
                                    <p className="card-text text-center"><strong> R$ 2.200.000,00 </strong></p>
                                    {/* <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div> */}
                                    <Button link="#Mmodal-produto-5" name="VER DETALHES" />
                                </div>
                            </div>
                        </div>
                    </div>{/* card 6 */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-6">
                        {/* link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src={MercedesBenzAMGGTR} className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title titulo-card">Mercedes-Benz AMG GT R</h5>
                                    <p className="card-text text-center"><strong>R$2.200.000,00</strong></p>
                                    {/* <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div> */}
                                    <Button link="#Mmodal-produto-6" name="VER DETALHES" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 7 */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-7">
                        {/* link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src={AstonMartinDB11} className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title titulo-card">Aston Martin DB11</h5>
                                    <p className="card-text text-center"> <strong> R$ 3.000.000,00 </strong></p>
                                    {/* <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div> */}
                                    <Button link="#Mmodal-produto-7" name="VER DETALHES" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  card 8  */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-8">
                        {/*link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src={MercedesBenzAMGF12016} className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title titulo-card">Mercedes-Benz AMG F1 2016</h5>
                                    <p className="card-text text-center"><strong> R$ 19.000.000,00 </strong></p>
                                    {/* <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div> */}
                                    <Button link="#Mmodal-produto-8" name="VER DETALHES" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  card 9  */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-9">
                        {/* link entre Modal e Card  */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src={BentleyMullinerBacalar} className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title titulo-card">Bentley Mulliner Bacalar</h5>
                                    <p className="card-text text-center"><strong> R$ 1.350.000,00 </strong></p>
                                    {/* <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div> */}
                                    <Button link="#Mmodal-produto-9" name="VER DETALHES" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 10  */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal"
                        data-bs-target="#modal-produto-10">
                        {/*  link entre Modal e Card  */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src={BentleyContinentalGT3} className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title titulo-card">Bentley Continental GT3</h5>
                                    <p className="card-text text-center"><strong> R$ 1.950.000,00 </strong></p>
                                    {/* <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div> */}
                                    <Button link="#Mmodal-produto-10" name="VER DETALHES" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  card 11  */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal"
                        data-bs-target="#modal-produto-11">
                        {/*  link entre Modal e Card  */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src={AresS1} className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title titulo-card">Ares S1</h5>
                                    <p className="card-text text-center"><strong> R$ 7.100.000,00 </strong></p>
                                    {/* <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div> */}
                                    <Button link="#Mmodal-produto-11" name="VER DETALHES" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 12  */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal"
                        data-bs-target="#modal-produto-12">
                        {/*  link entre Modal e Card  */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src={LamborghiniUracan} className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title titulo-card">Lamborghini Huracan </h5>
                                    <p className="card-text text-center"><strong> R$ 4.300.000,00 </strong></p>
                                    {/* <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div> */}
                                    <Button link="#Mmodal-produto-12" name="VER DETALHES" />
                                </div>
                            </div>
                        </div>
                    </div>
=======
                    
                    <ProductList />


                    {/*Inicio dos modais */}

                    {/*  Modal Card 1  */}
                    <div className="modal fade" id="modal-produto-1" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        {/* link entre Modal e Card */}
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content cores-modal">

                                <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">
                                    <h5>Lamborghini Urus 2020</h5>
                                    <button type="button" className="btn-close btn-modal-close fecharmodal justify-flex-end"
                                        data-bs-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-5 modal-mobily">
                                                <p> Vídeo 360° meramente ilustrativo</p>
                                                {/* <video className= "img-modal" controns autoplay playbackRate=0.1;
                                                style="max-width: 102%; padding-top: 5px;">
                                                <source src="./videos/Urus.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video> */}

                                                <img src={LamborghiniUrus} className="card-img img-modal"
                                                    alt="..." />
                                            </div>


                                            <div className="col-7 modal-mobily2">
                                                <h3 className="info-gerais1">Ficha Técnica</h3>
                                                <ul className="lista-modal info-gerais2 linhas-modal">
                                                    <li className="">
                                                        <span>COR:</span>
                                                        <span>AMARELA</span>

                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>KM:</span>
                                                        <span>31.106</span>
                                                    </li>
                                                    <li>
                                                        <span>CAMBIO:</span>
                                                        <span>PDK</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>POTENCIA:</span>
                                                        <span>350 cv.</span>
                                                    </li>
                                                    <li>
                                                        <span>VALOR (R$):</span>
                                                        <span>R$ 3.000.000,00</span>
                                                    </li>
                                                </ul>
                                                <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                <p className="alinhamento_paragrafo  info-gerais2">Cambio PDK de 8 marchas e dupla embreagem,
                                                    tração integral,
                                                    modos E,
                                                    Híbrido, Sport e Sport Plus, eixo traseiro direcional,
                                                    controle de chassi 4D, suspensão pneumática, pacote Sport
                                                    Chrono, escapamento com seletor de ronco, carregador
                                                    universal Porsche AC com mala de transporte e suporte
                                                    de parede básico, chave Keyless, interior em couro
                                                    caramelo com acabamento em fibra de carbono, Black
                                                    Piano e alumínio, teto revestido em alcantara, painel
                                                    de instrumentos em TFT, ar condicionado digital Quad
                                                    Zone, soleiras e acabamentos iluminados, cortinas
                                                    laterais e traseira elétricas, teto solar duplo,
                                                    portas Soft Close, porta malas elétrico, aerofólio
                                                    retrátil.</p>
                                            </div>

                                            <div className="container thiers">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <div id="carouselExampleControls "
                                                            className="carousel slide logo_marcas" data-bs-ride="carousel">
                                                            <div
                                                                className="carousel-inner carosel-modal  row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                                                                <div className="carousel-item active">

                                                                    <img src={LamborghiniUrus}
                                                                        className="d-block w-100" alt="..." width="5%" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={LamborghiniUrus}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={LamborghiniUrus}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={LamborghiniUrus}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={LamborghiniUrus}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                            </div>
                                                            <button className="carousel-control-prev" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="prev">
                                                                <span className="carousel-control-prev-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="next">
                                                                <span className="carousel-control-next-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Next</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer modalfooter">
                                                <div className="row">
                                                    <div className="col-10 modal-mobily3 text-center mb-3">
                                                    <img className="logo-modal" src={LogoDevcarsModal} alt="" />
                                                    </div>
                                                    <div className="col-1 modal-mobily3">

                                                        {/* <button type="button"
                                                            className="btn btn-secondary btn-modal-footer"><Link to="/checkoutScheduling" className="nav-link text-black">Agendar
                                                                visita </Link></button> */}
                                                    <SupportButton link="/checkoutScheduling" name="AGENDAR VISITA"/>            

                                                    </div>
                                                </div>
                                            </div>

                            </div>
                        </div>
                    </div>

                    {/*  Modal Card 2  */}

                    <div className="modal fade " id="modal-produto-2" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        {/*  link entre Modal e Card */}
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content cores-modal">

                                <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">
                                    <h5>Bugatti Chiron</h5>
                                    <button type="button" className="btn-close btn-modal-close fecharmodal justify-flex-end"
                                        data-bs-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-5 modal-mobily">
                                                <p> Vídeo 360° meramente ilustrativo</p>
                                                {/* <video className= "img-modal" controns autoplay playbackRate=0.1;
                                                style="max-width: 102%; padding-top: 5px;">
                                                <source src="./videos/Bugatti Chiron.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video> */}

                                                <img src={BugattiChiron} className="card-img img-modal"
                                                    alt="..." />
                                            </div>

                                            <div className="col-7 modal-mobily2">
                                                <h3 className="info-gerais1">Ficha Técnica</h3>
                                                <ul className="lista-modal info-gerais2 linhas-modal">
                                                    <li>
                                                        <span>COR:</span>
                                                        <span>AZUL</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>KM:</span>
                                                        <span>31.106</span>
                                                    </li>
                                                    <li>
                                                        <span>CAMBIO:</span>
                                                        <span>PDK</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>POTENCIA:</span>
                                                        <span>350 cv + 96 cv = total de 380 cv.</span>
                                                    </li>
                                                    <li>
                                                        <span>VALOR (R$):</span>
                                                        <span>21.000.000,00</span>
                                                    </li>
                                                </ul>
                                                <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                <p className="alinhamento_paragrafo  info-gerais2">Cambio PDK de 8 marchas e dupla embreagem,
                                                    tração integral,
                                                    modos E,
                                                    Híbrido, Sport e Sport Plus, eixo traseiro direcional,
                                                    controle de chassi 4D, suspensão pneumática, pacote Sport
                                                    Chrono, escapamento com seletor de ronco, carregador
                                                    universal Porsche AC com mala de transporte e suporte
                                                    de parede básico, chave Keyless, interior em couro
                                                    caramelo com acabamento em fibra de carbono, Black
                                                    Piano e alumínio, teto revestido em alcantara, painel
                                                    de instrumentos em TFT, ar condicionado digital Quad
                                                    Zone, soleiras e acabamentos iluminados, cortinas
                                                    laterais e traseira elétricas, teto solar duplo,
                                                    portas Soft Close, porta malas elétrico, aerofólio
                                                    retrátil.</p>
                                            </div>

                                            <div className="container">
                                                <div className="row ">
                                                    <div className="col-5  ">
                                                        <div id="carouselExampleControls "
                                                            className="carousel slide logo_marcas" data-bs-ride="carousel">
                                                            <div
                                                                className="carousel-inner carosel-modal  row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                                                                <div className="carousel-item active">

                                                                    <img src={BugattiChiron}
                                                                        className="d-block w-100" alt="..." width="5%" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={BugattiChiron}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={BugattiChiron}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={BugattiChiron}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={BugattiChiron}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                            </div>
                                                            <button className="carousel-control-prev" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="prev">
                                                                <span className="carousel-control-prev-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="next">
                                                                <span className="carousel-control-next-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Next</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer modalfooter">
                                                <div className="row">
                                                    <div className="col-10 modal-mobily3 text-center mb-3">
                                                    <img className="logo-modal" src={LogoDevcarsModal} alt="" />
                                                    </div>
                                                    <div className="col-1 modal-mobily3">

                                                        {/* <button type="button"
                                                            className="btn btn-secondary btn-modal-footer"><Link to="/checkoutScheduling" className="nav-link text-black">Agendar
                                                                visita </Link></button> */}
                                                    <SupportButton link="/checkoutScheduling" name="AGENDAR VISITA"/>            

                                                    </div>
                                                </div>
                                            </div>

                            </div>
                        </div>
                    </div>
                    {/*  Modal Card 3  */}

                    <div className="modal fade " id="modal-produto-3" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        {/* link entre Modal e Card  */}
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content cores-modal">

                                <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">
                                    <h5>Nissan GT-R</h5>
                                    <button type="button" className="btn-close btn-modal-close fecharmodal justify-flex-end"
                                        data-bs-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-5 modal-mobily">
                                                <p> Vídeo 360° meramente ilustrativo</p>
                                                {/* <video className= "img-modal" controns autoplay playbackRate=0.1;
                                                style="max-width: 102%; padding-top: 5px;">
                                                <source src="./videos/Nissan GTR -2020.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video> */}

                                                <img src={NissanGTR} className="card-img img-modal"
                                                    alt="..." />
                                            </div>

                                            <div className="col-7 modal-mobily2">
                                                <h3 className="info-gerais1">Ficha Técnica</h3>
                                                <ul className="lista-modal info-gerais2 linhas-modal">
                                                    <li>
                                                        <span>COR:</span>
                                                        <span>AZUL</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>KM:</span>
                                                        <span>31.106</span>
                                                    </li>
                                                    <li>
                                                        <span>CAMBIO:</span>
                                                        <span>PDK</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>POTENCIA:</span>
                                                        <span>350 cv + 96 cv = total de 380 cv.</span>
                                                    </li>
                                                    <li>
                                                        <span>VALOR (R$):</span>
                                                        <span>769.109,00</span>
                                                    </li>
                                                </ul>
                                                <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                <p className="alinhamento_paragrafo  info-gerais2">Cambio PDK de 8 marchas e dupla embreagem,
                                                    tração integral,
                                                    modos E,
                                                    Híbrido, Sport e Sport Plus, eixo traseiro direcional,
                                                    controle de chassi 4D, suspensão pneumática, pacote Sport
                                                    Chrono, escapamento com seletor de ronco, carregador
                                                    universal Porsche AC com mala de transporte e suporte
                                                    de parede básico, chave Keyless, interior em couro
                                                    caramelo com acabamento em fibra de carbono, Black
                                                    Piano e alumínio, teto revestido em alcantara, painel
                                                    de instrumentos em TFT, ar condicionado digital Quad
                                                    Zone, soleiras e acabamentos iluminados, cortinas
                                                    laterais e traseira elétricas, teto solar duplo,
                                                    portas Soft Close, porta malas elétrico, aerofólio
                                                    retrátil.</p>
                                            </div>

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-5  ">
                                                        <div id="carouselExampleControls "
                                                            className="carousel slide logo_marcas" data-bs-ride="carousel">
                                                            <div
                                                                className="carousel-inner carosel-modal  row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                                                                <div className="carousel-item active">

                                                                    <img src={NissanGTR}
                                                                        className="d-block w-100" alt="..." width="5%" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={NissanGTR}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={NissanGTR}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={NissanGTR}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={NissanGTR}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                            </div>
                                                            <button className="carousel-control-prev" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="prev">
                                                                <span className="carousel-control-prev-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="next">
                                                                <span className="carousel-control-next-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Next</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer modalfooter">
                                                <div className="row">
                                                    <div className="col-10 modal-mobily3 text-center mb-3">
                                                    <img className="logo-modal" src={LogoDevcarsModal} alt="" />
                                                    </div>
                                                    <div className="col-1 modal-mobily3">

                                                        {/* <button type="button"
                                                            className="btn btn-secondary btn-modal-footer"><Link to="/checkoutScheduling" className="nav-link text-black">Agendar
                                                                visita </Link></button> */}
                                                    <SupportButton link="/checkoutScheduling" name="COMPRAR"/>            

                                                    </div>
                                                </div>
                                            </div>

                            </div>
                        </div>
                    </div>

                    {/*  Modal Card 4  */}

                    <div className="modal fade " id="modal-produto-4" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        {/* link entre Modal e Card */}
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content cores-modal">

                                <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">
                                    <h5>Mercedes-Benz Classe S</h5>
                                    <button type="button" className="btn-close btn-modal-close fecharmodal justify-flex-end"
                                        data-bs-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-5 modal-mobily">
                                                <p> Vídeo 360° meramente ilustrativo</p>
                                                {/* <video className= "img-modal" controns autoplay playbackRate=0.1;
                                                style="max-width: 102%; padding-top: 5px;">
                                                <source src="./videos/CLASSSE G.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video> */}

                                                <img src={MercedesBenzClasseS} className="card-img img-modal"
                                                    alt="..." />
                                            </div>

                                            <div className="col-7 modal-mobily2">
                                                <h3 className="info-gerais1">Ficha Técnica</h3>
                                                <ul className="lista-modal info-gerais2 linhas-modal">
                                                    <li>
                                                        <span>COR:</span>
                                                        <span>AZUL</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>KM:</span>
                                                        <span>31.106</span>
                                                    </li>
                                                    <li>
                                                        <span>CAMBIO:</span>
                                                        <span>PDK</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>POTENCIA:</span>
                                                        <span>350 cv + 96 cv = total de 380 cv.</span>
                                                    </li>
                                                    <li>
                                                        <span>VALOR (R$):</span>
                                                        <span>641.000,00</span>
                                                    </li>
                                                </ul>
                                                <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                <p className="alinhamento_paragrafo  info-gerais2">Cambio PDK de 8 marchas e dupla embreagem,
                                                    tração integral,
                                                    modos E,
                                                    Híbrido, Sport e Sport Plus, eixo traseiro direcional,
                                                    controle de chassi 4D, suspensão pneumática, pacote Sport
                                                    Chrono, escapamento com seletor de ronco, carregador
                                                    universal Porsche AC com mala de transporte e suporte
                                                    de parede básico, chave Keyless, interior em couro
                                                    caramelo com acabamento em fibra de carbono, Black
                                                    Piano e alumínio, teto revestido em alcantara, painel
                                                    de instrumentos em TFT, ar condicionado digital Quad
                                                    Zone, soleiras e acabamentos iluminados, cortinas
                                                    laterais e traseira elétricas, teto solar duplo,
                                                    portas Soft Close, porta malas elétrico, aerofólio
                                                    retrátil.</p>
                                            </div>

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-5  ">
                                                        <div id="carouselExampleControls "
                                                            className="carousel slide logo_marcas" data-bs-ride="carousel">
                                                            <div
                                                                className="carousel-inner carosel-modal  row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                                                                <div className="carousel-item active">

                                                                    <img src={MercedesBenzClasseS}
                                                                        className="d-block w-100" alt="..." width="5%" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={MercedesBenzClasseS}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={MercedesBenzClasseS}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={MercedesBenzClasseS}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={MercedesBenzClasseS}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                            </div>
                                                            <button className="carousel-control-prev" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="prev">
                                                                <span className="carousel-control-prev-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="next">
                                                                <span className="carousel-control-next-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Next</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer modalfooter">
                                                <div className="row">
                                                    <div className="col-10 modal-mobily3 text-center mb-3">
                                                    <img className="logo-modal" src={LogoDevcarsModal} alt="" />
                                                    </div>
                                                    <div className="col-1 modal-mobily3">

                                                        {/* <button type="button"
                                                            className="btn btn-secondary btn-modal-footer"><Link to="/checkoutScheduling" className="nav-link text-black">Agendar
                                                                visita </Link></button> */}
                                                    <SupportButton link="/checkoutScheduling" name="COMPRAR"/>            

                                                    </div>
                                                </div>
                                            </div>

                            </div>
                        </div>
                    </div>

                    {/* Modal Card 5   */}

                    <div className="modal fade " id="modal-produto-5" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        {/*link entre Modal e Card */}
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content cores-modal">

                                <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">
                                    <h5>Mercedes-Benz Classe G</h5>
                                    <button type="button" className="btn-close btn-modal-close fecharmodal justify-flex-end"
                                        data-bs-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-5 modal-mobily">
                                                <p> Vídeo 360° meramente ilustrativo</p>
                                                {/* <video className= "img-modal" controns autoplay playbackRate=0.1;
                                                style="max-width: 102%; padding-top: 5px;">
                                                <source src="./videos/CLASSSE G.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video> */}

                                                <img src={MercedesBenzClasseG} className="card-img img-modal"
                                                    alt="..." />
                                            </div>

                                            <div className="col-7 modal-mobily2">
                                                <h3 className="info-gerais1">Ficha Técnica</h3>
                                                <ul className="lista-modal info-gerais2 linhas-modal">
                                                    <li>
                                                        <span>COR:</span>
                                                        <span>AZUL</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>KM:</span>
                                                        <span>31.106</span>
                                                    </li>
                                                    <li>
                                                        <span>CAMBIO:</span>
                                                        <span>PDK</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>POTENCIA:</span>
                                                        <span>350 cv + 96 cv = total de 380 cv.</span>
                                                    </li>
                                                    <li>
                                                        <span>VALOR (R$):</span>
                                                        <span>2.200.000,00</span>
                                                    </li>
                                                </ul>
                                                <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                <p className="alinhamento_paragrafo  info-gerais2">Cambio PDK de 8 marchas e dupla embreagem,
                                                    tração integral,
                                                    modos E,
                                                    Híbrido, Sport e Sport Plus, eixo traseiro direcional,
                                                    controle de chassi 4D, suspensão pneumática, pacote Sport
                                                    Chrono, escapamento com seletor de ronco, carregador
                                                    universal Porsche AC com mala de transporte e suporte
                                                    de parede básico, chave Keyless, interior em couro
                                                    caramelo com acabamento em fibra de carbono, Black
                                                    Piano e alumínio, teto revestido em alcantara, painel
                                                    de instrumentos em TFT, ar condicionado digital Quad
                                                    Zone, soleiras e acabamentos iluminados, cortinas
                                                    laterais e traseira elétricas, teto solar duplo,
                                                    portas Soft Close, porta malas elétrico, aerofólio
                                                    retrátil.</p>
                                            </div>

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-5  ">
                                                        <div id="carouselExampleControls "
                                                            className="carousel slide logo_marcas" data-bs-ride="carousel">
                                                            <div
                                                                className="carousel-inner carosel-modal  row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                                                                <div className="carousel-item active">

                                                                    <img src={MercedesBenzClasseG}
                                                                        className="d-block w-100" alt="..." width="5%" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={MercedesBenzClasseG}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={MercedesBenzClasseG}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={MercedesBenzClasseG}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={MercedesBenzClasseG}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                            </div>
                                                            <button className="carousel-control-prev" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="prev">
                                                                <span className="carousel-control-prev-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="next">
                                                                <span className="carousel-control-next-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Next</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer modalfooter">
                                                <div className="row">
                                                    <div className="col-10 modal-mobily3 text-center mb-3">
                                                    <img className="logo-modal" src={LogoDevcarsModal} alt="" />
                                                    </div>
                                                    <div className="col-1 modal-mobily3">

                                                        {/* <button type="button"
                                                            className="btn btn-secondary btn-modal-footer"><Link to="/checkoutScheduling" className="nav-link text-black">Agendar
                                                                visita </Link></button> */}
                                                    <SupportButton link="/checkoutScheduling" name="AGENDAR VISITA"/>            

                                                    </div>
                                                </div>
                                            </div>

                            </div>
                        </div>
                    </div>

                    {/*  Modal Card 6   */}

                    <div className="modal fade " id="modal-produto-6" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        {/*  link entre Modal e Card  */}
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content cores-modal">

                                <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">
                                    <h5>Mercedes-Benz AMG GT R</h5>
                                    <button type="button" className="btn-close btn-modal-close fecharmodal justify-flex-end"
                                        data-bs-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-5 modal-mobily">
                                                <p> Vídeo 360° meramente ilustrativo</p>
                                                {/* <video className= "img-modal" controns autoplay playbackRate=0.1;
                                                style="max-width: 102%; padding-top: 5px;">
                                                <source src="./videos/AMG GT R.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video> */}

                                                <img src={MercedesBenzAMGGTR} className="card-img img-modal"
                                                    alt="..." />
                                            </div>

                                            <div className="col-7 modal-mobily2">
                                                <h3 className="info-gerais1">Ficha Técnica</h3>
                                                <ul className="lista-modal info-gerais2 linhas-modal">
                                                    <li>
                                                        <span>COR:</span>
                                                        <span>AZUL</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>KM:</span>
                                                        <span>31.106</span>
                                                    </li>
                                                    <li>
                                                        <span>CAMBIO:</span>
                                                        <span>PDK</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>POTENCIA:</span>
                                                        <span>350 cv + 96 cv = total de 380 cv.</span>
                                                    </li>
                                                    <li>
                                                        <span>VALOR (R$):</span>
                                                        <span>2.200.000,00</span>
                                                    </li>
                                                </ul>
                                                <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                <p className="alinhamento_paragrafo  info-gerais2">Cambio PDK de 8 marchas e dupla embreagem,
                                                    tração integral,
                                                    modos E,
                                                    Híbrido, Sport e Sport Plus, eixo traseiro direcional,
                                                    controle de chassi 4D, suspensão pneumática, pacote Sport
                                                    Chrono, escapamento com seletor de ronco, carregador
                                                    universal Porsche AC com mala de transporte e suporte
                                                    de parede básico, chave Keyless, interior em couro
                                                    caramelo com acabamento em fibra de carbono, Black
                                                    Piano e alumínio, teto revestido em alcantara, painel
                                                    de instrumentos em TFT, ar condicionado digital Quad
                                                    Zone, soleiras e acabamentos iluminados, cortinas
                                                    laterais e traseira elétricas, teto solar duplo,
                                                    portas Soft Close, porta malas elétrico, aerofólio
                                                    retrátil.</p>
                                            </div>

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-5  ">
                                                        <div id="carouselExampleControls "
                                                            className="carousel slide logo_marcas" data-bs-ride="carousel">
                                                            <div
                                                                className="carousel-inner carosel-modal  row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                                                                <div className="carousel-item active">

                                                                    <img src={MercedesBenzAMGGTR}
                                                                        className="d-block w-100" alt="..." width="5%" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={MercedesBenzAMGGTR}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={{MercedesBenzAMGGTR}}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={MercedesBenzAMGGTR}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={MercedesBenzAMGGTR}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                            </div>
                                                            <button className="carousel-control-prev" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="prev">
                                                                <span className="carousel-control-prev-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="next">
                                                                <span className="carousel-control-next-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Next</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer modalfooter">
                                                <div className="row">
                                                    <div className="col-10 modal-mobily3 text-center mb-3">
                                                    <img className="logo-modal" src={LogoDevcarsModal} alt="" />
                                                    </div>
                                                    <div className="col-1 modal-mobily3">

                                                        {/* <button type="button"
                                                            className="btn btn-secondary btn-modal-footer"><Link to="/checkoutScheduling" className="nav-link text-black">Agendar
                                                                visita </Link></button> */}
                                                    <SupportButton link="/checkoutScheduling" name="AGENDAR VISITA"/>            

                                                    </div>
                                                </div>
                                            </div>

                            </div>
                        </div>
                    </div>

                    {/*  Modal Card 7  */}

                    <div className="modal fade " id="modal-produto-7" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        {/* link entre Modal e Card */}
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content cores-modal">

                                <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">
                                    <h5>Aston Martin DB11</h5>
                                    <button type="button" className="btn-close btn-modal-close fecharmodal justify-flex-end"
                                        data-bs-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-5 modal-mobily">
                                                <p> Vídeo 360° meramente ilustrativo</p>
                                                {/* <video className= "img-modal" controns autoplay playbackRate=0.1;
                                                style="max-width: 102%; padding-top: 5px;">
                                                <source src="./videos/DB-11.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video> */}

                                                <img src={AstonMartinDB11} className="card-img img-modal"
                                                    alt="..." />
                                            </div>

                                            <div className="col-7 modal-mobily2">
                                                <h3 className="info-gerais1">Ficha Técnica</h3>
                                                <ul className="lista-modal info-gerais2 linhas-modal">
                                                    <li>
                                                        <span>COR:</span>
                                                        <span>AZUL</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>KM:</span>
                                                        <span>31.106</span>
                                                    </li>
                                                    <li>
                                                        <span>CAMBIO:</span>
                                                        <span>PDK</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>POTENCIA:</span>
                                                        <span>350 cv + 96 cv = total de 380 cv.</span>
                                                    </li>
                                                    <li>
                                                        <span>VALOR (R$):</span>
                                                        <span>3.000.000,00</span>
                                                    </li>
                                                </ul>
                                                <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                <p className="alinhamento_paragrafo  info-gerais2">Cambio PDK de 8 marchas e dupla embreagem,
                                                    tração integral,
                                                    modos E,
                                                    Híbrido, Sport e Sport Plus, eixo traseiro direcional,
                                                    controle de chassi 4D, suspensão pneumática, pacote Sport
                                                    Chrono, escapamento com seletor de ronco, carregador
                                                    universal Porsche AC com mala de transporte e suporte
                                                    de parede básico, chave Keyless, interior em couro
                                                    caramelo com acabamento em fibra de carbono, Black
                                                    Piano e alumínio, teto revestido em alcantara, painel
                                                    de instrumentos em TFT, ar condicionado digital Quad
                                                    Zone, soleiras e acabamentos iluminados, cortinas
                                                    laterais e traseira elétricas, teto solar duplo,
                                                    portas Soft Close, porta malas elétrico, aerofólio
                                                    retrátil.</p>
                                            </div>

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-5  ">
                                                        <div id="carouselExampleControls "
                                                            className="carousel slide logo_marcas" data-bs-ride="carousel">
                                                            <div
                                                                className="carousel-inner carosel-modal  row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                                                                <div className="carousel-item active">

                                                                    <img src={AstonMartinDB11}
                                                                        className="d-block w-100" alt="..." width="5%" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={AstonMartinDB11}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={AstonMartinDB11}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={AstonMartinDB11}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={AstonMartinDB11}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                            </div>
                                                            <button className="carousel-control-prev" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="prev">
                                                                <span className="carousel-control-prev-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="next">
                                                                <span className="carousel-control-next-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Next</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer modalfooter">
                                                <div className="row">
                                                    <div className="col-10 modal-mobily3 text-center mb-3">
                                                    <img className="logo-modal" src={LogoDevcarsModal} alt="" />
                                                    </div>
                                                    <div className="col-1 modal-mobily3">

                                                        {/* <button type="button"
                                                            className="btn btn-secondary btn-modal-footer"><Link to="/checkoutScheduling" className="nav-link text-black">Agendar
                                                                visita </Link></button> */}
                                                    <SupportButton link="/checkoutScheduling" name="AGENDAR VISITA"/>            

                                                    </div>
                                                </div>
                                            </div>

                            </div>
                        </div>
                    </div>

                    {/*Modal Card 8  */}

                    <div className="modal fade " id="modal-produto-8" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        {/* link entre Modal e Card  */}
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content cores-modal">

                                <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">
                                    <h5>Mercedes-Benz AMG F1 2016</h5>
                                    <button type="button" className="btn-close btn-modal-close fecharmodal justify-flex-end"
                                        data-bs-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-5 modal-mobily">
                                                <p> Vídeo 360° meramente ilustrativo</p>
                                                {/* <video className= "img-modal" controns autoplay playbackRate=0.1;
                                                style="max-width: 102%; padding-top: 5px;">
                                                <source src="./videos/F1.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video> */}

                                                <img src={MercedesBenzAMGF12016} className="card-img img-modal"
                                                    alt="..." />
                                            </div>

                                            <div className="col-7 modal-mobily2">
                                                <h3 className="info-gerais1">Ficha Técnica</h3>
                                                <ul className="lista-modal info-gerais2 linhas-modal">
                                                    <li>
                                                        <span>COR:</span>
                                                        <span>AZUL</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>KM:</span>
                                                        <span>31.106</span>
                                                    </li>
                                                    <li>
                                                        <span>CAMBIO:</span>
                                                        <span>PDK</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>POTENCIA:</span>
                                                        <span>350 cv + 96 cv = total de 380 cv.</span>
                                                    </li>
                                                    <li>
                                                        <span>VALOR (R$):</span>
                                                        <span>19.000.000,00</span>
                                                    </li>
                                                </ul>
                                                <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                <p className="alinhamento_paragrafo  info-gerais2">Cambio PDK de 8 marchas e dupla embreagem,
                                                    tração integral,
                                                    modos E,
                                                    Híbrido, Sport e Sport Plus, eixo traseiro direcional,
                                                    controle de chassi 4D, suspensão pneumática, pacote Sport
                                                    Chrono, escapamento com seletor de ronco, carregador
                                                    universal Porsche AC com mala de transporte e suporte
                                                    de parede básico, chave Keyless, interior em couro
                                                    caramelo com acabamento em fibra de carbono, Black
                                                    Piano e alumínio, teto revestido em alcantara, painel
                                                    de instrumentos em TFT, ar condicionado digital Quad
                                                    Zone, soleiras e acabamentos iluminados, cortinas
                                                    laterais e traseira elétricas, teto solar duplo,
                                                    portas Soft Close, porta malas elétrico, aerofólio
                                                    retrátil.</p>
                                            </div>

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-5  ">
                                                        <div id="carouselExampleControls "
                                                            className="carousel slide logo_marcas" data-bs-ride="carousel">
                                                            <div
                                                                className="carousel-inner carosel-modal  row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                                                                <div className="carousel-item active">

                                                                    <img src={MercedesBenzAMGF12016}
                                                                        className="d-block w-100" alt="..." width="5%" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={MercedesBenzAMGF12016}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={MercedesBenzAMGF12016}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={MercedesBenzAMGF12016}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={MercedesBenzAMGF12016}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                            </div>
                                                            <button className="carousel-control-prev" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="prev">
                                                                <span className="carousel-control-prev-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="next">
                                                                <span className="carousel-control-next-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Next</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer modalfooter">
                                                <div className="row">
                                                    <div className="col-10 modal-mobily3 text-center mb-3">
                                                    <img className="logo-modal" src={LogoDevcarsModal} alt="" />
                                                    </div>
                                                    <div className="col-1 modal-mobily3">

                                                        {/* <button type="button"
                                                            className="btn btn-secondary btn-modal-footer"><Link to="/checkoutScheduling" className="nav-link text-black">Agendar
                                                                visita </Link></button> */}
                                                    <SupportButton link="/checkoutScheduling" name="AGENDAR VISITA"/>            

                                                    </div>
                                                </div>
                                            </div>

                            </div>
                        </div>
                    </div>

                    {/* Modal Card 9  */}

                    <div className="modal fade " id="modal-produto-9" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        {/*link entre Modal e Card */}
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content cores-modal">

                                <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">
                                    <h5>Bentley Mulliner Bacalar</h5>
                                    <button type="button" className="btn-close btn-modal-close fecharmodal justify-flex-end"
                                        data-bs-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-5 modal-mobily">
                                                <p> Vídeo 360° meramente ilustrativo</p>
                                                {/* <video className= "img-modal" controns autoplay playbackRate=0.1;
                                                style="max-width: 102%; padding-top: 5px;">
                                                <source src="./videos/MULLINER.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video> */}

                                                <img src={BentleyMullinerBacalar} className="card-img img-modal"
                                                    alt="..." />
                                            </div>

                                            <div className="col-7 modal-mobily2">
                                                <h3 className="info-gerais1">Ficha Técnica</h3>
                                                <ul className="lista-modal info-gerais2 linhas-modal">
                                                    <li>
                                                        <span>COR:</span>
                                                        <span>AZUL</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>KM:</span>
                                                        <span>31.106</span>
                                                    </li>
                                                    <li>
                                                        <span>CAMBIO:</span>
                                                        <span>PDK</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>POTENCIA:</span>
                                                        <span>350 cv + 96 cv = total de 380 cv.</span>
                                                    </li>
                                                    <li>
                                                        <span>VALOR (R$):</span>
                                                        <span>1.350.000,00</span>
                                                    </li>
                                                </ul>
                                                <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                <p className="alinhamento_paragrafo  info-gerais2">Cambio PDK de 8 marchas e dupla embreagem,
                                                    tração integral,
                                                    modos E,
                                                    Híbrido, Sport e Sport Plus, eixo traseiro direcional,
                                                    controle de chassi 4D, suspensão pneumática, pacote Sport
                                                    Chrono, escapamento com seletor de ronco, carregador
                                                    universal Porsche AC com mala de transporte e suporte
                                                    de parede básico, chave Keyless, interior em couro
                                                    caramelo com acabamento em fibra de carbono, Black
                                                    Piano e alumínio, teto revestido em alcantara, painel
                                                    de instrumentos em TFT, ar condicionado digital Quad
                                                    Zone, soleiras e acabamentos iluminados, cortinas
                                                    laterais e traseira elétricas, teto solar duplo,
                                                    portas Soft Close, porta malas elétrico, aerofólio
                                                    retrátil.</p>
                                            </div>

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-5  ">
                                                        <div id="carouselExampleControls "
                                                            className="carousel slide logo_marcas" data-bs-ride="carousel">
                                                            <div
                                                                className="carousel-inner carosel-modal  row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                                                                <div className="carousel-item active">

                                                                    <img src={BentleyMullinerBacalar}
                                                                        className="d-block w-100" alt="..." width="5%" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={BentleyMullinerBacalar}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={BentleyMullinerBacalar}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={BentleyMullinerBacalar}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={BentleyMullinerBacalar}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                            </div>
                                                            <button className="carousel-control-prev" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="prev">
                                                                <span className="carousel-control-prev-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="next">
                                                                <span className="carousel-control-next-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Next</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer modalfooter">
                                                <div className="row">
                                                    <div className="col-10 modal-mobily3 text-center mb-3">
                                                    <img className="logo-modal" src={LogoDevcarsModal} alt="" />
                                                    </div>
                                                    <div className="col-1 modal-mobily3">

                                                        {/* <button type="button"
                                                            className="btn btn-secondary btn-modal-footer"><Link to="/checkoutScheduling" className="nav-link text-black">Agendar
                                                                visita </Link></button> */}
                                                    <SupportButton link="/checkoutScheduling" name="AGENDAR VISITA"/>            

                                                    </div>
                                                </div>
                                            </div>

                            </div>
                        </div>
                    </div>

                    {/* Modal Card 10  */}

                    <div className="modal fade " id="modal-produto-10" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        {/* link entre Modal e Card */}
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content cores-modal">

                                <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">
                                    <h5>Bentley Continental GT3</h5>
                                    <button type="button" className="btn-close btn-modal-close fecharmodal justify-flex-end"
                                        data-bs-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-5 modal-mobily">
                                                <p> Vídeo 360° meramente ilustrativo</p>
                                                {/* <video className= "img-modal" controns autoplay playbackRate=0.1;
                                                style="max-width: 102%; padding-top: 5px;">
                                                <source src="./videos/CONTINENTAL.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video> */}

                                                <img src={BentleyContinentalGT3} className="card-img img-modal"
                                                    alt="..." />
                                            </div>

                                            <div className="col-7 modal-mobily2">
                                                <h3 className="info-gerais1">Ficha Técnica</h3>
                                                <ul className="lista-modal info-gerais2 linhas-modal">
                                                    <li>
                                                        <span>COR:</span>
                                                        <span>AZUL</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>KM:</span>
                                                        <span>31.106</span>
                                                    </li>
                                                    <li>
                                                        <span>CAMBIO:</span>
                                                        <span>PDK</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>POTENCIA:</span>
                                                        <span>350 cv + 96 cv = total de 380 cv.</span>
                                                    </li>
                                                    <li>
                                                        <span>VALOR (R$):</span>
                                                        <span>XXXXXX</span>
                                                    </li>
                                                </ul>
                                                <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                <p className="alinhamento_paragrafo  info-gerais2">Cambio PDK de 8 marchas e dupla embreagem,
                                                    tração integral,
                                                    modos E,
                                                    Híbrido, Sport e Sport Plus, eixo traseiro direcional,
                                                    controle de chassi 4D, suspensão pneumática, pacote Sport
                                                    Chrono, escapamento com seletor de ronco, carregador
                                                    universal Porsche AC com mala de transporte e suporte
                                                    de parede básico, chave Keyless, interior em couro
                                                    caramelo com acabamento em fibra de carbono, Black
                                                    Piano e alumínio, teto revestido em alcantara, painel
                                                    de instrumentos em TFT, ar condicionado digital Quad
                                                    Zone, soleiras e acabamentos iluminados, cortinas
                                                    laterais e traseira elétricas, teto solar duplo,
                                                    portas Soft Close, porta malas elétrico, aerofólio
                                                    retrátil.</p>
                                            </div>

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-5  ">
                                                        <div id="carouselExampleControls "
                                                            className="carousel slide logo_marcas" data-bs-ride="carousel">
                                                            <div
                                                                className="carousel-inner carosel-modal  row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                                                                <div className="carousel-item active">

                                                                    <img src={BentleyContinentalGT3}
                                                                        className="d-block w-100" alt="..." width="5%" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={BentleyContinentalGT3}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={BentleyContinentalGT3}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={BentleyContinentalGT3}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={BentleyContinentalGT3}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                            </div>
                                                            <button className="carousel-control-prev" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="prev">
                                                                <span className="carousel-control-prev-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="next">
                                                                <span className="carousel-control-next-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Next</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer modalfooter">
                                    <div className="row">
                                        <div className="col-10 modal-mobily3 text-center mb-1">
                                            <img className="logo-modal" src={LogoDevcarsModal} alt="" />
                                        </div>
                                        <div className="col-1 modal-mobily3">
                                            <Link to="/schedulingDetails" className="nav-link text-black">
                                                <button type="button" className="btn btn-secondary btn-modal-footer ">Agendar
                                                    visita</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Modal Card 11   */}

                    <div className="modal fade " id="modal-produto-11" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        {/* link entre Modal e Card */}
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content cores-modal">

                                <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">
                                    <h5>Ares S1</h5>
                                    <button type="button" className="btn-close btn-modal-close fecharmodal justify-flex-end"
                                        data-bs-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-5 modal-mobily">
                                                <p> Vídeo 360° meramente ilustrativo</p>
                                                {/* <video className= "img-modal" controns autoplay playbackRate=0.1;
                                                style="max-width: 102%; padding-top: 5px;">
                                                <source src="./videos/ARES.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video> */}

                                                <img src={AresS1} className="card-img img-modal"
                                                    alt="..." />
                                            </div>

                                            <div className="col-7 modal-mobily2">
                                                <h3 className="info-gerais1">Ficha Técnica</h3>
                                                <ul className="lista-modal info-gerais2 linhas-modal">
                                                    <li>
                                                        <span>COR:</span>
                                                        <span>AZUL</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>KM:</span>
                                                        <span>31.106</span>
                                                    </li>
                                                    <li>
                                                        <span>CAMBIO:</span>
                                                        <span>PDK</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>POTENCIA:</span>
                                                        <span>350 cv + 96 cv = total de 380 cv.</span>
                                                    </li>
                                                    <li>
                                                        <span>VALOR (R$):</span>
                                                        <span>XXXXXX</span>
                                                    </li>
                                                </ul>
                                                <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                <p className="alinhamento_paragrafo  info-gerais2">Cambio PDK de 8 marchas e dupla embreagem,
                                                    tração integral,
                                                    modos E,
                                                    Híbrido, Sport e Sport Plus, eixo traseiro direcional,
                                                    controle de chassi 4D, suspensão pneumática, pacote Sport
                                                    Chrono, escapamento com seletor de ronco, carregador
                                                    universal Porsche AC com mala de transporte e suporte
                                                    de parede básico, chave Keyless, interior em couro
                                                    caramelo com acabamento em fibra de carbono, Black
                                                    Piano e alumínio, teto revestido em alcantara, painel
                                                    de instrumentos em TFT, ar condicionado digital Quad
                                                    Zone, soleiras e acabamentos iluminados, cortinas
                                                    laterais e traseira elétricas, teto solar duplo,
                                                    portas Soft Close, porta malas elétrico, aerofólio
                                                    retrátil.</p>
                                            </div>

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-5  ">
                                                        <div id="carouselExampleControls "
                                                            className="carousel slide logo_marcas" data-bs-ride="carousel">
                                                            <div
                                                                className="carousel-inner carosel-modal  row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                                                                <div className="carousel-item active">

                                                                    <img src={AresS1}
                                                                        className="d-block w-100" alt="..." width="5%" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={AresS1}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={AresS1}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={AresS1}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={AresS1}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                            </div>
                                                            <button className="carousel-control-prev" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="prev">
                                                                <span className="carousel-control-prev-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="next">
                                                                <span className="carousel-control-next-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Next</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer modalfooter">
                                    <div className="row">
                                        <div className="col-10 modal-mobily3 text-center mb-1">
                                            <img className="logo-modal" src={LogoDevcarsModal} alt="" />
                                        </div>
                                        <div className="col-1 modal-mobily3">
                                            <Link to="/schedullingDetails" className="nav-link text-black">
                                                <button type="button" className="btn btn-secondary btn-modal-footer ">Agendar
                                                    visita</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Modal Card 12  */}

                    <div className="modal fade " id="modal-produto-12" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        {/* link entre Modal e Card */}
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content cores-modal">

                                <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">
                                    <h5>Lamborghini Huracan</h5>
                                    <button type="button" className="btn-close btn-modal-close fecharmodal justify-flex-end"
                                        data-bs-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-5 modal-mobily">
                                                <p> Vídeo 360° meramente ilustrativo</p>
                                                {/* <video className= "img-modal" controns autoplay playbackRate=0.1;
                                                style="max-width: 102%; padding-top: 5px;">
                                                <source src="./videos/URACAN.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video> */}

                                                <img src={LamborghiniUracan} className="card-img img-modal"
                                                    alt="..." />
                                            </div>

                                            <div className="col-7 modal-mobily2">
                                                <h3 className="info-gerais1">Ficha Técnica</h3>
                                                <ul className="lista-modal info-gerais2 linhas-modal">
                                                    <li>
                                                        <span>COR:</span>
                                                        <span>AZUL</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>KM:</span>
                                                        <span>31.106</span>
                                                    </li>
                                                    <li>
                                                        <span>CAMBIO:</span>
                                                        <span>PDK</span>
                                                    </li>
                                                    <li className="info-gerais-linhas">
                                                        <span>POTENCIA:</span>
                                                        <span>350 cv + 96 cv = total de 380 cv.</span>
                                                    </li>
                                                    <li>
                                                        <span>VALOR (R$):</span>
                                                        <span>XXXXXX</span>
                                                    </li>
                                                </ul>
                                                <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                <p className="alinhamento_paragrafo  info-gerais2">Cambio PDK de 8 marchas e dupla embreagem,
                                                    tração integral,
                                                    modos E,
                                                    Híbrido, Sport e Sport Plus, eixo traseiro direcional,
                                                    controle de chassi 4D, suspensão pneumática, pacote Sport
                                                    Chrono, escapamento com seletor de ronco, carregador
                                                    universal Porsche AC com mala de transporte e suporte
                                                    de parede básico, chave Keyless, interior em couro
                                                    caramelo com acabamento em fibra de carbono, Black
                                                    Piano e alumínio, teto revestido em alcantara, painel
                                                    de instrumentos em TFT, ar condicionado digital Quad
                                                    Zone, soleiras e acabamentos iluminados, cortinas
                                                    laterais e traseira elétricas, teto solar duplo,
                                                    portas Soft Close, porta malas elétrico, aerofólio
                                                    retrátil.</p>
                                            </div>

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-5  ">
                                                        <div id="carouselExampleControls "
                                                            className="carousel slide logo_marcas" data-bs-ride="carousel">
                                                            <div
                                                                className="carousel-inner carosel-modal  row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                                                                <div className="carousel-item active">

                                                                    <img src={LamborghiniUracan}
                                                                        className="d-block w-100" alt="..." width="5%" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={LamborghiniUracan}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={LamborghiniUracan}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={LamborghiniUracan}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src={LamborghiniUracan}
                                                                        className="d-block w-100" alt="10px" />
                                                                </div>
                                                            </div>
                                                            <button className="carousel-control-prev" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="prev">
                                                                <span className="carousel-control-prev-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next" type="button"
                                                                data-bs-target="#carouselExampleControls"
                                                                data-bs-slide="next">
                                                                <span className="carousel-control-next-icon"
                                                                    aria-hidden="true"></span>
                                                                <span className="visually-hidden">Next</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer modalfooter">
                                    <div className="row">
                                        <div className="col-10 modal-mobily3 text-center mb-1">
                                            <img className="logo-modal" src={LogoDevcarsModal} alt="" />
                                        </div>
                                        <div className="col-1 modal-mobily3">
                                            <Link to="/schedullingDetails" className="nav-link text-black">
                                                <button type="button" className="btn btn-secondary btn-modal-footer ">Agendar
                                                    visita</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* numeração das paginas  */} 
                    <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center m-2">
                        <div className="grupo-links d-inline">
                            <SupportButton link="/Cart" name="Prev" />
                            <Link to="//" className="btn btn-outline-secondary">1</Link>
                            <Link to="//" className="btn btn-outline-secondary">2</Link>
                            <Link to="//" className="btn btn-outline-secondary">3</Link>
                            <SupportButton link="/Cart" name="Next" />
                         

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Inventory