import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'


function correct(number) {
	document.getElementById('label' + number).style.backgroundColor = 'palegreen';
}

function incorrect(number) {
	document.getElementById('label'+number).style.backgroundColor = 'red';
}


function ValidateForm(formData){
	let errors = 0;
	let answer = [];
	answer[0] = formData.exercise1a;
	answer[1] = formData.exercise1b;
	answer[2] = formData.exercise2a;
	answer[3] = formData.exercise3a;
	answer[4] = formData.exercise3b;
	answer[5] = formData.exercise4a;
	answer[6] = formData.exercise5a;
	answer[7] = formData.exercise5b;
	answer[8] = formData.exercise6a;
	answer[9] = formData.exercise6b;
	answer[10] = formData.exercise7a;
	answer = answer.toLocaleString().toLowerCase().split(',');	// LowerCase before verification 

	if (answer[0] == ("have")) {
		correct(0);
	} else {
		errors++;
		incorrect(0);
	}

	if (answer[1] == ("been playing")) {
		correct(1);
	} else {
		errors++;
		incorrect(1);
	}

	if (answer[2] == ("has not been practicing") || answer[2] == ("hasn't been practicing")) {
		correct(2);
	} else {
		errors++;
		incorrect(2);
	}

	if (answer[3] == ("have")) {
		correct(3);
	} else {
		errors++;
		incorrect(3);
	}

	if (answer[4] == ("been doing")) {
		correct(4);
	} else {
		errors++;
		incorrect(4);
	}

	if (answer[5] == ("have liked")) {
		correct(5);
	} else {
		errors++;
		incorrect(5);
	}

	if (answer[6] == ("have")) {
		correct(6);
	} else {
		errors++;
		incorrect(6);
	}

	if (answer[7] == ("been learning")) {
		correct(7);
	} else {
		errors++;
		incorrect(7);
	}

	if (answer[8] == ("have")) {
		correct(8);
	} else {
		errors++;
		incorrect(8);
	}

	if (answer[9] == ("been waiting")) {
		correct(9);
	} else {
		errors++;
		incorrect(9);
	}

	if (answer[10] == ("have been watching")) {
		correct(10);
	} else {
		errors++;
		incorrect(10);
	}

	var i = 0;
	answer.forEach(function() {
		document.getElementById('label' + i).innerHTML = answer[i];
		i++;
	});
		
	return errors == 0;	// Return true if there are no errors
}


function Verify() {
	const [formData, setFormData] = useState({
		exercise1a: "",
		exercise1b: "",
		exercise2a: "",
		exercise3a: "",
		exercise3b: "",
		exercise4a: "",
		exercise5a: "",
		exercise5b: "",
		exercise6a: "",
		exercise6b: "",
		exercise7a: ""
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (ValidateForm(formData)) {
			console.log("Congratulations!");
		} else {
			console.log("Has errors!");
		}
	};

	return(
	<>
			<h3>Escreva a resposta correta</h3>

			<p><br />
				Exemplo:<br /><br />

				I ____ (live) in Spain for 3 years now.<br />
				have been living
			</p>
			<br />
			<form onSubmit={handleSubmit}>

				<p><b>1.</b> <label id="label0">_____</label> you <label id="label1">_____</label> (play) guitar much recently?</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise1a} name="exercise1a" onChange={handleChange} /> : <input type="text" required value={formData.exercise1b} name="exercise1b" onChange={handleChange} />
				<br /><br />

				<p><b>2.</b> Steve <label id="label2">_____</label> (not/practice) enough lately.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise2a} name="exercise2a" onChange={handleChange} />
				<br /><br />

				<p><b>3.</b> What <label id="label3">_____</label> they <label id="label4">_____</label> (do) lately?</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise3a} name="exercise3a" onChange={handleChange} /> : <input type="text" required value={formData.exercise3b} name="exercise3b" onChange={handleChange} />
				<br /><br />

				<p><b>4.</b> I <label id="label5">_____</label> (like) seafood since I first tried it.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise4a} name="exercise4a" onChange={handleChange} />
				<br /><br />

				<p><b>5.</b> What <label id="label6">_____</label> you <label id="label7">_____</label> (learn) in English class these days?</p>
				<br />
				Resposta: <input type="text" required value={formData.exercise5a} name="exercise5a" onChange={handleChange} /> : <input type="text" required value={formData.exercise5b} name="exercise5b" onChange={handleChange} />
				<br /><br />

				<p><b>6.</b> Sorry I'm late. <label id="label8">_____</label> you <label id="label9">_____</label> (wait) long?</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise6a} name="exercise6a" onChange={handleChange} /> : <input type="text" required value={formData.exercise6b} name="exercise6b" onChange={handleChange} />
				<br /><br />

				<p><b>7.</b> The kids <label id="label10">_____</label> (watch) television since 3 o'clock!</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise7a} name="exercise7a" onChange={handleChange} />
				<br /><br />

				<input type="hidden" name="hidden" value="moduleAdvancedPresentPerfectContinuousExercise1" />

				<input type="submit" value="Enviar" className="blueOptionBtn" />
			</form>
	</>
	)
}

ReactDOM.createRoot(document.querySelector('.exerciseConteiner')).render(
	<React.StrictMode>
		<Verify />
	</React.StrictMode>
)
