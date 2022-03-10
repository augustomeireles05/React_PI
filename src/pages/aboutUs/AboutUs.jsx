import './AboutUs.css';

import React from 'react';

import Tittle from '../../components/Tittle/MainTittle';

function AboutUs() {

    return(
        <>
            <Tittle tittle="Sobre Nós"/>
            <div className="container">
                {/* A EMPRESA */}
                    <div className="container">
                        <div className="row social">
                            <div className="col-6 sobre_nos ">
                                <h3 className="texto-sobre-nos">A Empresa</h3>
                                <p className="texto-sobre-nos">
                                        Fundada com o conceito de atender um nicho de mercado de carros exclusivos e top de linha,
                                        a DevCar's Automóveis abastecem todo o Brasil com a linha
                                        de automóveis multimarcas nacionais e importados, novos e semi-novos
                                        e veículos na linha Premium, verificados e certificados com estoque 
                                        em constante renovação e excluisividade. Oferecem garantia de fábrica 
                                        de todos os veículos novos.
                                </p>
                            </div>
                            <div className="col-6 sobre_nos1_img">
                                {/*  <img src="./img/imagens_sobre_nos/SobreNos-1.jpg" alt="" width="100%" /> */}
                            </div>
                        </div>
                    </div>
                    <hr/>

                    {/* Nossa Historia */}
                    <div className="container">
                        <div className="row social">                
                            <div className="col-6 sobre_nos">
                                {/*  <img src="./img/imagens_sobre_nos/SobreNos-2.jpg" alt="" width="100%" /> */}
                            </div>
                            <div className="col-6 sobre_nos1_img texto-sobre-nos">
                                <h3>A Nossa História</h3>
                                <p className="texto-sobre-nos">
                                        A DevCar's originou-se atraves do programna QUERO SER DEV 7ºedit um projeto integrador formador de Desenvolvedores de 
                                        sistemas, da RaiaDrogasil<br/><br/>
                                        Composta por:
                                </p>
                                <p className="texto-sobre-nos">
                                        Augusto Meireles, Larissa Bandeira, Lidia Maciel, Guilherme Viana e Wanderson Thiers.
                                </p> 
                            </div>
                        </div>
                    </div>
                    <hr/>
                    {/* Missao */}
                    <div className="container">
                        <div className="row social">
                            <div className="col-6 sobre_nos">
                                <h3 className= "texto-sobre-nos">Missão</h3>
                                <p className= "texto-sobre-nos">
                                        Ser uma organização, capaz de realizar conexão com o desejo e 
                                        satisfação do cliente. Onde em cada venda possamos fazer parte 
                                        do sonho do consumidor, do colaborador e do fornecedor.
                                </p>
                            </div>
                            <div className="col-6 sobre_nos1_img">
                                {/*  <img src="./img/imagens_sobre_nos/SobreNos-3.jpg" alt="" width="100%" /> */}
                            </div>
                        </div>
                    </div>   
                <hr/>     
            </div>
            {/* Nossa Historia */}
            <div className="container">
                <div className="row social">                
                    <div className="col-6 sobre_nos">
                        {/*  <img src="./img/imagens_sobre_nos/Helicoptero.jpg" alt="" width="100%" /> */}
                    </div>
                    <div className="col-6 sobre_nos1_img texto-sobre-nos">
                        <h3>Conforto e Praticidade</h3>
                        <p className="texto-sobre-nos">
                            A DevCar's disponibiliza de um equipado e sofisticado heliponto,
                            Trazendo maior comodidade e agilidade a nossos clientes
                        </p>                    
                        <p> Endereço: Avenida Corifeu de Azevedo Marques, 3097 </p>
                        <p> Bairro: Vila Butantã </p>
                        <p> CEP: 05339-900</p>
                        <p> <strong> Latitude: -23.5698526</strong> </p>
                        <p> <strong>Longitude: -46.7413329</strong></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;