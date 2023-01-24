import "./App.css";
import calculadoraLogo from "./images/calculadora-logo.png";
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
	const [input, setInput] = useState("");

	const agregarInput = (val) => {
		setInput(input + val);
	};

	const calcularResultado = () => {
		if (input) {
			setInput(evaluate(input));
		} else {
			alert("Por favor ingrese valores para realizar los cálculos.");
		}
	};

	return (
		<div className="App">
			<div className="logo-contenedor">
				<img src={calculadoraLogo} className="logo" alt="Logo" />
			</div>
			<div className="contenedor-calculadora">
				<Pantalla input={input} />
				<div className="fila">
					<Boton manejarClic={agregarInput}>1</Boton>
					<Boton manejarClic={agregarInput}>2</Boton>
					<Boton manejarClic={agregarInput}>3</Boton>
					<Boton manejarClic={agregarInput}>+</Boton>
				</div>
				<div className="fila">
					<Boton manejarClic={agregarInput}>4</Boton>
					<Boton manejarClic={agregarInput}>5</Boton>
					<Boton manejarClic={agregarInput}>6</Boton>
					<Boton manejarClic={agregarInput}>-</Boton>
				</div>
				<div className="fila">
					<Boton manejarClic={agregarInput}>7</Boton>
					<Boton manejarClic={agregarInput}>8</Boton>
					<Boton manejarClic={agregarInput}>9</Boton>
					<Boton manejarClic={agregarInput}>*</Boton>
				</div>
				<div className="fila">
					<Boton manejarClic={calcularResultado}>=</Boton>
					<Boton manejarClic={agregarInput}>0</Boton>
					<Boton manejarClic={agregarInput}>.</Boton>
					<Boton manejarClic={agregarInput}>/</Boton>
				</div>
				<div className="fila">
					<BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
				</div>
			</div>
		</div>
	);
}

export default App;
