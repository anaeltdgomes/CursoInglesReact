import React from 'react'
import ReactDOM from 'react-dom/client'

function ShowExplanation1() {
    document.querySelector('.moduleExplanation').style.display = 'none';
    document.getElementById('modulesContainer').style.display = 'none';
    document.getElementById('moduleAdvancedExplanation1').style.display = 'block';
}

function ShowExplanation2() {
    document.querySelector('.moduleExplanation').style.display = 'none';
    document.getElementById('modulesContainer').style.display = 'none';
    document.getElementById('moduleAdvancedExplanation2').style.display = 'block';
}

function ShowExplanation3() {
    document.querySelector('.moduleExplanation').style.display = 'none';
    document.getElementById('modulesContainer').style.display = 'none';
    document.getElementById('moduleAdvancedExplanation3').style.display = 'block';
}

function ShowExplanation4() {
    document.querySelector('.moduleExplanation').style.display = 'none';
    document.getElementById('modulesContainer').style.display = 'none';
    document.getElementById('moduleAdvancedExplanation4').style.display = 'block';
}

function ShowExplanation5() {
    document.querySelector('.moduleExplanation').style.display = 'none';
    document.getElementById('modulesContainer').style.display = 'none';
    document.getElementById('moduleAdvancedExplanation5').style.display = 'block';
}

function ShowExplanation6() {
    document.querySelector('.moduleExplanation').style.display = 'none';
    document.getElementById('modulesContainer').style.display = 'none';
    document.getElementById('moduleAdvancedExplanation6').style.display = 'block';
}

function ShowExplanation7() {
    document.querySelector('.moduleExplanation').style.display = 'none';
    document.getElementById('modulesContainer').style.display = 'none';
    document.getElementById('moduleAdvancedExplanation7').style.display = 'block';
}

function App() {

    return (
        <>
            <dl>
                <dt><button className="blueOptionBtn" id="moduleAdvanced1Btn" onClick={ShowExplanation1}>Módulo 1 - Presente perfeito</button></dt>
                    <dd>
                        <br />
                        Em geral, o presente perfeito é uma mistura do presente e do passado. É usado para ações do passado que têm significado no presente.
                    </dd>
                
                <dt><button className="blueOptionBtn" id="moduleAdvanced2Btn" onClick={ShowExplanation2}>Módulo 2 - Presente Perfeito Contínuo</button></dt>
                    <dd>
                        <br />
                        O presente perfeito contínuo é usado para ações ou eventos que começaram no passado e continuam no presente.
                    </dd>
                
                <dt><button className="blueOptionBtn" id="moduleAdvanced3Btn" onClick={ShowExplanation3}>Módulo 3 - Presente Perfeito vs. Passado Simples</button></dt>
                    <dd>
                         <br />
                         O passado simples é usado para ações ou eventos que terminaram no passado, incluindo o passado recente. O presente perfeito é usado para ações ou eventos relacionados ao presente.
                    </dd>
                <dt><button className="blueOptionBtn" id="moduleAdvanced4Btn" onClick={ShowExplanation4}>Módulo 4 - Passado Perfeito</button></dt>
                    <dd>
                          <br />
                          O passado perfeito é usado para ações ou eventos que aconteceram no passado antes de outra ação ou evento no passado.
                    </dd>
                <dt><button className="blueOptionBtn" id="moduleAdvanced5Btn" onClick={ShowExplanation5}>Módulo 5 - Passado Perfeito Contínuo</button></dt>
                    <dd>
                          <br />
                          O passado perfeito contínuo é usado para ações ou eventos que estavam em andamento no passado antes de outra ação ou evento ocorrer.
                    </dd>
                <dt><button className="blueOptionBtn" id="moduleAdvanced6Btn" onClick={ShowExplanation6}>Módulo 6 - Futuro Perfeito</button></dt>
                    <dd>
                          <br />
                          Existem duas maneiras de expressar o futuro em inglês, em contraste com o futuro simples, no futuro perfeito simples o uso das duas formas diferentes é geralmente intercambiável.
                    </dd>

                <dt><button className="blueOptionBtn" id="moduleAdvanced7Btn" onClick={ShowExplanation7}>Módulo 7 - Futuro Perfeito Contínuo</button></dt>
                      <dd>
                          <br />
                          O tempo verbal que corresponde a uma ação na qual estará ocorrendo no futuro. Além disso, é usado também para expressar suposições sobre fatos que ainda vão acontecer.
                      </dd>

            </dl>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('modulesContainer')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
