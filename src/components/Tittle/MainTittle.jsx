import './MainTittle.css';

function MainTittle(props) {
    return (
      <>
        <div className="container titulo-pagina">
          <div className="row">
            <div className="col-12 justify-content-flex-start">
              <h1>{props.title}</h1>
            </div>
          </div>
        </div>
      </>
    );
}

export default MainTittle;