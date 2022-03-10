import './MainTittle.css';

function MainTittle(props) {
    return (
      <>
        <div class="container titulo-pagina">
          <div class="row">
            <div class="col-12 justify-content-flex-start">
              <h1>{props.title}</h1>
            </div>
          </div>
        </div>
      </>
    );
}

export default MainTittle;