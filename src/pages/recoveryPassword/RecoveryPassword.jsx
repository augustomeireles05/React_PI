import { Link } from 'react-router-dom'
import './RecoveryPassword.css'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Label from '../../components/Input/Label'

function RecoveryPassword() {
    return (
        <>

            <Header />
            {/* BEGIN MAIN */}

            <div className="background-recuperarsenha p-3">
                <div className="container d-flex justify-content-center background-recuperarsenha">
                    {/* Begin container from Recuperar Senha */}
                    <div className="col-12 col-md-9 col-lg-4 d-flex justify-content-center shadow shadow-container mt-5 mb-5 p-3 background-container-recuperarsenha">
                        <form className="col-12 col-md-8 col-lg-10 px-2">
                            <div className="text-center mb-4">
                                <h3 className="font-title-recuperarsenha fs-4">Recuperar Senha</h3>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12 w-100" data-validate="Valid email is required: ex@abc.xyz">
                                <Input type="password" aria-label="password" />
                                <Label label="Insira uma nova senha"/>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12 w-100" data-validate="Password is required">
                                <Input type="password" aria-label="password" />
                                <Label label="Confirme sua nova senha"/>

                            </div>
                            <div className="button-recuperarsenha">
                                <Link to="/login">
                                    <Button link="" name="Restaurar" />
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