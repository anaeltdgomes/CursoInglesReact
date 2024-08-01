import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'


function correct(number) {
	document.getElementById('label' + number).style.backgroundColor = 'palegreen';
}

function incorrect(number) {
	document.getElementById('label'+number).style.backgroundColor = 'red';
}


function ValidateForm(formData, setFormData){
	let errors = 0;
	let answer = [];
	answer[0] = formData.exercise1a;
	answer[1] = formData.exercise2a;
	answer[2] = formData.exercise2b;
	answer[3] = formData.exercise3a;
	answer[4] = formData.exercise4a;
	answer[5] = formData.exercise5a;
	answer[6] = formData.exercise6a;
	answer[7] = formData.exercise6b;
	answer[8] = formData.exercise7a;
	answer[9] = formData.exercise8a;
	answer = answer.toLocaleString().toLowerCase().split(',');	// LowerCase before verification 

	if ((answer[0] == "will have been studying") || (answer[0] == "is going to have been studying")) {
		correct(0);
	} else {
		errors++;
		incorrect(0);
	}
	
	if ((answer[1] == "will") || (answer[1] == "are")) {
		correct(1);
	} else {
		errors++;
		incorrect(1);
	}

	if ((answer[2] == "have been working") || (answer[2] == "working")) {
		correct(2);
	} else {
		errors++;
		incorrect(2);
	}

	if (answer[3] == "will have been waiting" || answer[3] == "are going to have been waiting") {
		correct(3);
	} else {
		errors++;
		incorrect(3); }

	if (answer[4] == "will have been paying" || answer[4] == "are going to have been paying") {
		correct(4);
	} else {
		errors++;
		incorrect(4); }

	if (answer[5] == "will have been playing" || answer[5] == "is going to have been playing") {
		correct(5);
	} else {
		errors++;
		incorrect(5); }

	if (answer[6] == "will") {
		correct(6);
	} else {
		errors++;
		incorrect(6); }

	if (answer[7] == "have been studying") {
		correct(7);
	} else {
		errors++;
		incorrect(7); }

	if (answer[8] == "will have been dating" || answer[8] == "are going to have been dating") {
		correct(8);
	} else {
		errors++;
		incorrect(8); }

	if (answer[9] == "will not have been learning" || answer[9] == "won't have been learning" ||
		answer[9] == "is not going to have been learning" || answer[9] == "isn't going to have been") {
		correct(9);
	} else {
		errors++;
		incorrect(9); }

	var i = 0;
	answer.forEach(function() {
		document.getElementById('label' + i).innerHTML = answer[i];
		i++;
	});
		
	setFormData((prevState) => ({ ...prevState, errors }));	// Atualiza array errors do formData

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
		exercise6b: "",
		exercise7a: "",
		exercise8a: ""
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (ValidateForm(formData, setFormData)) {
			console.log("Congratulations!");
		} else {
			console.log("Has errors!");
		}
	};

	return(
	<>
<h3>Escreva a resposta correta</h3>

<p>
Exemplo:<br/><br/>

Next year, we ____ (live) in Chicago for 10 years.<br/>
will have been living  or  are going to have been living
</p>
<br/>

<form onSubmit={handleSubmit}>

<p><b>1.</b> George <label id="label0">_____</label> (study) for 6 hours by dinner time.</p>  
<br/>
	Resposta: <input type="text" required value={formData.exercise1a} name="exercise1a" onChange={handleChange} />
<br/><br/>

<p><b>2.</b> How long <label id="label1">_____</label> they <label id="label2">_____</label> (work) when the factory closes?</p>
<br/>
	Resposta: <input type="text" required value={formData.exercise2a} name="exercise2a" onChange={handleChange} /> : <input type="text" required value={formData.exercise2b} name="exercise2b" onChange={handleChange} />
<br/><br/>

<p><b>3.</b> In another 5 minutes, we <label id="label3">_____</label> (wait) for 3 hours for the tickets.</p> 
<br/>
	Resposta: <input type="text" required value={formData.exercise3a} name="exercise3a" onChange={handleChange} />
<br/><br/>

<p><b>4.</b> This June we <label id="label4">_____</label> (pay) the mortgage for 20 years.</p> 
<br/>
	Resposta: <input type="text" required value={formData.exercise4a} name="exercise4a" onChange={handleChange} />
<br/><br/>

<p><b>5.</b> He <label id="label5">_____</label> (play) football for 90 minutes when the game finishes.</p>
<br/>
	Resposta: <input type="text" required value={formData.exercise5a} name="exercise5a" onChange={handleChange} />
<br/><br/>

<p><b>6.</b> <label id="label6">_____</label> you <label id="label7">_____</label> (study) long when we meet this afternoon?</p> 
<br/>
	Resposta: <input type="text" required value={formData.exercise6a} name="exercise6a" onChange={handleChange} /> : <input type="text" required value={formData.exercise6b} name="exercise6b" onChange={handleChange} />
<br/><br/>

<p><b>7.</b> Next Saturday they <label id="label8">_____</label> (date) for 1 year.</p> 
<br/>
	Resposta: <input type="text" required value={formData.exercise7a} name="exercise7a" onChange={handleChange} />
<br/><br/>

<p><b>8.</b> Jim <label id="label9">_____</label> (not/learn) English long when he goes to England.</p> 
<br/>
	Resposta: <input type="text" required value={formData.exercise8a} name="exercise8a" onChange={handleChange} />
<br/><br/>

	<input type="hidden" name="hidden" value="moduleAdvancedFuturePerfectContinuousExercise1" />

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
