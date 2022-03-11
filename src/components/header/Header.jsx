import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <>
            {/* BEGIN HEADER */}
            <header className="style-header">

                {/* INÍCIO DO ICONE MENU HAMBURGUER*/}
                <div className="icons-header">
                    <div className="icon-menu">
                        {/*INSERÇÃO DA IMAGEM DO MENU HAMBURGUER*/}
                        <a className="btn btn-black" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            {/*<img src="./img/img-header/menu.png" width="30" />*/}
                        </a>

                        <div className="offcanvas offcanvas-start background-menu d-flex flex-column flex-shrink-0 p-3 text-black bg-dark" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{width: 280 + 'px'}}>

                            <hr/>

                            <ul className="nav nav-pills flex-column mb-auto">

                                <li>
                                    <Link to="/" className="text-black" aria-current="page">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                        d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                                        </svg>

                                        <span className="font-menu">HOME</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/aboutUs" className="text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                                        </svg>
                                        <span className="font-menu">SOBRE NÓS</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/invetory" className="text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                                        </svg>
                                        <span className="font-menu">ESTOQUE</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/contact" className="text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                                        </svg>
                                        <span className="font-menu">CONTATO</span>
                                    </Link>
                                </li>

                            </ul>

                            <hr />

                            {/*Início da div USUÁRIO*/}
                            <div className="background-user">

                                <div className="dropdown">

                                    <Link to="#" className="d-flex align-items-center text-black text-decoration-none dropdown-toggle"
                                        id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">

                                        {/*<img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>*/}
                                            <strong>
                                                <span className="font-menu">USUÁRIO</span>
                                            </strong>
                                    </Link>

                                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                        <li>
                                            <Link to="/cart" className="dropdown-item">
                                                <span className="font-menu">Carrinho</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/wishList" className="dropdown-item">
                                                <span className="font-menu">Favoritos</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/myData" className="dropdown-item">
                                                <span className="font-menu">Meus dados</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li>
                                            <Link to="/" className="dropdown-item">
                                                <span className="font-menu">Sair</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            {/*Fim da div USUÁRIO*/}
                        </div>
                    </div>
                </div>
                {/*FIM DO ICONE MENU HAMBURGUER*/}


                {/*INÍCIO DO ICONE DA LOGO*/}
                <div className="icons-header">
                    <div className="icon-logo">
                        <Link to="/">
                            {/*<img src="./img/img-header/logo-rev01.jpeg" width="120" /> */}
                        </Link>
                    </div>
                </div>
                {/*FIM DO ICONE DA LOGO*/}

                {/*INÍCIO DOS ÍCONES DO LADO DIREITO*/}
                    <div className="icons-header right-icons-header">

                        {/*INÍCIO DO ÍCONE DE PESQUISA*/}
                            <div className="icons-position-header search-icon">
                                {/*<img src="./img/img-header/search.png" className="icons-header" data-bs-toggle="modal" width="30" data-bs-target="#modalPesquisa" role="button"/>*/}
                            </div>
                        {/*FIM DO ÍCONE DE PESQUISA*/}

                        {/*INÍCIO DO ÍCONE DE FAVORITOS*/}
                            <div className="icons-position-header favorite-icon">
                                <Link to="/wishList">
                                    {/*<img src="./img/img-header/favorite.png" width="30" />*/}
                                </Link>
                            </div>
                        {/*FIM DO ÍCONE DE FAVORITOS*/}

                        {/*INÍCIO DO ÍCONE DE LOGIN*/}
                            <div className="icons-position-header user-icon">
                                <Link to="/login">
                                    {/*<img src="./img/img-header/user.png" width="30" />*/}
                                </Link>
                            </div>
                        {/*FIM DO ÍCONE DE LOGIN*/}

                        {/*INÍCIO DO ÍCONE DE CARRINHO*/}
                            <div className="icons-position-header garage-icon">
                                 <Link to="/cart">
                                    {/*<img src="./img/img-header/garage-car.png" width="30"/>*/}
                                </Link>
                            </div>
                        {/*FIM DO ÍCONE DE CARRINHO*/}

                    </div>
                {/*FIM DOS ÍCONES DO LADO DIREITO*/}

            </header>

            {/* INICIO DO MODAL PESQUISAR */}

                <div className="modal fade" id="modalPesquisa" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content p-5">
                            {/*<img src="./img/img-header/close.png" type="button" className="icon-close btn-close align-self-end" data-bs-dismiss="modal" aria-label="Close"/> */}
                            <div className="modal-header">
                                <h5 className="modal-title mx-auto text-light" id="exampleModalLabel">BUSQUE POR UM VEÍCULO</h5>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="col-form-label"></label>
                                        <input type ="search" className="form-control" id="caixa-busca"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            {/* FIM DO MODAL DE PESQUISAR */}

            {/* END HEADER */}
        </>
    )
}

export default Header