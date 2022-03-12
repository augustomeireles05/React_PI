import './Home.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import Capa1 from '../../assets/images/Home/Koenigsegg_Gemera.jpg'
import Capa2 from '../../assets/images/Home/ferarri-monza.jpg'
import Capa3 from '../../assets/images/Home/home2.jpeg'

import LogomarcaAstonMartin from '../../assets/images/Home/aston-martin.png'
import LogomarcaAudi from '../../assets/images/Home/audi.png'
import LogomarcaBMW from '../../assets/images/Home/bmw.png'
import LogomarcaBugatti from '../../assets/images/Home/bugatti.png'
import LogomarcaCrysler from '../../assets/images/Home/chrysler.png'
import LogomarcaFerrari from '../../assets/images/Home/ferrari-logo.png'
import LogomarcaFord from '../../assets/images/Home/ford.png'
import LogomarcaJaguar from '../../assets/images/Home/jaguar.png'
import LogomarcaLamborghini from '../../assets/images/Home/lamborghini.png'
import LogomarcaMclaren from '../../assets/images/Home/Mclaren.png'
import LogomarcaMercedes from '../../assets/images/Home/mercedes.png'
import LogomarcaOpel from '../../assets/images/Home/opel.png'
import LogomarcaPagani from '../../assets/images/Home/pagani.png'
import LogomarcaRollsRoyce from '../../assets/images/Home/rolls-royce.png'
import LogomarcaSubaru from '../../assets/images/Home/subaru.png'
import LogomarcaVolvo from '../../assets/images/Home/volvo.png'


import MercedesBenzAMGF12016 from '../../assets/images/Inventory/Mercedes-BenzAMG-F1-2016.jpg'
import BugattiChiron from '../../assets/images/Inventory/BugattiChiron.jpg'
import LamborghiniHuracan from '../../assets/images/Inventory/LamborghiniHuracan.jpg'

import ModalMercedesBenzAMGF12016 from '../../assets/images/Inventory/Mercedes-BenzAMG-F1-2016.jpg'


import VideoF1 from '../../assets/videos/F1.mp4'

import SSCTuatara from '../../assets/images/Home/SSC Tuatara.jpg'

