import './Cart.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'



import imgCarrinho from '../../assets/images/Cart/monza.jpg'





function Cart() {
  
    return (
        <>

            <Header/>

            {/* BEGIN TITULO PAGINA */}

            {/* BEGIN CONTAINER PRINCIPAL */}
            <main className="background-grey mt-0 mb-0">
                <div
                    className="col-10 col-md-10 col-lg-10 col-xl-10 d-flex justify-content-center pt-2 borda container mb-2 background-main">
                    <div className="col-0 col-lg-2 borda1 container-sidebar-menu me-3 background-grey">

                        {/* INICIO DO CONTAINER LADO ESQUERDO */}
                        <div className="bd-example d-flex justify-content-center flex-column background-grey mb-3">

                            <div className="me-3">
                                <h4 className="fw-normal mb-0 text-black sidebar-font">Menu</h4>
                            </div>

                            <hr />

                            <div className="btn-group-vertical background-container-subject me-3 shadow" role="group"
                                aria-label="Vertical button group">
                                <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><Link
                                    className="link-solution" to="/myData" >MEUS DADOS</Link></button>
                                <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><Link
                                    className="link-solution" to="/myOrder">MEUS PEDIDOS</Link></button>
                                <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><Link
                                    className="link-solution" to="/cart">CARRINHO DE COMPRA</Link></button>
                                <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><Link
                                    className="link-solution" to="/wishList">MEUS FAVORITOS</Link></button>
                                <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><Link
                                    className="link-solution" to="/checkoutOrder">CHECKOUT</Link></button>
                                <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu"><Link
                                    className="link-solution" to="/">SAIR</Link></button>
                            </div>
                        </div>
                        {/* FIM DO CONTAINER LADO ESQUERDO */}
                    </div>

                    {/* INICIO DO CONTAINER LADO DIREITO */}
                    <div className=" col-12 col-md-10 borda2 mb-2">
                        <div>
                            <h4 className="fw-normal mb-0 text-black sidebar-font title-right-side">Carrinho de compra</h4>
                            <hr />
                        </div>

                        {/* INICIO DO CONTEUDO DO CONTAINER LADO DIREITO -- AQUI PODE SER INSERIDA UMA DIV NO LUGAR DA TAG P */}

                        {/* Início do Card 01 */}
                        <div className="card rounded-3 mb-4 shadow p-3 bg-body rounded">
                            <div className="card-body p-4 justify-content-around">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                        <img src={imgCarrinho} className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-3 texto-alinhado">
                                        <p className="lead fw-normal mb-2  text-shopping-cart fs-4">CARRO #01</p>
                                        <p className="resume-shopping-cart fs-6 text-center">
                                            Resumo do produto 01
                                        </p>
                                    </div>
                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 p-0 text-center">
                                        <h5 className="mb-0 text-shopping-cart"><span className="price-car fs-6">R$ 400.149,99</span></h5>
                                    </div>
                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end trash-position">
                                        <Link to="#!" className="text-danger">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                                className="bi bi-trash trash-position" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path fillRule="evenodd"
                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                            </div>


                        </div>
                        {/* Fim do Card 01 */}

                        <div className="card-body d-md-flex justify-content-md-end px-0">
                            {/* <Link to="/checkoutOrder"><button type="button"
                                className="btn button-continuar btn-block btn-lg btn-continue">Continue</button></Link> */}
                                <Button link="/checkoutOrder" name="Continue"/>
                                
                        </div>



                    </div>



                    {/* Início do card Código de Continuar */}

                </div>





                {/* FIM DO CONTEUDO DO CONTAINER LADO DIREITO */}

            </main>

            
             < Footer/>
        </>

    )
}

export default Cart