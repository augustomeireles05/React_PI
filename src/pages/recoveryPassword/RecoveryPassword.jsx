import { Link } from 'react-router-dom'
import './RecoveryPassword.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/Button/Button'


function RecoveryPassword() {
    return (
        <>
            
            <Header />
            {/* BEGIN MAIN */}

            <div className="background-recuperarsenha p-3">
                <div className="container d-flex justify-content-center background-recuperarsenha">
                    {/* Begin container from Recuperar Senha */}
                    <div className="col-12 col-md-8 col-lg-4 d-flex justify-content-center shadow shadow-container mt-5 mb-5 p-3 background-container-recuperarsenha">
                        <form className="col-12 col-md-6 col-lg-10 px-2">
                            <div className="text-center mb-4">
                                <h3 className="font-title-recuperarsenha">Recuperar Senha</h3>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12 w-100" data-validate="Valid email is required: ex@abc.xyz">
                                <label className="label font-login font-recuperarsenha">Insira uma nova senha</label>
                                <input className="w-100 mb-2" type="text" name="password" /> {/* TEM QUE TER REQUIRED */}
                            </div>
                            <div className="col-12 col-md-12 col-lg-12 w-100" data-validate="Password is required">
                                <label className="label font-login font-recuperarsenha">Cofirme sua nova senha</label>
                                <input className="w-100 mb-4" type="text" name="password" /> {/* TEM QUE TER REQUIRED */}
                            </div>
                            <div className="button-recuperarsenha">
                                <Link  to="/login">
                                    {/* <button className="btn w-100" type="button">
                                        Restaurar
                                    </button> */}
                                    
                                <Button link=""  name="Restaurar" />
                                </Link>
                            </div>
                        </form>
                    </div>
                    {/* End container from Recuperar Senha */}
                </div>
            </div>
            {/* END MAIN */}

            <Footer />
        </>
    )
}

export default RecoveryPassword