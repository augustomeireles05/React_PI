import './WishList.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
//import Header from '../../components/header/Header'
//import Footer from '../../components/footer/Footer'

function WishList() {
    return (
        <>
            {/* <Header/> */}

            <section>

                <article className="page-content">


                    {/* coluna Menu */}
                    <div className="row responsive-mobile">
                        <div className="col-3 d-md-block d-none">
                            {/*responsividade menu */}
                            <div className="column ms-4">


                                {/*Navbar*/}
                                <nav className="navbar navbar-light border-bottom-menu">
                                    <div className="container-fluid d-block text-center">
                                        <span className=" mb-0 ">MENU</span>



                                    </div>
                                </nav>

                                <div className="btn-group-vertical background-container-subject shadow" role="group"
                                    aria-label="Vertical button group">
                                    <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu">
                                        <Link className="link-solution" to="/MyData"> MEUS DADOS</Link>
                                    </button>
                                    <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu">
                                        <Link className="link-solution" to="/myOrder"> MEUS PEDIDOS</Link>
                                    </button>
                                    <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu">
                                        <Link className="link-solution" to="/cart"> CARRINHO DE COMPRA</Link>
                                    </button>
                                    {/* <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu">
                                    <Link className="link-solution" to="/WishList> MEUS FAVORITOS</Link>
                                    </button> */}
                                    <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu">
                                        <Link className="link-solution" to="/checkoutOrder"> CHECKOUT</Link >
                                    </button>
                                    <button type="button" className="btn button-menu-lateral sidebar-font border-button-sidebar-menu">
                                        <Link className="link-solution" to="/"> SAIR </Link>
                                    </button>
                                </div>

                            </div>
                        </div>
                        {/* coluna lista desejos*/}
                        <div className="col-9">
                            <div className="">
                                <div className="">
                                    <div className=" text-center title col-12 ">
                                        <span>LISTA DE DESEJOS</span>
                                    </div>
                                </div>




                                <div className="">
                                    <div className="listadesejos">

                                        <div className="row row-cols-1 row-cols-md-3 g-4 responsive-ipadPro">




                                            {/* card 1 */}
                                            <div className="col text-center">
                                                <Link to="#" className="text-decoration-none" />
                                                <div className="card h-100 mb-5">
                                                    {/* <img src="../img/Land_Rover_Evoque_HSE_Dynamic_Preta_2020_01-768x576.jpg"
                                                            className="card-img" alt="..."/> */}
                                                    <div className="card-body">
                                                        <h5 className="card-title">CHRYSLER PACIFICA XS 2019</h5>
                                                        <p className="card-text">R$579.000,00</p>
                                                        <Link className="btn-sm btn-warning mt-3 buttom-width text-decoration-none">COMPRAR</Link>
                                                                        
                                                        {/* <Link to="#" /><img src="./img/img-header/favorite.png" alt="favotirar"
                                                                    className="favoritar"/><Link />
                                                            </div> */}
                                                    </div>
                                                    <Link />
                                                </div>
                                            </div>

                                            {/* fim do card 1 */}




                                            {/* card 2 */}
                                            <div className="col text-center">
                                                <Link to="#" className="text-decoration-none" />
                                                <div className="card h-100 mb-5">
                                                    {/* <img src="../img/Land_Rover_Evoque_HSE_Dynamic_Preta_2020_01-768x576.jpg"
                                                            className="card-img" alt="..."/> */}
                                                    <div className="card-body">
                                                        <h5 className="card-title">JAQUE E-PACE P-250 2018</h5>
                                                        <p className="card-text">R$209.000,00</p>
                                                        <Link className="btn-sm btn-warning mt-3 buttom-width text-decoration-none">COMPRAR</Link>
                                                        {/* <Link to="#" /><img src="./img/img-header/favorite.png" alt="favotirar"
                                                                    className="favoritar"/><Link />
                                                            </div> */}
                                                    </div>
                                                    <Link />
                                                </div>
                                            </div>

                                            {/* fim do card 2 */}





                                            {/* card 3 */}
                                            <div className="col text-center">
                                                <Link to="#" className="text-decoration-none" />
                                                <div className="card h-100 mb-5">
                                                    {/* <img src="../img/Land_Rover_Evoque_HSE_Dynamic_Preta_2020_01-768x576.jpg"
                                                            className="card-img" alt="..."/> */}
                                                    <div className="card-body">
                                                        <h5 className="card-title">LAND ROVER EVOQUE 2020</h5>
                                                        <p className="card-text">R$399.000,00</p>
                                                        <Link className="btn-sm btn-warning mt-3 buttom-width text-decoration-none">COMPRAR</Link>
                                                        {/* <Link to="#" /><img src="./img/img-header/favorite.png" alt="favotirar"
                                                                    className="favoritar"/><Link />
                                                            </div> */}
                                                    </div>
                                                    <Link />
                                                </div>
                                            </div>

                                            {/* fim do card 3 */}

                                            {/* card 4 */}
                                            <div className="col text-center">
                                                <Link to="#" className="text-decoration-none" />
                                                <div className="card h-100 mb-5">
                                                    {/* <img src="../img/Mustang_GT_Cinza_2019_01-184x130.jpg" className="card-img"
                                                            alt="..."/> */}
                                                    <div className="card-body">
                                                        <h5 className="card-title">FORD MUSTANG GT 2020</h5>
                                                        <p className="card-text">R$425.000,00</p>
                                                        <Link className="btn-sm btn-warning mt-3 buttom-width text-decoration-none">COMPRAR</Link>
                                                        {/* <Link to="#" /><img src="./img/img-header/favorite.png" alt="favotirar"
                                                                    className="favoritar"/><Link /> */}
                                                    </div>
                                                </div>
                                                <Link />
                                            </div>
                                            {/* fim do card 4 */}


                                            {/* card 5 */}
                                            <div className="col text-center">
                                                <Link to="#" className="text-decoration-none" />
                                                <div className="card h-100 mb-5">
                                                    {/* <img src="../img/Porsche_911_Carrera_2021_giz_01-184x130.jpg"
                                                            className="card-img" alt="..."/> */}
                                                    <div className="card-body">
                                                        <h5 className="card-title">PORSCHE 911 CARRERA 2021</h5>
                                                        <p className="card-text">R$1.030.000,00</p>
                                                        <Link className="btn-sm btn-warning mt-3 buttom-width text-decoration-none">COMPRAR</Link>
                                                        {/* <Link to="#" /><img src="./img/img-header/favorite.png" alt="favotirar"
                                                                    className="favoritar"/><Link /> */}
                                                    </div>
                                                </div>
                                                <Link />
                                            </div>
                                            {/* fim do card 5 */}


                                            {/* card 6 */}
                                            <div className="col text-center">
                                                <Link to="#" className="text-decoration-none" />
                                                <div className="card h-100 mb-5">
                                                    {/* <img src="../img/Audi_A5_Sportback_Sline_2019_cinza_01-768x576.jpg"
                                                            className="card-img" alt="..."/> */}
                                                    <div className="card-body">
                                                        <h5 className="card-title">AUDI A5 SPORTBACK 2019</h5>
                                                        <p className="card-text">R$249.000,00</p>
                                                        <Link className="btn-sm btn-warning mt-3 buttom-width text-decoration-none">COMPRAR</Link>
                                                        {/* <Link to="#" /><img src="./img/img-header/favorite.png" alt="favotirar"
                                                                    className="favoritar"/><Link /> */}
                                                    </div>
                                                </div>
                                                <Link />
                                            </div>
                                            {/* fim do card 6 */}


                                            {/* card 7 */}
                                            <div className="col mb-3 text-center">
                                                <Link to="#" className="text-decoration-none" />
                                                <div className="card h-100 mb-5">
                                                    {/* <img src="../img/MercedesBenz_AMG_GT_63_S_2020_branco_01-768x576.jpg"
                                                            className="card-img" alt="..."/> */}
                                                    <div className="card-body">
                                                        <h5 className="card-title">MERCEDES-BENZ AMG GLE 63 2018</h5>
                                                        <p className="card-text">R$659.000,00</p>
                                                        <Link className="btn-sm btn-warning mt-3 buttom-width text-decoration-none">COMPRAR</Link>
                                                        {/* <Link to="#" /><img src="./img/img-header/favorite.png" alt="favotirar"
                                                                    className="favoritar"/><Link /> */}
                                                    </div>
                                                </div>
                                                <Link />
                                            </div>
                                            {/* fim do card 7 */}






                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </article>

            </section>

           {/* <Footer/>                                                              */}
        </>
    )
}

export default WishList
