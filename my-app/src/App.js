import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
	const [mode, setmode] = useState('light');
	const [alert, setalert] = useState(null);

	const showAlert = (message, type) => {
		setalert({ msg: message, type: type });
		setTimeout(() => setalert(null), 1500);
	};

	const togglemode = (cls) => {
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
		<div className="App" style={{
			transform: 'scale(0.8)',
			transformOrigin: 'top left',
			width: '125%',
			position: 'absolute',
			top: 0,
			left: 0,
			margin: 0,
			padding: 0,
		}}
		>
			<Navbar title="Text Utilities" about="About us" mode={mode} togglemode={togglemode} />
			<Alert alert={alert} />
			<div className="container mb-3">
				<TextForm title="Enter the text To analyze :" alerto={showAlert} mode={mode} />
			</div>
		</div>
	);
}

export default App;