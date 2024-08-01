

function gotoModule() {
	location.href = 'html/module.html';
}

export default function App() {
  return (
    <>
          <br />
          <h1>Curso de Inglês</h1>
          <h3>Avançado</h3>
          <button id="btnGradient" onClick={gotoModule}>Iniciar Curso</button>
    </>
  )

}

