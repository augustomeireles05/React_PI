import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Bugatti from '../../assets/images/Login/login.jpg';

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Login() {
    return (
        <>
            <Header />
            <section className="ftco-section background-section pt-4 pb-4">
                <div className="col-10 col-md-8 col-lg-6 container shadow shadow-container px-0">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5 d-flex justify-content-center ">
                            <h2 className="heading-section font-login-title pt-4">LOGIN</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center px-0 mx-0 pb-3">
                        <div className="col-md-12 col-lg-12">
                            <div className="container-md wrap d-md-flex d-flex justify-content-between">

                                <div className="img col-md-6 imagem-login">
                                    {/* <img src={Bugatti} alt="Login" class="w-100"/> */}
                                </div>

                                <div className="login-wrap p-md-2 col-12 col-md-6 ">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="w-100 justify-content-center">
                                            <h3 className="mb-4 main-font-login text-center">Entrar</h3>
                                        </div>
                                        <div className="w-100">
                                            <p className="social-media d-flex justify-content-end">
                                                <Link to="#"
                                                    className="social-icon d-flex align-items-center justify-content-center"><span
                                                        className="fa fa-facebook"></span></Link>
                                                <Link to="#"
                                                    className="social-icon d-flex align-items-center justify-content-center"><span
                                                        className="fa fa-twitter"></span></Link>
                                            </p>
                                        </div>
                                    </div>
                                    <form action="#" className="signin-form">
                                        <div className="form-group mb-3">
                                            <label className="label font-login" htmlFor="name">Login</label>
                                            <input type="text" className="form-control font-login-input" placeholder="usuario@exemplo.com"
                                                required></input>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="label font-login" htmlFor="password">Senha</label>
                                            <input type="password" className="form-control font-login-input" required></input>
                                        </div>
                                        <div className="form-group button-entrar-login">
                                            <button type="submit" className="form-control btn rounded submit px-3 font-login">
                                                Entrar
                                            </button>
                                        </div>
                                        <div className="col-12 row form-group d-md-flex pt-3 mx-0 text-center">
                                            <div className="col-6 d-flex justify-content-center align-items-center">
                                                <label className="checkbox-wrap checkbox-secondary mb-0 me-2 font-login">Lembrar-me</label>
                                                    <input type="checkbox" defaultChecked class="check"></input>
                                                
                                            </div>
                                            <div className="col-6 flex-center input-layout">
                                                <Link to="/recoveryPassword" className="font-login link-color">Esqueci minha senha</Link>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="text-center pt-3 font-login">Não é um membro?</p>
                                        <div className="text-center input-layout "><Link data-toggle="tab" to="/register" className="link-color">Cadastre-se</Link>
                                        </div>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Login