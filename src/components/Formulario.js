import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Formulario = ({ setBusqueda }) => {
  const [termino, setTermino] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    //validación del formulario
    if (termino.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setBusqueda(termino);

    // envíar el termino de busqueda al componenete proncipal
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control from-control-lg"
            placeholder="Busca una imagen, ej: Comida o Patinaje"
            onChange={(e) => setTermino(e.target.value)}
          />
        </div>
        <div className="form-group col-md-8">
          <input
            type="submit"
            className="btn btn-ls btn-danger rnt-block "
            placeholder="Buscar"
          />
        </div>
      </div>
      {error ? <Error mensaje="Agrega un termino de búsqueda" /> : null}
    </form>
  );
};
Formulario.propTypes = {
  setBusqueda: PropTypes.func.isRequired,
};
export default Formulario;
