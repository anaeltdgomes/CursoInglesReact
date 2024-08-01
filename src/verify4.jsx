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
	answer[6] = formData.exercise5b;
	answer[7] = formData.exercise6a;
	answer[8] = formData.exercise7a;
	answer[9] = formData.exercise8a;
	answer[10] = formData.exercise8b;
	answer = answer.toLocaleString().toLowerCase().split(',');	// LowerCase before verification 
		
	if (answer[0] == ("had been")) {
		correct(0);
	} else {
		errors++;
		incorrect(0);
	}

	if (answer[1] == ("had taught")) {
		correct(1);
	} else {
		errors++;
		incorrect(1);
	}

	if (answer[2] == ("had")) {
		correct(2);
	} else {
		errors++;
		incorrect(2);
	}

	if (answer[3] == ("eaten")) {
		correct(3);
	} else {
		errors++;
		incorrect(3);
	}

	if (answer[4] == ("had not finished") || answer[4] == ("hadn't finished")) {
		correct(4);
	} else {
		errors++;
		incorrect(4);
	}

	if (answer[5] == ("had")) {
		correct(5);
	} else {
		errors++;
		incorrect(5);
	}

	if (answer[6] == ("seen")) {
		correct(6);
	} else {
		errors++;
		incorrect(6);
	}

	if (answer[7] == ("had prepared")) {
		correct(7);
	} else {
		errors++;
		incorrect(7);
	}

	if (answer[8] == ("had not done") || answer[8] == ("hadn't done")) {
		correct(8);
	} else {
		errors++;
		incorrect(8);
	}

	if (answer[9] == ("had")) {
		correct(9);
	} else {
		errors++;
		incorrect(9);
	}

	if (answer[10] == ("met")) {
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
		exercise5b: "",
		exercise6a: "",
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
				Exemplo:<br /><br />

				Alex ____ (not/travel) alone before his trip to London.<br />
				had not traveled or hadn't traveled
			</p>
			<br />
			<form onSubmit={handleSubmit}>

				<p><b>1.</b> I <label id="label0">_____</label> (be) at home all day. I had to get out and go for a walk.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise1a} name="exercise1a" onChange={handleChange} />
				<br /><br />

				<p><b>2.</b> She <label id="label1">_____</label> (teach) Shakespeare before.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise2a} name="exercise2a" onChange={handleChange} />
				<br /><br />

				<p><b>3.</b> <label id="label2">_____</label> you <label id="label3">_____</label> (eat) breakfast when you left the house?</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise3a} name="exercise3a" onChange={handleChange} /> : <input type="text" required value={formData.exercise3b} name="exercise3b" onChange={handleChange} />
				<br /><br />

				<p><b>4.</b> We <label id="label4">_____</label> (not/finish) the document when the computer crashed.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise4a} name="exercise4a" onChange={handleChange} />
				<br /><br />

				<p><b>5.</b> We <label id="label5">_____</label> never <label id="label6">_____</label> (see) a whale before our trip.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise5a} name="exercise5a" onChange={handleChange} /> : <input type="text" required value={formData.exercise5b} name="exercise5b" onChange={handleChange} />
				<br /><br />

				<p><b>6.</b> She <label id="label7">_____</label> (prepare) dinner before leaving for work that day.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise6a} name="exercise6a" onChange={handleChange} />
				<br /><br />

				<p><b>7.</b> I <label id="label8">_____</label> (not/do) all my homework when I went to class.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise7a} name="exercise7a" onChange={handleChange} />
				<br /><br />

				<p><b>8.</b> <label id="label9">_____</label> you <label id="label10">_____</label> (meet) her before?</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise8a} name="exercise8a" onChange={handleChange} /> : <input type="text" required value={formData.exercise8b} name="exercise8b" onChange={handleChange} />
				<br /><br />

				<input type="hidden" name="hidden" value="moduleAdvancedPastPerfectExercise1" />

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
