import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { Routes, Route } from 'react-router-dom';

function App() {
	// this is 3
	const [mode, setmode] = useState('light');
	const [alert, setalert] = useState(null);

	const showAlert = (message, type) => {
		setalert({ msg: message, type: type });
		setTimeout(() => setalert(null), 1500);
	};

	const togglemode = () => {
		if (mode === 'light') {
			setmode('dark');
			document.body.style.backgroundColor = 'black';
			showAlert("Dark mode has been enabled", "Success");
			document.title = 'Text Utils - Dark';
		} else {
			setmode('light');
			document.body.style.backgroundColor = 'white';
			showAlert("Light mode has been enabled", "Success");
			document.title = 'Text Utils - Light';
		}
	};

	return (
		<div className="App">
			<Navbar title="Text Utilities" about="About us" mode={mode} togglemode={togglemode} />
			<Alert alert={alert} />
			<div className="container mb-3">
				{/* <Routes>
					<Route exact path="/" element={<TextForm title="Enter the text To analyze :" alerto={showAlert} mode={mode} />} />
					<Route exact path="/about" element={<About mode={mode} />} />
				</Routes> */}
				<TextForm title="Enter the text To analyze :" alerto={showAlert} mode={mode} />
			</div>
		</div>
	);
}

export default App;