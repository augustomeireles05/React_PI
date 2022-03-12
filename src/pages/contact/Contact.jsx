import React from 'react'
import './Contact.css'

import DevCars from '../../assets/images/Contact/card-contato.jpeg'

import Email from '../../assets/images/Contact/e-mail.png'
import Telefone from '../../assets/images/Contact/telefone-celular 1.svg'
import Localizacao from '../../assets/images/Contact/localizacao 1.svg'

function Contact() {
    return (
        <>
            <section>
                {/* Primeira navbar */}
                <nav className="navbar navbar-dark bg-black">
                    <div className="container-fluid">
                        <div className="col-12 navbar-text text-center">

                            <h2 className="fonte-pagina-contato">CONTATO</h2>

                        </div>
                    </div>

                </nav>


                <article className="page-content">
                    {/* duas colunas  */}
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="column">
                                {/* LOJA  */}
                                <div className="title">
                                    <span>LOJA</span>
                                </div>
                                {/* CARROUSEL  */}
                                <div className="main-card">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={DevCars} alt=""></img>
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="carousel-caption d-none d-md-block"></div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="geral">
                                        <div className="textoum">
                                            <img src={Localizacao} class="me-1"/>
                                            Avenida Corifeu de Azevedo Marques 3097
                                        </div>
                                        <div className="textodois">
                                            <img src={Email} class="me-1"/>
                                            Vendas@devcars.com.br
                                        </div>
                                        <div className="textotres">
                                            <img src={Telefone} class="me-1"/>
                                            (11) 0000 - 0000
                                        </div>
                                    </div>
                                </div>
                                <div className="main-card">
                                    {/* Formulário */}

                                    <div className="formulario">
                                        <p>FORMULÁRIO DE CONTATO</p>

                                        <div className="col-md-12 signin-form-contact">

                                            <input className="form-control" type="text" placeholder="Nome" aria-label="nome" input example></input>
                                            <br></br>

                                            <input className="form-control" type="text" placeholder="E-mail" aria-label="email"
                                                input example></input>
                                                <br></br>

                                            <input className="form-control" type="text" placeholder="Telefone" aria-label="telefone"
                                                input example></input>
                                                <br></br>

                                            <input className="form-control" type="text" placeholder="Assunto" aria-label="assunto" input example></input>
                                                <br></br>


                                            <textarea className="form-control" rows="6" type="text" placeholder="Mensagem"
                                                aria-label="mensagem"></textarea>
                                                <br></br>


                                                {/* <div className="col text-center">
                                                    <a className="btn btn-warning mt-6 d-block float-md-end" href="#" role="button">
                                                    Enviar </a>
                                                </div>
                                                <div className="col text-center">
                                                    <button className="send" type="submit">Enviar</button>
                                                </div> */}




                                            <div className="d-grid gap-2 col-12 mx-auto">
                                                <button className="btn btn-enviar-contato" type="buttonAjuste">ENVIAR</button>

                                            </div>          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="column">
                                 {/* DUVIDAS  */}
                                <div className="title">
                                    <span>DÚVIDAS FREQUENTES</span>
                                </div>
                                 {/* CARD PERGUNTAS  */}
                                <div className="main-card">
                                    <div className="question-perguntas">


                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne" aria-expanded="true"
                                                        aria-controls="collapseOne">
                                                        <span className="fonte-pagina-contato">O veículo já possui revisão?</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse "
                                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p className="text-ac-body"><strong>This is the first item's accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classes that we
                                                        use to style each element. These classes control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. It's
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                        <span className="fonte-pagina-contato">O documento está em dia?</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse"
                                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                    <p className="text-ac-body"><strong>This is the first item's accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classes that we
                                                        use to style each element. These classes control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. It's
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree">
                                                        <span className="fonte-pagina-contato">O carro já se envolveu em algum acidente?</span>

                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body fonte-pagina-contato">
                                                    <p className="text-ac-body"><strong>This is the first item's accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classes that we
                                                        use to style each element. These classes control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. It's
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.</p>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingFour">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                        aria-expanded="false" aria-controls="collapseFour">
                                                        <span className="fonte-pagina-contato">O carro possui garantia?</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseFour" className="accordion-collapse collapse"
                                                    aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                    <p className="text-ac-body"><strong>This is the first item's accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classes that we
                                                        use to style each element. These classes control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. It's
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingFive">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                        aria-expanded="false" aria-controls="collapseFour">
                                                        <span className="fonte-pagina-contato">Alguma peça da lataria já foi retocada?</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseFive" className="accordion-collapse collapse"
                                                    aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                    <p className="text-ac-body"><strong>This is the first item's accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classes that we
                                                        use to style each element. These classes control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. It's
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.</p>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingSix">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                        aria-expanded="false" aria-controls="collapseFour">
                                                        <span className="fonte-pagina-contato">Como funciona a modalidade de entrega?</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseSix" className="accordion-collapse collapse"
                                                    aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                    <p className="text-ac-body"><strong>This is the first item's accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classes that we
                                                        use to style each element. These classes control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. It's
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Contact 