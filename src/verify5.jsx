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
	answer[7] = formData.exercise6b;
	answer[8] = formData.exercise7a;
	answer[9] = formData.exercise7b;
	answer[10] = formData.exercise8a;
	answer = answer.toLocaleString().toLowerCase().split(',');	// LowerCase before verification 
		
	if (answer[0] == ("had not been talking") || answer[0] == ("hadn't been talking")) {
		correct(0);
	} else {
		errors++;
		incorrect(0);
	}

	if (answer[1] == ("had")) {
		correct(1);
	} else {
		errors++;
		incorrect(1);
	}

	if (answer[2] == ("been researching")) {
		correct(2);
	} else {
		errors++;
		incorrect(2);
	}

	if (answer[3] == ("had known")) {
		correct(3);
	} else {
		errors++;
		incorrect(3);
	}

	if (answer[4] == ("had been living")) {
		correct(4);
	} else {
		errors++;
		incorrect(4);
	}

	if (answer[5] == ("had been working")) {
		correct(5);
	} else {
		errors++;
		incorrect(5);
	}

	if (answer[6] == ("had")) {
		correct(6);
	} else {
		errors++;
		incorrect(6);
	}

	if (answer[7] == ("been dating")) {
		correct(7);
	} else {
		errors++;
		incorrect(7);
	}

	if (answer[8] == ("had")) {
		correct(8);
	} else {
		errors++;
		incorrect(8);
	}

	if (answer[9] == ("seen")) {
		correct(9);
	} else {
		errors++;
		incorrect(9);
	}

	if (answer[10] == ("had been writing")) {
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
		exercise2b: "",
		exercise3a: "",
		exercise4a: "",
		exercise5a: "",
		exercise6a: "",
		exercise6b: "",
		exercise7a: "",
		exercise7b: "",
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

				She was excited because she ____ (plan) her trip to Italy.<br />
				had been planning
			</p>
			<br />
			<form onSubmit={handleSubmit}>

				<p><b>1.</b> They <label id="label0">_____</label> (not/talk) when the phone cut out.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise1a} name="exercise1a" onChange={handleChange} />
				<br /><br />

				<p><b>2.</b> <label id="label1">_____</label> you <label id="label2">_____</label> (research) the problem for long when you found the solution?</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise2a} name="exercise2a" onChange={handleChange} /> : <input type="text" required value={formData.exercise1a} name="exercise2b" onChange={handleChange} />
				<br /><br />

				<p><b>3.</b> Adam and Natalie <label id="label3">_____</label> (know) each other for years when they started dating.</p>
				<br />
				Resposta: <input type="text" required value={formData.exercise3a} name="exercise3a" onChange={handleChange} />
				<br /><br />

				<p><b>4.</b> I needed a change. I <label id="label4">_____</label> (live) in New York for a long time.</p>
				<br />
				Resposta: <input type="text" required value={formData.exercise4a} name="exercise4a" onChange={handleChange} />
				<br /><br />

				<p><b>5.</b> Sally <label id="label5">_____</label> (work) as a waitress for 5 years when she went back to university.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise5a} name="exercise5a" onChange={handleChange} />
				<br /><br />

				<p><b>6.</b> <label id="label6">_____</label> Toni and Julie <label id="label7">_____</label> (date) long when they broke up?</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise6a} name="exercise6a" onChange={handleChange} /> : <input type="text" required value={formData.exercise6b} name="exercise6b" onChange={handleChange} />
				<br /><br />

				<p><b>7.</b> She <label id="label8">_____</label> already <label id="label9">_____</label> (see) that film in the cinema when they watched it on DVD.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise7a} name="exercise7a" onChange={handleChange} /> : <input type="text" required value={formData.exercise7b} name="exercise7b" onChange={handleChange} />
				<br /><br />

				<p><b>8.</b> I was so frustrated. I <label id="label10">_____</label> (write) my story for 2 weeks when I lost my notebook.</p> 
				<br />
				Resposta: <input type="text" required value={formData.exercise8a} name="exercise8a" onChange={handleChange} />
				<br /><br />

				<input type="hidden" name="hidden" value="moduleAdvancedPastPerfectContinuousExercise1" />

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
