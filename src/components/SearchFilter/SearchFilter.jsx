import React from 'react'


function SearchFilter() {
    return (
        <>
            <hr />
            <div className="row-cols-1 row-cols-md-12 g-4 justify-content-center mt-4 mb-5 mx-4">

                <form className=" filtro-de-busca row gx-12 align-items-center rounded p-3 mt-5 ms-0 ">
                    <legend className="text-center">ENCONTRE SEU CARRO</legend>

                    <div className="col-md-4 col-lg-3 col-12 ">
                        <select id="inputState" className="form-select bg-filter">
                            <option selected>Selecione a Marca</option>
                            <option>Ferrari</option>
                            <option>Bentley</option>
                            <option>Porsche</option>
                            <option>Ford</option>
                            <option>Audi</option>
                            <option>Mazda</option>
                            <option>Masserati</option>
                            <option>Jaguar</option>
                        </select>
                    </div>
                    <div className="col-md-4 col-lg-4 ">
                        <select id="inputState" className="form-select bg-filter">
                            <option selected>Selecione o Modelo</option>
                            <option>aaaaa</option>
                            <option>bbbbb</option>
                            <option>ccccc</option>
                            <option>ddddd</option>

                        </select>
                    </div>
                    <div className="col-md-4 col-lg-3 ">
                        <select id="inputState" className="form-select bg-filter">
                            <option selected>Selecione o Ano</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                        </select>

                    </div>

                    <button type="submit" className="btn botao-buscar col-md-12 col-lg-2 text-center btn p-0 border-none pt-2 pb-2">BUSCAR</button>

                </form>

            </div>
        </>
    )

}

export default SearchFilter