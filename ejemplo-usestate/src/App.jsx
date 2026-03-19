import { useState } from "react";
import "./App.css";
import Boton from "./components/Boton";
import InputText from "./components/InputText";

function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    let suma = numero1 + numero2;
    setResultado(suma);
  };

  const resta = () => {
    let resta = numero1 - numero2;
    setResultado(resta);
  };

  const division = () => {
    let division = numero1 / numero2;
    setResultado(division);
  };

  const multiplicación = () => {
    let multiplicación = numero1 * numero2;
    setResultado(multiplicación);
  };

  const [tarea, setTarea] = useState("");
  const [listadoTareas, setListadoTareas] = useState([]);

  const agregarTarea = () => {
    setListadoTareas([...listadoTareas, tarea]);
    setTarea("");
  };

  const handleDelete = (index) => {
    const newArray = items.filter((item, i) => i !== index);
    setItems(newArray);
  };

  

  //Metodo filter para eliminar una tarea

  return (
    <>
      <h1>Suma de dos números usando useState</h1>
      <InputText
        texto="Numero 1"
        type="number"
        value={numero1}
        onChange={(e) => setNumero1(Number(e.target.value))}
      />
      <InputText
        texto="Numero 2"
        type="number"
        value={numero2}
        onChange={(e) => setNumero2(Number(e.target.value))}
      />
      <Boton texto="Sumar" onClick={sumar} />
      <Boton texto="Restar" onClick={resta} />
      <Boton texto="Dividir" onClick={division} />
      <Boton texto="Multiplicar" onClick={multiplicación} />
      <p>Resultado: {resultado}</p>

      <h1>TODO: listado tareas</h1>

      <InputText
        texto="Tarea"
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />
      <Boton texto="Agregar tarea" onClick={agregarTarea} />
      <ul>
        {listadoTareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
