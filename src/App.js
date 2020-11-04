import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";
function App() {
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  useEffect(() => {
    const consultarAPI = async () => {
      if (busqueda === "") return;
      const imagenesPagina = 30;
      const key = "18983671-00a643a31d9826f3b83991f40";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPagina}&page=${paginaActual}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setImagenes(resultado.hits);
      //se obtiene el total de paginas
      const totalPaginas = Math.ceil(resultado.totalHits / imagenesPagina);
      setTotalPaginas(totalPaginas);
      //mover pantalla arriba
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    consultarAPI();
  }, [busqueda, paginaActual]);

  //permite navegar entre las paginas anteriores
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;
    setPaginaActual(nuevaPaginaActual);
  };
  //permite navegar entre las paginas siguientes
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;
    setPaginaActual(nuevaPaginaActual);
  };
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Formulario setBusqueda={setBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />
        {paginaActual <= 1 ? null : (
          <button
            type="button"
            className="bnt btn-info mr-1"
            onClick={paginaAnterior}
          >
            &laquo; Anterior
          </button>
        )}
        {paginaActual >= totalPaginas ? null : (
          <button
            type="button"
            className="bnt btn-info mr-1"
            onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
