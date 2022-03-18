import React from 'react'
import './Contact.css'

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Label from '../../components/Input/Label';
import MainTittle from '../../components/Tittle/MainTittle.jsx';
import Subtittle from '../../components/Subtittle/Subtittle';

import DevCars from '../../assets/images/Contact/card-contato.jpeg';
import Email from '../../assets/images/Contact/e-mail.png';
import Telefone from '../../assets/images/Contact/telefone-celular 1.svg';
import Localizacao from '../../assets/images/Contact/localizacao 1.svg';


function Contact() {
    return (
        <>
        <Header />
    
            <section>
                <MainTittle tittle="Contato" />


                <article className="page-content">
                    {/* duas colunas  */}
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="column">
                                {/* LOJA  */}
                                {/* <div className="title"> */}
                                    <Subtittle menu="LOJA"/>
                                {/* </div> */}
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
                                            <img src={Localizacao} class="me-1" alt="Localização"/>
                                            Avenida Corifeu de Azevedo Marques, 3097
                                        </div>
                                        <div className="textodois">
                                            <img src={Email} class="me-1" alt="Email"/>
                                            <a href="mailto:vendas@devcars.com?subject=Compras" className="links-externos"> vendas@devcars.com</a>
                                        </div>
                                        <div className="textotres">
                                            <img src={Telefone} class="me-1" alt="Telefone"/>
                                            <a href="tel:+551137695678" className="links-externos"> (11) 3769-5678</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-card">
                                    {/* Formulário */}

                                    <div className="formulario">
                                        <p>FORMULÁRIO DE CONTATO</p>

                                        <div className="col-md-12 signin-form-contact">

                                            <Label label="Nome" for="nome"/>
                                            <Input type="text" aria-label="nome" id="nome"/>
                                            
                                
                                            <Label label="Email" for="email"/>
                                            <Input type="email" aria-label="email" id="email"/>

                                        
                                            <Label label="Telefone" for="telefone"/>
                                            <Input type="text" aria-label="telefone" id="telefone"/>
                                                
                                        
                                            <Label label="Assunto" for="assunto"/>
                                            <Input type="text" aria-label="assunto" id="assunto"/>
                                                

                                            <Label label="Mensagem" for="mensagem"/>
                                            <textarea className="form-control" rows="6" type="text" id="mensagem" aria-label="mensagem"></textarea>
                                               

                                            <div className="d-grid gap-2 col-12 mx-auto">
                                                <Button link="/" name="ENVIAR" />
                                            </div>          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="column">
                                 {/* DUVIDAS  */}
                                 <Subtittle subtitulo="DÚVIDAS FREQUENTES"/>
                                 {/* CARD PERGUNTAS  */}
                                <div className="main-card">
                                    <div className="question-perguntas">


                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingOne">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne" aria-expanded="true"
                                                        aria-controls="collapseOne">
                                                        <span className="fonte-pagina-contato">O veículo já possui revisão?</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse "
                                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p className="text-ac-body"><strong>Sim. Todos os nossos veículos passam por revisão.</strong> Nós da DevCars sempre nos preocupamos em garantir um padrão de qualidade. Prestando todos os cuidados necessários para que o seu veículo sempre esteja nos padrões.</p>
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
                                                    <p className="text-ac-body"><strong>Sim. Garantimos sempre </strong> It is shown by
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
            <Footer />
        </>
    )
}

export default Contact 