function Home() {
    return (
        <>
            <Header />
            <section>
                <div className="row">
                    <div className="col-12">
                        <div id="carousel-hipercarros" className="carousel carousel-dark slide carousel-hipercarros "
                            data-bs-ride="carousel-hipercarros">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carousel-hipercarros" data-bs-slide-to="0" className="active"
                                    aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carousel-hipercarros" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carousel-hipercarros" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carousel-hipercarros" data-bs-slide-to="3"
                                    aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src={Capa1} className="d-block w-100" alt="Capa1"></img>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Koenigsegg Gemera</h5>
                                        <p>DevCar sera unica e exclusiva importadora Koenigsegg Gemera</p>
                                    </div>
                                </div>
                                <div className="carousel-item  carousel-tamanho" data-bs-interval="2000">
                                    <img src={Capa2} className="d-block w-100 stf2" alt="..."></img>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Ferrari MONZA</h5>
                                        <p> Velocidade Máx: 350 Km/h</p>
                                    </div>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                </div>
                                <div className="carousel-item">
                                    <img src={Capa1} className="d-block w-100" alt="" width="100%"></img>
                                    <div className="carousel-caption d-none d-md-block">
                                        <font color="white">
                                            <h5> Bugatti Chiron </h5>
                                            <p text="blue">Velocidade Máx: 474 km/h</p>
                                        </font>
                                    </div>
                                </div>
                                <div className="carousel-item carousel-tamanho" data-bs-interval="1000">
                                    <img src={Capa3} className="d-block w-100" alt="..." width="100%"></img>
                                    <div className="carousel-caption d-none d-md-block">
                                        <font color="white">
                                            <h5>DevCar's</h5>
                                            <p> O conceito, na sua garagem</p>
                                        </font>
                                    </div>
                                    <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                </div>

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carousel-hipercarros"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carousel-hipercarros"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="carousel-marcas" className="carousel slide logo_marcas" data-bs-ride="carousel-marcas">

                    <div className="row ">
                        <div className="col-12 ">
                            <div id="carousel-marcas" className="carousel slide logo_marcas" data-bs-ride="carousel-marcas">
                                <div className="carousel-inner">
                                    <div className="carousel-item active logo-centralizado">
                                        <img className="icons-marcas ms-2 me-4" src={LogomarcaAstonMartin} height="50px" />
                                        <img className="icons-marcas  me-4" src={LogomarcaAudi} height="50px" />
                                        <img className="icons-marcas  me-4" src={LogomarcaBMW} height="50px" />
                                        <img className="icons-marcas  me-4" src={LogomarcaBugatti} height="50px" />
                                        <img className="icons-marcas  me-4" src={LogomarcaCrysler} height="50px" />
                                        <img className="icons-marcas  me-4" src={LogomarcaFerrari} height="50px" />
                                        <img className="icons-marcas  me-4" src={LogomarcaFord} height="50px" />
                                        <img className="icons-marcas  me-4" src={LogomarcaJaguar} height="50px" />


                                    </div>
                                    <div className="carousel-item fundo-marcas logo-centralizado2  logo-centralizado">
                                        <img className="icons-marcas ms-3 me-4" src={LogomarcaLamborghini} height="50px" />
                                        <img className="icons-marcas ms-3 me-4" src={LogomarcaMclaren} height="50px" />
                                        <img className="icons-marcas ms-3 me-4" src={LogomarcaMercedes} height="50px" />
                                        <img className="icons-marcas ms-3 me-4" src={LogomarcaOpel} height="50px" />
                                        <img className="icons-marcas ms-3 me-4" src={LogomarcaPagani} height="50px" />
                                        <img className="icons-marcas ms-3 me-4" src={LogomarcaRollsRoyce} height="50px" />
                                        <img className="icons-marcas ms-3 me-4" src={LogomarcaSubaru} height="50px" />
                                        <img className="icons-marcas ms-3 me-4" src={LogomarcaVolvo} height="50px" />
                                        

                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carousel-marcas"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carousel-marcas"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>


                <hr></hr>
                <div className="row-cols-1 row-cols-md-12 g-4 justify-content-center mt-4 mx-4">

                    <form className=" filtro-de-busca row gx-12 align-items-center rounded p-3 mt-5 ms-0 ">
                        <legend className="text-center">ENCONTRE SEU CARRO</legend>

                        <div className="col-md-4 col-lg-3 col-12 ">
                            <select id="inputState" className="form-select fundo-filtro">
                                <option selected>Selecione a Marca</option>
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
                            <select id="inputState" className="form-select fundo-filtro">
                                <option selected>Selecione o Modelo</option>
                                <option>aaaaa</option>
                                <option>bbbbb</option>
                                <option>ccccc</option>
                                <option>ddddd</option>

                            </select>
                        </div>
                        <div className="col-md-4 col-lg-3 ">
                            <select id="inputState" className="form-select fundo-filtro">
                                <option selected>Selecione o Ano</option>
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
            </section>






            <div className="row ">
                <div className="row linhaDestaque">
                    <p> DESTAQUES</p>
                </div>

                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false"
                    data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">

                            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4 mx-3">
                                {/* card 1 */}
                                <div className="col text-center btn" type="button" data-bs-toggle="modal"
                                    data-bs-target="#modal-produto-1">
                                    {/* link entre Modal e Card */}
                                    <a href="#" className="text-decoration-none">
                                        <div className="card h-100 mb-5">
                                            <img src={MercedesBenzAMGF12016} className="card-img"
                                                alt="..."></img>
                                            <div className="card-body">
                                                <h5 className="card-title">Mercedes AMG F1</h5>
                                                <p className="card-text">R$19.000.000,00</p>
                                                <a className="btn mt-3 botao-buscar btn-detalhes" href="#" role="button">
                                                    DETALHES</a>
                                            </div>

                                        </div>
                                    </a>
                                </div>


                                {/* Modal */}
                                <div className="modal fade " id="modal-produto-1" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    {/* link entre Modal e Card */}
                                    <div className="modal-dialog modal-xl">
                                        <div className="modal-content cores-modal">

                                            <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">
                                                <h5>CHRYSLER PACIFICA HYBRID 2019</h5>
                                                <button type="button"
                                                    className="btn-close btn-modal-close fecharmodal justify-flex-end"
                                                    data-bs-dismiss="modal" aria-label="Close">
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-5 modal-mobily">
                                                            <p> Vídeo 360° meramente ilustrativo</p>
                                                            {/* <video className="img-modal" controns autoplay playbackRate=0.1;
                                                        style="max-width: 102%; padding-top: 5px;">
                                                        <source src="./videos/F1.mp4" type="video/mp4">
                                                        Your browser does not support the video tag.
                                                    </video> */}

                                                            <img src={ModalMercedesBenzAMGF12016}
                                                                className="card-img img-modal" alt="..."></img>
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
                                                                    <span>350 cv.</span>
                                                                </li>
                                                                <li>
                                                                    <span>VALOR (R$):</span>
                                                                    <span>XXXXXX</span>
                                                                </li>
                                                            </ul>
                                                            <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                            <p className="alinhamento_paragrafo  info-gerais2">Cambio PDK de 8
                                                                marchas e dupla embreagem, tração integral,
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
                                                                    <div id="carouselExampleControls " className="carousel slide logo_marcas"
                                                                        data-bs-ride="carousel">
                                                                        <div
                                                                            className="carousel-inner carosel-modal  row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                                                                            <div className="carousel-item active">

                                                                                <img src={ModalMercedesBenzAMGF12016}
                                                                                    className="d-block w-100" alt="..." width="5%"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={ModalMercedesBenzAMGF12016}
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={ModalMercedesBenzAMGF12016}
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={ModalMercedesBenzAMGF12016}
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={ModalMercedesBenzAMGF12016}
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
                                                        <a href="./agendamento.html" className="nav-link text-black">
                                                            <a href="./agendamento.html"><button type="button"
                                                                className="btn btn-secondary btn-modal-footer">Agendar
                                                                visita</button></a>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* fim do card 1 */}


                                {/* card 2 */}
                                <div className="col text-center btn" type="button" data-bs-toggle="modal"
                                    data-bs-target="#modal-produto-2">
                                    {/* link entre Modal e Card */}
                                    <a href="#" className="text-decoration-none">
                                        <div className="card h-100 mb-5">
                                            <img src={BugattiChiron} className="card-img" alt="..."></img>
                                            <div className="card-body">
                                                <h5 className="card-title">BUGATTI CHIRON</h5>
                                                <p className="card-text">R$21.000.000,00</p>
                                                <a className="btn mt-3 botao-buscar btn-detalhes" href="#" role="button">
                                                    DETALHES</a>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* Modal */}
                                <div className="modal fade " id="modal-produto-2" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    {/* link entre Modal e Card */}
                                    <div className="modal-dialog modal-xl">
                                        <div className="modal-content cores-modal">
                                            <div className="modal-header cores-modal">
                                                <h5 className="modal-title" id="exampleModalLabel">BUGATTI CHIRON
                                                </h5>
                                                <button type="button" className="btn-close btn-modal-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-5 modal-mobily">
                                                            <p> Vídeo 360° meramente ilustrativo</p>
                                                            {/* <video className="img-modal" controns autoplay playbackRate=0.1;
                                                        style="max-width: 102%; padding-top: 5px;">
                                                        <source src="./videos/Bugatti Chiron.mp4" type="video/mp4">
                                                        Your browser does not support the video tag.
                                                    </video> */}

                                                            <img src="./img/img-estoque/Bugatti Chiron.jpg"
                                                                className="card-img img-modal" alt="..."></img>
                                                        </div>

                                                        <div className="col-7">
                                                            <h3 className="info-gerais1">Ficha Técnica</h3>
                                                            <ul className="lista-modal info-gerais2  linhas-modal">
                                                                <li>
                                                                    <span>COR:</span>
                                                                    <span>Branco</span>
                                                                </li>
                                                                <li className="info-gerais-linhas">
                                                                    <span>KM:</span>
                                                                    <span>18.106</span>
                                                                </li>
                                                                <li>
                                                                    <span>CAMBIO:</span>
                                                                    <span>Automatico 7 velocidades</span>
                                                                </li>
                                                                <li className="info-gerais-linhas">
                                                                    <span>POTENCIA:</span>
                                                                    <span>150 cv</span>
                                                                </li>
                                                                <li>
                                                                    <span>VALOR (R$):</span>
                                                                    <span>R$209.000,00</span>
                                                                </li>
                                                            </ul>
                                                            <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                            <p className="alinhamento_paragrafo  info-gerais2">Cambio PDK de 8
                                                                marchas e dupla embreagem, tração integral,
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
                                                                <div className="col-5 ">
                                                                    <div id="carouselExampleControls"
                                                                        className="carousel slide logo_marcas"
                                                                        data-bs-ride="carousel">
                                                                        <div className="carousel-inner carosel-modal">
                                                                            <div className="carousel-item active">
                                                                                <img src="./img/img-estoque/Bugatti Chiron.jpg"
                                                                                    className="d-block w-100" alt="..." width="5%"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src="./img/img-estoque/Bugatti Chiron.jpg"
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src="../img/img-estoque/Bugatti Chiron.jpg"
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
                                                    <div className="col-10">
                                                        <img className="logo-modal" src="./img/img-header/logo-rev01.jpeg" alt=""></img>
                                                    </div>
                                                    <div className="col-1">
                                                        <a href="./agendamento.html"><button type="button"
                                                            className="btn btn-secondary btn-modal-footer">Agendar
                                                            visita</button></a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div> {/* Fim Modal */}
                                {/* fim do card 2 */}

                                {/* card 3 */}
                                <div className="col text-center btn" type="button" data-bs-toggle="modal"
                                    data-bs-target="#modal-produto-3">
                                    {/* link entre Modal e Card */}
                                    <a href="#" className="text-decoration-none">
                                        <div className="card h-100 mb-5">
                                            <img src={LamborghiniHuracan} className="card-img" alt="..."></img>
                                            <div className="card-body">
                                                <h5 className="card-title">Lamborghini Huracan</h5>
                                                <p className="card-text">R$4.300.000,00</p>
                                                <a className="btn mt-3 botao-buscar btn-detalhes" href="#" role="button">
                                                    DETALHES</a>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* Modal */}
                                <div className="modal fade " id="modal-produto-3" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    {/* link entre Modal e Card */}
                                    <div className="modal-dialog modal-xl">
                                        <div className="modal-content cores-modal">
                                            <div className="modal-header cores-modal">
                                                <h5 className="modal-title" id="exampleModalLabel">LAMBORGHINI HURACAN</h5>
                                                <button type="button" className="btn-close btn-modal-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-5 modal-mobily">
                                                            <p> Vídeo 360° meramente ilustrativo</p>
                                                            {/* <video className="img-modal" controns autoplay playbackRate="0.1" ;
                                                        style="max-width: 102%; padding-top: 5px;">
                                                        <source src="./videos/URACAN.mp4" type="video/mp4">
                                                        Your browser does not support the video tag.
                                                    </video> */}

                                                            <img src="./img/img-estoque/Lamborghini Huracan.jpg"
                                                                className="card-img img-modal" alt="..."></img>
                                                        </div>

                                                        <div className="col-7">
                                                            <h3 className="info-gerais1">Ficha Técnica</h3>
                                                            <ul className="lista-modal info-gerais2  linhas-modal">
                                                                <li>
                                                                    <span>COR:</span>
                                                                    <span>Preto</span>
                                                                </li>
                                                                <li className="info-gerais-linhas">
                                                                    <span>KM:</span>
                                                                    <span>18.106</span>
                                                                </li>
                                                                <li>
                                                                    <span>CAMBIO:</span>
                                                                    <span>Automatico 7 velocidades</span>
                                                                </li>
                                                                <li className="info-gerais-linhas">
                                                                    <span>POTENCIA:</span>
                                                                    <span>150 cv</span>
                                                                </li>
                                                                <li>
                                                                    <span>VALOR (R$):</span>
                                                                    <span>R$399.000,00</span>
                                                                </li>
                                                            </ul>
                                                            <h3>INFORMAÇÕES GERAIS</h3>
                                                            <p>Cambio PDK de 8 marchas e dupla embreagem, tração integral,
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
                                                                <div className="col-5 ">
                                                                    <div id="carouselExampleControls"
                                                                        className="carousel slide logo_marcas"
                                                                        data-bs-ride="carousel">
                                                                        <div className="carousel-inner carosel-modal">
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
                                                    <div className="col-10">
                                                        <img className="logo-modal" src="./img/img-header/logo-rev01.jpeg" alt=""></img>
                                                    </div>
                                                    <div className="col-1">
                                                        <a href="./agendamento.html"><button type="button"
                                                            className="btn btn-secondary btn-modal-footer">Agendar
                                                            visita</button></a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* fim do card 3 */}

                            </div>
                            <div className="carousel-item">
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>

                                                    

            <section>
                <div className="social">
                    <div className="row social-Texto ">
                        <h3>SSC Tuatara apresnta versao com até 2.230 cv</h3>
                        <div className="col-8 texto_midia">
                            <p>

                                O norte-americano SSC Tuatara conseguiu superar a marca de velocidade
                                do Koenigsegg Agera RS e se tornou o novo modelo de produção <strong> mais
                                    veloz do mundo.</strong> Ele alcançou uma média de 508,7 km/h em duas
                                tentativas, com uma <strong> velocidade máxima de 532,9 km/h</strong>....

                            </p>


                        </div>
                        <div className="col-4 imagens-midia">
                            <img src={SSCTuatara} alt="" width="100%"></img>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default Home