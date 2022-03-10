import React from 'react'
import './Subtittle.css'

function Subtitle(props) {

    return (
        <>
            <nav class="navbar navbar-light border-bottom-menu titulo-menu mb-3 mt-0 pt-0 pb-2">
                <div class="container-fluid d-block text-center">
                    <span>{props.menu}</span>
                    <span>{props.order}</span>
                </div>
            </nav>
        </>
    )
}

export default Subtitle