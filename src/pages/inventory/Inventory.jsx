import React from 'react'
import { Link } from 'react-router-dom';
import './Inventory.css'

function Inventory() {
    return (
        <>
            <hr></hr>
            <div className="container">
                <div className="row-cols-1 row-cols-md-12 g-4 justify-content-center mt-4">

                    <form className=" filtro-de-busca row gx-12 align-items-center rounded p-3 mt-5 ">
                        <legend className="text-center">ENCONTRE SEU CARRO</legend>

                        <div className="col-md-4 col-lg-3 col-12">
                            <select id="inputState" className="form-select fundo-filtro marca">
                                <option defaultValue>Selecione a Marca</option>
                                <option>Ferrari</option>
                                <option>Bentley</option>
                                <option>Porsche</option>
                                <option>Ford</option>
                                <option>Audi</option>
                                <option>Mazda</option>
                                <option>Masserati</option>
                                <option>Jaguar</option>
                            </select>
                        </div>
                        <div className="col-md-4 col-lg-4 ">
                            <select id="inputState" className="form-select fundo-filtro modelo">
                                <option defaultValue>Selecione o Modelo</option>
                                <option>aaaaa</option>
                                <option>bbbbb</option>
                                <option>ccccc</option>
                                <option>ddddd</option>

                            </select>
                        </div>
                        <div className="col-md-4 col-lg-3 ">
                            <select id="inputState" className="form-select fundo-filtro ano">
                                <option defaultValue>Selecione o Ano</option>
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                            </select>

                        </div>

                        <div className="botao-buscar col-md-12 col-lg-2 text-center btn p-0">
                            <button type="submit" className="btn botao-buscar-home">BUSCAR</button>
                        </div>

                    </form>
                </div>



                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                    {/* Inicio dos Cards */}
                    {/* card 1 */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-1">
                        {/* link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src="./img/img-estoque/Lamborghini Urus.jpg" className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Lamborghini Urus </h5>
                                    <p className="card-text"><strong> R$ 3.000.000,00</strong></p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <div className="btn mt-3 btn_buscar btn-detalhes" role="button">VER DETALHES</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-2">
                        {/* link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src="./img/img-estoque/Bugatti Chiron.jpg" className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Bugatti Chiron</h5>
                                    <p className="card-text"><strong> R$ 21.000.000,00 </strong></p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-3">
                        {/* link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src="./img/img-estoque/Nissan_GT-R.jpg" className="card-img" alt="..." ></img>
                                <div className="card-body">
                                    <h5 className="card-title">NissanGT-R</h5>
                                    <p className="card-text"><strong> R$ 769.109,00 </strong></p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <div className="btn  mt-3 btn_buscar" role="button">VER DETALHES</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-4">
                        {/* link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src="./img/img-estoque/Mercedes-Benz Classe S (V223).jpg" className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Mercedes-Benz Classe S (V223)</h5>
                                    <p className="card-text">R$ 641.000,00</p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 5 */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-5">
                        {/* link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src="./img/img-estoque/Mercedes-Benz Classe G (W463).jpg" className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Mercedes-Benz Classe G (W463) AMG</h5>
                                    <p className="card-text"><strong> R$ 2.200.000,00 </strong></p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div>
                                </div>
                            </div>
                        </div>
                    </div>{/* card 6 */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-6">
                        {/* link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src="./img/img-estoque/Mercedes-Benz AMG GT R.jpg" className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Mercedes-Benz AMG GT R</h5>
                                    <p className="card-text">R$2.200.000,00</p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 7 */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-7">
                        {/* link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src="./img/img-estoque/Aston Martin DB11.jpg" className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Aston Martin DB11</h5>
                                    <p className="card-text"> <strong> R$ 3.000.000,00 </strong></p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  card 8  */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-8">
                        {/*link entre Modal e Card */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src="./img/img-estoque/Mercedes-Benz AMG F1 2016.jpg" className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Mercedes-Benz AMG F1 2016</h5>
                                    <p className="card-text"><strong> R$ 19.000.000,00 </strong></p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  card 9  */}
                    <div className="col text-center btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-produto-9">
                        {/* link entre Modal e Card  */}
                        <div className="text-decoration-none">
                            <div className="card h-100 mb-5">
                                <img src="./img/img-estoque/Bentley Mulliner Bacalar.jpg" className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Bentley Mulliner Bacalar</h5>
                                    <p className="card-text"><strong> R$ 1.350.000,00 </strong></p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div>
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
                                <img src="./img/img-estoque/Bentley Continental GT3.jpg" className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Bentley Continental GT3</h5>
                                    <p className="card-text"><strong> R$ 1.950.000,00 </strong></p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div>
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
                                <img src="./img/img-estoque/Ares S1.jpg" className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Ares S1</h5>
                                    <p className="card-text"><strong> R$ 7.100.000,00 </strong></p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <div  className="btn mt-3 btn_buscar" role="button">VER DETALHES</div>
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
                                <img src="./img/img-estoque/Lamborghini Huracan.jpg" className="card-img" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Lamborghini Huracan </h5>
                                    <p className="card-text"><strong> R$ 4.300.000,00 </strong></p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                    <div className="btn mt-3 btn_buscar" role="button">VER DETALHES</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Inicio dos modais */}

                    {/*  Modal Card 1  */}
                    <div className="modal fade " id="modal-produto-1" tabIndex="-1" aria-labelledby="exampleModalLabel"
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

                                                <img src="./img/img-estoque/Lamborghini Urus.jpg" className="card-img img-modal"
                                                    alt="..."></img>
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

                                                                    <img src="./img/img-estoque/Lamborghini Urus.jpg"
                                                                        className="d-block w-100" alt="..." width="5%"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Lamborghini Urus.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Lamborghini Urus.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Lamborghini Urus.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Lamborghini Urus.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
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
                                        <div className="col-10 modal-mobily3">
                                            <img className="logo-modal" src="./img/img-header/logo-rev01.jpeg" alt=""></img>
                                        </div>
                                        <div className="col-12 col-md-1 modal-mobily3">
                                            <Link to="" className="nav-link text-black">
                                                <button type="button" className="btn btn-secondary btn-modal-footer ">
                                                    Agendar visita
                                                </button>
                                            </Link>
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

                                                <img src="./img/img-estoque/Bugatti Chiron.jpg" className="card-img img-modal"
                                                    alt="..."></img>
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
                                                <div className="row ">
                                                    <div className="col-5  ">
                                                        <div id="carouselExampleControls "
                                                            className="carousel slide logo_marcas" data-bs-ride="carousel">
                                                            <div
                                                                className="carousel-inner carosel-modal  row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                                                                <div className="carousel-item active">

                                                                    <img src="./img/img-estoque/Bugatti Chiron.jpg"
                                                                        className="d-block w-100" alt="..." width="5%"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Bugatti Chiron.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Bugatti Chiron.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Bugatti Chiron.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Bugatti Chiron.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
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
                                        <div className="col-10 modal-mobily3">
                                            <img className="logo-modal" src="./img/img-header/logo-rev01.jpeg" alt=""></img>
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

                                                <img src="./img/img-estoque/Nissan_GT-R.jpg" className="card-img img-modal"
                                                    alt="..."></img>
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

                                                                    <img src="./img/img-estoque/Nissan_GT-R.jpg"
                                                                        className="d-block w-100" alt="..." width="5%"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Nissan_GT-R.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Nissan_GT-R.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Nissan_GT-R.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Nissan_GT-R.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
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
                                        <div className="col-10 modal-mobily3">
                                            <img className="logo-modal" src="./img/img-header/logo-rev01.jpeg" alt=""></img>
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

                                                <img src="./img/img-estoque/Mercedes-Benz Classe S (V223).jpg" className="card-img img-modal"
                                                    alt="..."></img>
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

                                                                    <img src="./img/img-estoque/Mercedes-Benz Classe S (V223).jpg"
                                                                        className="d-block w-100" alt="..." width="5%"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz Classe S (V223).jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz Classe S (V223).jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz Classe S (V223).jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz Classe S (V223).jpg"
                                                                        className="d-block w-100" alt="10px"></img>
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
                                        <div className="col-10 modal-mobily3">
                                            <img className="logo-modal" src="./img/img-header/logo-rev01.jpeg" alt=""></img>
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

                                                <img src="./img/img-estoque/Mercedes-Benz Classe G (W463).jpg" className="card-img img-modal"
                                                    alt="..."></img>
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

                                                                    <img src="./img/img-estoque/Mercedes-Benz Classe G (W463).jpg"
                                                                        className="d-block w-100" alt="..." width="5%"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz Classe G (W463).jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz Classe G (W463).jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz Classe G (W463).jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz Classe G (W463).jpg"
                                                                        className="d-block w-100" alt="10px"></img>
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
                                        <div className="col-10 modal-mobily3">
                                            <img className="logo-modal" src="./img/img-header/logo-rev01.jpeg" alt=""></img>
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

                                                <img src="./img/img-estoque/Mercedes-Benz AMG GT R.jpg" className="card-img img-modal"
                                                    alt="..."></img>
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

                                                                    <img src="./img/img-estoque/Mercedes-Benz AMG GT R.jpg"
                                                                        className="d-block w-100" alt="..." width="5%"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz AMG GT R.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz AMG GT R.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz AMG GT R.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz AMG GT R.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
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
                                        <div className="col-10 modal-mobily3">
                                            <img className="logo-modal" src="./img/img-header/logo-rev01.jpeg" alt=""></img>
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

                                                <img src="./img/img-estoque/Aston Martin DB11.jpg" className="card-img img-modal"
                                                    alt="..."></img>
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

                                                                    <img src="./img/img-estoque/Aston Martin DB11.jpg"
                                                                        className="d-block w-100" alt="..." width="5%"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Aston Martin DB11.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Aston Martin DB11.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Aston Martin DB11.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Aston Martin DB11.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
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
                                        <div className="col-10 modal-mobily3">
                                            <img className="logo-modal" src="./img/img-header/logo-rev01.jpeg" alt=""></img>
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

                                                <img src="./img/img-estoque/Mercedes-Benz AMG F1 2016.jpg" className="card-img img-modal"
                                                    alt="..."></img>
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

                                                                    <img src="./img/img-estoque/Mercedes-Benz AMG F1 2016.jpg"
                                                                        className="d-block w-100" alt="..." width="5%"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz AMG F1 2016.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz AMG F1 2016.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz AMG F1 2016.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Mercedes-Benz AMG F1 2016.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
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
                                        <div className="col-10 modal-mobily3">
                                            <img className="logo-modal" src="./img/img-header/logo-rev01.jpeg" alt=""></img>
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

                                                <img src="./img/img-estoque/Bentley Mulliner Bacalar.jpg" className="card-img img-modal"
                                                    alt="..."></img>
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

                                                                    <img src="./img/img-estoque/Bentley Mulliner Bacalar.jpg"
                                                                        className="d-block w-100" alt="..." width="5%"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Bentley Mulliner Bacalar.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Bentley Mulliner Bacalar.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Bentley Mulliner Bacalar.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Bentley Mulliner Bacalar.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
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
                                        <div className="col-10 modal-mobily3">
                                            <img className="logo-modal" src="./img/img-header/logo-rev01.jpeg" alt=""></img>
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

                                                <img src="./img/img-estoque/Bentley Continental GT3.jpg" className="card-img img-modal"
                                                    alt="..."></img>
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

                                                                    <img src="./img/img-estoque/Bentley Continental GT3.jpg"
                                                                        className="d-block w-100" alt="..." width="5%"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Bentley Continental GT3.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Bentley Continental GT3.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Bentley Continental GT3.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Bentley Continental GT3.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
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
                                        <div className="col-10 modal-mobily3">
                                            <img className="logo-modal" src="./img/img-header/logo-rev01.jpeg" alt=""></img>
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

                                                <img src="./img/img-estoque/Ares S1.jpg" className="card-img img-modal"
                                                    alt="..."></img>
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

                                                                    <img src="./img/img-estoque/Ares S1.jpg"
                                                                        className="d-block w-100" alt="..." width="5%"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Ares S1.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Ares S1.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Ares S1.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Ares S1.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
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
                                        <div className="col-10 modal-mobily3">
                                            <img className="logo-modal" src="./img/img-header/logo-rev01.jpeg" alt=""></img>
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

                                                <img src="./img/img-estoque/Lamborghini Huracan.jpg" className="card-img img-modal"
                                                    alt="..."></img>
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

                                                                    <img src="./img/img-estoque/Lamborghini Huracan.jpg"
                                                                        className="d-block w-100" alt="..." width="5%"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Lamborghini Huracan.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Lamborghini Huracan.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Lamborghini Huracan.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="./img/img-estoque/Lamborghini Huracan.jpg"
                                                                        className="d-block w-100" alt="10px"></img>
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
                                        <div className="col-10 modal-mobily3">
                                            <img className="logo-modal" src="./img/img-header/logo-rev01.jpeg" alt=""></img>
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
                    <div className="row text-center m-2">
                        <div className="grupo-links">
                            <Link to=" " className="btn btn-outline-secondary m-3"></Link>
                            <Link to="" className="btn btn-outline-secondary">1</Link>
                            <Link to="" className="btn btn-outline-secondary">2</Link>
                            <Link to="" className="btn btn-outline-secondary">3</Link>
                            <Link to=" " className="btn btn-outline-secondary m-3"></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inventory