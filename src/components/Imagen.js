import React from "react";
import PropTypes from "prop-types";

const Imagen = ({ imagen }) => {
  // extraer las variables
  const { largeImageURL, likes, previewURL, tags, views } = imagen;
  return (
    <div className="col-12 col-sm col-md-4 col-lg-3 mb-4">
      <img src={previewURL} alt={tags} className="card-img-top" />
      <div className="card-body">
        <p className="card-text">{likes} Me gustas</p>
        <p className="card-text">{views} vistas</p>
      </div>
      <div className="card-footer"></div>
      <a
        href={largeImageURL}
        target="_black"
        rel="noopener noreferrer"
        className="btn btn-primary btn-block"
      >
        ver imagen
      </a>
    </div>
  );
};
Imagen.propTypes = {
  imagen: PropTypes.object.isRequired,
};
export default Imagen;
