import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <>
            <header className="style-header">

                {/* INÍCIO DO ICONE MENU HAMBURGUER*/}
                <div className="icons-header">
                    <div className="icon-menu">
                        <Link className="btn btn-black" data-bs-toggle="offcanvas" to="#offcanvasExample" role="button"
                            aria-controls="offcanvasExample">
                            <img src="../imagens/menu.png" width="30" /> {/* INSERÇÃO DA IMAGEM DO MENU HAMBURGUER */}
                        </Link>

                        <div className="offcanvas offcanvas-start background-menu d-flex flex-column flex-shrink-0 p-3 text-black bg-dark"
                            tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style="width: 280px;">

                            <hr>

                                <ul className="nav nav-pills flex-column mb-auto">

                                    <li className="nav-item">
                                        <Link to={} className="nav-link active text-black bg-warning bg-gradient" aria-current="page">
                                            {/* INSERI A COR DOURADA COMO FUNDO NO NAVBAR. Verificar se está correto */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                                            </svg>
                                            <span className="font-menu">HOME</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={#} className="nav-link text-black">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                                            </svg>
                                            <span className="font-menu">SOBRE NÓS</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={#} className="nav-link text-black">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                                            </svg>
                                            <span className="font-menu">ESTOQUE</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={#} className="nav-link text-black">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                                            </svg>
                                            <span className="font-menu">CONTATO</span>
                                        </Link>
                                    </li>

                                </ul>

                                <hr>

                                    <div className="dropdown">
                                        <Link to={#} className="d-flex align-items-center text-black text-decoration-none dropdown-toggle"
                                            id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="https://github.com/mdo.png" alt="" width="32" height="32"
                                                className="rounded-circle me-2">
                                                <strong><span className="font-menu">USUÁRIO</span></strong>
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                            <li><Link className="dropdown-item" to={#}><span className="font-menu">Carrinho</span></Link></li>
                                            <li><Link className="dropdown-item" to={#}><span className="font-menu">Favoritos</span></Link></li>
                                            <li><Link className="dropdown-item" to={#}><span className="font-menu">Meus dados</span></Link></li>
                                            <li>
                                                <hr className="dropdown-divider">
                                            </li>
                                            <li><Link className="dropdown-item" to={#}><span className="font-menu">Sair</span></Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="b-example-divider"></div>

                        </div>
                    </div>
                    {/* FIM DO ICONE MENU HAMBURGUER*/}


                    {/* INÍCIO DO ICONE DA LOGO */}
                    <div className="icons-header">
                        <div className="icon-logo">
                            <Link to={#}"><img src="../imagens/logo-rev01.jpeg" width="120" /></Link>
                        </div>
                    </div>
                    {/* FIM DO ICONE DA LOGO */}

                    {/* INÍCIO DOS ÍCONES DO LADO DIREITO */}
                    <div className="icons-header right-icons-header">

                        {/* INÍCIO DO ÍCONE DE PESQUISA */}
                        <div className="icons-position-header search-icon">
                            <Link to={#}><img src="../imagens/search.png" width="30" /></Link>
                        </div>
                        {/* FIM DO ÍCONE DE PESQUISA */}

                        {/* INÍCIO DO ÍCONE DE FAVORITOS */}
                        <div className="icons-position-header favorite-icon">
                            <Link to={#}><img src="../imagens/favorite.png" width="30" /></Link>
                        </div>
                        {/* FIM DO ÍCONE DE FAVORITOS */}

                        {/* INÍCIO DO ÍCONE DE LOGIN */}
                        <div className="icons-position-header user-icon">
                            <Link to={#}><img src="../imagens/user.png" width="30" /></Link>
                        </div>
                        {/* FIM DO ÍCONE DE LOGIN */}

                        {/* INÍCIO DO ÍCONE DE CARRINHO */}
                        <div className="icons-position-header garage-icon">
                            <Link to={#}><img src="../imagens/garage-car.png" width="30" /></Link>
                        </div>
                        {/* FIM DO ÍCONE DE CARRINHO */}

                    </div>
                    {/* FIM DOS ÍCONES DO LADO DIREITO */}

            </header>

            {/* END HEADER */}
        </>
    )
}

export default Header