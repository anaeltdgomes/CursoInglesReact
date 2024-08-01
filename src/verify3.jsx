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
	answer[2] = formData.exercise2b;
	answer[3] = formData.exercise3a;
	answer[4] = formData.exercise4a;
	answer[5] = formData.exercise5a;
	answer[6] = formData.exercise6a;
	answer[7] = formData.exercise7a;
	answer[8] = formData.exercise7b;
	answer = answer.toLocaleString().toLowerCase().split(',');	// LowerCase before verification 
		
	if (answer[0] == ("has seen")) {
		correct(0);
	} else {
		errors++;
		incorrect(0); }

	if (answer[1] == ("read")) {
		correct(1);
	} else {
		errors++;
		incorrect(1); }

	if (answer[2] == ("have not read")) {
		correct(2);
	} else {
		errors++;
		incorrect(2); }

	if (answer[3] == ("had")) {
		correct(3);
	} else {
		errors++;
		incorrect(3); }

	if (answer[4] == ("have had")) {
		correct(4);
	} else {
		errors++;
		incorrect(4); }

	if (answer[5] == ("have had")) {
		correct(5);
	} else {
		errors++;
		incorrect(5); }

	if (answer[6] == ("have been practicing")) {
		correct(6);
	} else {
		errors++;
		incorrect(6); }

	if (answer[7] == ("have")) {
		correct(7);
	} else {
		errors++;
		incorrect(7); }

	if (answer[8] == ("been")) {
		correct(8);
	} else {
		errors++;
		incorrect(8); }

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
		exercise2b: "",
		exercise3a: "",
		exercise4a: "",
		exercise5a: "",
		exercise6a: "",
		exercise7a: "",
		exercise7b: ""
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
				Exemplo:<br /><br />

				We ____ (go) to the movies last night.<br />
				went
			</p>
			<br />
			<form onSubmit={handleSubmit}>

				<p><b>1.</b> Tom <label id="label0">_____</label> (see) that movie three times already.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise1a} name="exercise1a" onChange={handleChange} />
				<br /><br />

				<p><b>2.</b> I <label id="label1">_____</label> (read) yesterday's newspaper, but I <label id="label2">_____</label> (read, not) today's.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise2a} name="exercise2a" onChange={handleChange} /> : <input type="text" required value={formData.exercise2b} name="exercise2b" onChange={handleChange} />
				<br /><br />

				<p><b>3.</b> The students <label id="label3">_____</label> (have) eight exams last month.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise3a} name="exercise3a" onChange={handleChange} />
				<br /><br />

				<p><b>4.</b> The students <label id="label4">_____</label> (have) eight exams this month. [The month hasn't ended yet.]</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise4a} name="exercise4a" onChange={handleChange} />
				<br /><br />

				<p><b>5.</b> The students <label id="label5">_____</label> (have) eight exams in the last month.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise5a} name="exercise5a" onChange={handleChange} />
				<br /><br />

				<p><b>6.</b> They <label id="label6">_____</label> (practice) for the concert for over three hours now.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise6a} name="exercise6a" onChange={handleChange} />
				<br /><br />

				<p><b>7.</b> <label id="label7">_____</label> you ever <label id="label8">_____</label> (be) to a professional football game?</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise7a} name="exercise7a" onChange={handleChange} /> : <input type="text" required value={formData.exercise7b} name="exercise7b" onChange={handleChange} />
				<br /><br />

				<input type="hidden" name="hidden" value="moduleAdvancedPresentPerfectvsPastSimpleExercise1" />

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
