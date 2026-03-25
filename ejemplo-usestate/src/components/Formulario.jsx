import React from "react";

const FormularioEstudiante = ({
  nombre,
  edad,
  carnet,
  setNombre,
  setEdad,
  setCarnet,
  agregarEstudiante
}) => {
  return (
    <div>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div>
        <label>Edad</label>
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>

      <div>
        <label>Carnet</label>
        <input
          type="text"
          value={carnet}
          onChange={(e) => setCarnet(e.target.value)}
        />
      </div>

      <button onClick={agregarEstudiante}>Agregar</button>
    </div>
  );
};

export default FormularioEstudiante;