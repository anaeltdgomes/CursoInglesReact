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
	answer = answer.toLocaleString().toLowerCase().split(',');	// LowerCase before verification 

	if ((answer[0] == "") || (answer[0] == "")) {
		correct(0);
	} else {
		errors++;
		incorrect(0);
	}

	if (answer[0] == ("will have arrived") || answer[0] == ("are going to have arrived")) {
		correct(0);
	} else {
		errors++;
		incorrect(0);
	}

	if (answer[1] == ("will have left") || answer[1] == ("is going to have left")) {
		correct(1);
	} else {
		errors++;
		incorrect(1);
	}

	if (answer[2] == ("will")) {
		correct(2);
	} else {
		errors++;
		incorrect(2);
	}

	if (answer[3] == ("have been")) {
		correct(3);
	} else {
		errors++;
		incorrect(3);
	}

	if (answer[4] == ("will not have eaten") || answer[4] == ("won't have eaten") ||
		answer[4] == ("is not going to have eaten") || answer[4] == ("isn't going to have eaten")) {
		correct(4);
	} else {
		errors++;
		incorrect(4);
	}

	if (answer[5] == ("will have made") || answer[5] == ("is going to have made")) {
		correct(5);
	} else {
		errors++;
		incorrect(5);
	}

	if (answer[6] == ("will")) {
		correct(6);
	} else {
		errors++;
		incorrect(6);
	}

	if (answer[7] == ("have printed")) {
		correct(7);
	} else {
		errors++;
		incorrect(7);
	}

	if (answer[8] == ("will have read") || answer[8] == ("am going to have read")) {
		correct(8);
	} else {
		errors++;
		incorrect(8);
	}

	if (answer[9] == ("will have bought") || answer[9] == ("are going to have bought")) {
		correct(9);
	} else {
		errors++;
		incorrect(9);
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
		exercise8a: ""
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

				I ____ (not finish) by the deadline.<br />
				will not have finished   or  won't have finished   or  am not going to have finished
			</p>
			<br />
			<form onSubmit={handleSubmit}>

				<p><b>1.</b> They <label id="label0">_____</label> (arrive) before we leave.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise1a} name="exercise1a" onChange={handleChange} />
				<br /><br />

				<p><b>2.</b> The bus <label id="label1">_____</label> (leave) by the time he arrives.</p>
				<br />
				Resposta: <input type="text" required value={formData.exercise2a} name="exercise2a" onChange={handleChange} />
				<br /><br />

				<p><b>3.</b> How long <label id="label2">_____</label> you <label id="label3">_____</label> (be) married when your son is born?</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise3a} name="exercise3a" onChange={handleChange} /> : <input type="text" required value={formData.exercise3b} name="exercise3b" onChange={handleChange} />
				<br /><br />

				<p><b>4.</b> Bob <label id="label4">_____</label> (not eat) when he leaves work.</p>
				<br />
				Resposta: <input type="text" required value={formData.exercise4a} name="exercise4a" onChange={handleChange} />
				<br /><br />

				<p><b>5.</b> My mother <label id="label5">_____</label> (make) lunch by the time we get home.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise5a} name="exercise5a" onChange={handleChange} />
				<br /><br />

				<p><b>6.</b> <label id="label6">_____</label> you <label id="label7">_____</label> (print) the project by tomorrow morning?</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise6a} name="exercise6a" onChange={handleChange} /> : <input type="text" required value={formData.exercise6b} name="exercise6b" onChange={handleChange} />
				<br /><br />

				<p><b>7.</b> By Monday morning I <label id="label8">_____</label> (read) the whole book.</p>
				<br />
				Resposta: <input type="text" required value={formData.exercise7a} name="exercise7a" onChange={handleChange} />
				<br /><br />

				<p><b>8.</b> We <label id="label9">_____</label> (buy) all the ski gear we need by this Friday.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise8a} name="exercise8a" onChange={handleChange} />
				<br /><br />

				<input type="hidden" name="hidden" value="moduleAdvancedFuturePerfectExercise1" />

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
