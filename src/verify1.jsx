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
	answer[1] = formData.exercise2a;
	answer[2] = formData.exercise3a;
	answer[3] = formData.exercise3b;
	answer[4] = formData.exercise4a;
	answer[5] = formData.exercise5a;
	answer[6] = formData.exercise6a;
	answer[7] = formData.exercise6b;
	answer[8] = formData.exercise7a;
	answer[9] = formData.exercise8a;
	answer[10] = formData.exercise8b;
	answer = answer.toLocaleString().toLowerCase().split(',');	// LowerCase before verification 

	if (answer[0] == ("has not studied") || answer[0] == ("hasn't studied")) {
		correct(0);
	} else {
		errors++;
		incorrect(0);
	}

	if (answer[1] == ("have lived")) {
		correct(1);
	} else {
		errors++;
		incorrect(1);
	}

	if (answer[2] == ("has")) {
		correct(2);
	} else {
		errors++;
		incorrect(2);
	}

	if (answer[3] == ("gone")) {
		correct(3);
	} else {
		errors++;
		incorrect(3);
	}

	if (answer[4] == ("have not left") || answer[4] == ("haven't left")) {
		correct(4);
	} else {
		errors++;
		incorrect(4);
	}

	if (answer[5] == ("have wanted")) {
		correct(5);
	} else {
		errors++;
		incorrect(5);
	}

	if (answer[6] == ("has")) {
		correct(6);
	} else {
		errors++;
		incorrect(6);
	}

	if (answer[7] == ("arrived")) {
		correct(7);
	} else {
		errors++;
		incorrect(7);
	}

	if (answer[8] == ("have brought")) {
		correct(8);
	} else {
		errors++;
		incorrect(8);
	}

	if (answer[9] == ("have")) {
		correct(9);
	} else {
		errors++;
		incorrect(9);
	}

	if (answer[10] == ("seen")) {
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
		exercise2a: "",
		exercise3a: "",
		exercise3b: "",
		exercise4a: "",
		exercise5a: "",
		exercise6a: "",
		exercise6b: "",
		exercise7a: "",
		exercise8a: "",
		exercise8b: ""
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

				<p>
					Exemplo:<br /><br/>

					_____ you _____ (be) to Asia?<br />
					Have        been
				</p>
				<br />
			<form onSubmit={handleSubmit}>

					<p><b>1.</b> She <label id="label0">_____</label> (not/study) for the exam.</p> 
					<br />
				Resposta: <input type="text" required name="exercise1a" value={formData.exercise1a} id="exercise1a" onChange={handleChange} />
					<br /><br />

					<p><b>2.</b> Adam and Natalie <label id="label1">_____</label> (live) together for 3 years.</p> 
					<br />
				Resposta: <input type="text" required name="exercise2a" value={formData.exercise2a} id="exercise2a" onChange={handleChange} />
					<br /><br />

					<p><b>3.</b> Where <label id="label2">_____</label> he <label id="label3">_____</label> (go)?</p> 
					<br />
				Resposta: <input type="text" required name="exercise3a" value={formData.exercise3a} id="exercise3a" onChange={handleChange} /> : <input type="text" required name="exercise3b" value={formData.exercise3b} id="exercise3b" onChange={handleChange} />
					<br /><br />

					<p><b>4.</b> We <label id="label4">_____</label> (not/leave) yet.</p> 
					<br />
				Resposta: <input type="text" required name="exercise4a" value={formData.exercise4a} id="exercise4a" onChange={handleChange} />
					<br /><br />

					<p><b>5.</b> I <label id="label5">_____</label> (want) a new car for a long time.</p> 
					<br />
				Resposta: <input type="text" required name="exercise5a" value={formData.exercise5a} id="exercise5a" onChange={handleChange} />
					<br /><br />

					<p><b>6.</b> <label id="label6">_____</label> the bus <label id="label7">_____</label> (arrive) yet?</p> 
					<br />
				Resposta: <input type="text" required name="exercise6a" value={formData.exercise6a} id="exercise6a" onChange={handleChange} /> : <input type="text" required name="exercise6b" value={formData.exercise6b} id="exercise6b" onChange={handleChange} />
					<br /><br />

					<p><b>7.</b> They <label id="label8">_____</label> (bring) their children with them.</p> 
					<br />
				Resposta: <input type="text" required name="exercise7a" value={formData.exercise7a} id="exercise7a" onChange={handleChange} />
					<br /><br />

					<p><b>8.</b> <label id="label9">_____</label> you ever <label id="label10">_____</label> (see) a shooting star?</p>
					<br />
				Resposta: <input type="text" required name="exercise8a" value={formData.exercise8a} id="exercise8a" onChange={handleChange} /> : <input type="text" required name="exercise8b" value={formData.exercise8b} id="exercise8b" onChange={handleChange} />
					<br /><br />

					<input type="hidden" name="hidden" value="moduleAdvancedPresentPerfectExercise1" />

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
