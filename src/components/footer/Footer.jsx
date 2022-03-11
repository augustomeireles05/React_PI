import './Footer.css'

import { Link } from 'react-router-dom';

import Facebook from '../../images/Footer/facebook.png';
import Twitter from '../../images/Footer/twitter.png';
import Instagram from '../../images/Footer/instagram.png';
import Linkedin from '../../images/Footer/linkedin.png';
import Youtube from '../../images/Footer/youtube.png';

import Visa from '../../images/Footer/visa.png';
import Mastercard from '../../images/Footer/mastercard.png';
import Hipercard from '../../images/Footer/hipercard.png';
import Elo from '../../images/Footer/elo.png';
import Apple from '../../images/Footer/apple-pay (1).png';
import Boleto from '../../images/Footer/codigo-de-barras.png';


function Footer() {
    return (
      <>
        <footer>
          {" "}
          {/*Começo Footer */}
          <div className="container mb-5 pt-3 ">
            {" "}
            {/*Começo Redes Sociais */}
            <div className="row justify-content-center responsive-social-media">
              <div className="col-md-1">
                {" "}
                {/*Icon Facebook */}
                <Link to="#" target="_blank">
                  <img src={Facebook} width="30" height="30" />
                </Link>
              </div>
              <div className="col-md-1">
                {" "}
                {/*Icon Twitter */}
                <Link to="#" target="_blank">
                  <img src={Twitter} width="30" height="30" />
                </Link>
              </div>
              <div className="col-md-1">
                {" "}
                {/*Icon Instagram */}
                <Link to="#" target="_blank">
                  <img src={Instagram} width="30" height="30" />
                </Link>
              </div>
              <div className="col-md-1">
                {" "}
                {/*Icon Linkedin */}
                <Link to="#" target="_blank">
                  <img src={Linkedin} width="30" height="30" />
                </Link>
              </div>
              <div className="col-md-1">
                {" "}
                {/*Icon YouTube */}
                <Link to="#" target="_blank">
                  <img src={Youtube} width="30" height="30" />
                </Link>
              </div>
            </div>
          </div>{" "}
          {/*Fim Redes Sociais */}
          <div className="container">
            {" "}
            {/*Começo Container Texto */}
            <div className="row gy-5 text-start d-flex justify-content-center ms-3 responsive-footer">
              {/*  row-cols-4 py-4 my-5  */}
              <div className="col-md-3">
                {" "}
                {/*Começo Institucional */}
                <h5>INSTITUCIONAL</h5>
                <br />
                <ul className="nav flex-column text-start">
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      target="_blank"
                    >
                      SOBRE NÓS
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      target="_blank"
                    >
                      TRABALHE CONOSCO
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      target="_blank"
                    >
                      INVESTIDORES
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      target="_blank"
                    >
                      POLÍTICA DE PRIVACIDADE
                    </Link>
                  </li>
                </ul>
              </div>{" "}
              {/*Fim Institucional */}
              <div className="col-md-3">
                {" "}
                {/*Começo Contato */}
                <h5>CONTATO</h5>
                <br />
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      target="_blank"
                    >
                      TELEFONE: (11) 5555-5555
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      target="_blank"
                    >
                      WHATSAPP: (11) 9 5555-5555
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      target="_blank"
                    >
                      OUVIDORIA: 0800 555 5555
                    </Link>
                  </li>
                </ul>
              </div>{" "}
              {/*Fim Contato */}
              <div className="col-md-3">
                {" "}
                {/*Começo Atendimento */}
                <h5>ATENDIMENTO</h5>
                <br />
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      target="_blank"
                    >
                      AGENDAMENTO DE VISITAS
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      target="_blank"
                    >
                      CENTRAL DE ATENDIMENTO
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      target="_blank"
                    >
                      COMO COMPRAR NO SITE
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      target="_blank"
                    >
                      PRAZOS DE ENTREGA
                    </Link>
                  </li>
                </ul>
              </div>{" "}
              {/*Fim Atendimento */}
              <div className="col-md-3">
                {" "}
                {/*Começo Minha Conta */}
                <h5>MINHA CONTA</h5>
                <br />
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      target="_blank"
                    >
                      ALTERAR DADOS PESSOAIS
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      target="_blank"
                    >
                      EDITAR ENDEREÇOS
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      target="_blank"
                    >
                      ACOMPANHAR UM PEDIDO
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      target="_blank"
                    >
                      CRIAR UM CADASTRO
                    </Link>
                  </li>
                </ul>
              </div>{" "}
              {/*Fim Minha Conta */}
            </div>
          </div>
          <div className="formas-pagamento text-center">
            {" "}
            {/*Começo Gaveta Formas de Pagamento */}
            <details>
              <summary>formas de pagamento</summary>
              <ul>
                <li>
                  <img src={Visa} alt="Visa" width="60" height="50" />{" "}
                  {/* Icon Visa */}
                </li>
                <li>
                  <img
                    src={Mastercard}
                    alt="MasterCard"
                    width="60"
                    height="50"
                  />{" "}
                  {/* Icon Mastercard */}
                </li>
                <li>
                  <img src={Hipercard} alt="HiperCard" width="60" height="50" />{" "}
                  {/* Icon Hipercard */}
                </li>
                <li>
                  <img src={Elo} alt="Elo" width="60" height="50" />{" "}
                  {/* Icon Elo */}
                </li>
                <li>
                  <img src={Apple} alt="Maestro" width="60" height="50" />{" "}
                  {/* Icon ApplePay */}
                </li>
                <li>
                  <img src={Boleto} alt="boleto" width="50" />{" "}
                  {/* Icon Boleto */}
                </li>
              </ul>
            </details>
          </div>{" "}
          {/*Fim Gaveta Formas de Pagamento */}
          <div className="text-center p-2">
            {" "}
            {/*Começo Copyright */}© 2021-2022 DEV CARS AUTOMOBILES.
          </div>{" "}
          {/*Fim Copyright */}
        </footer>
      </>
    );
}

export default Footer