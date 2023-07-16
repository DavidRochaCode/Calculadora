import React, { useState } from 'react';
import './App.css';

function App() {
  const [resultado, setResultado] = useState('');
  const [memoria, setMemoria] = useState(0); // Inicializa a memória como zero
  const [mPlusAtivo, setMPlusAtivo] = useState(false); // Controla a cor do botão "M+"

  const handleClick = (e) => {
    const valor = e.target.name;

    if (valor === 'MC') {
      setMemoria(0); // Reseta a memória para zero
      setMPlusAtivo(false); // Define o botão "M+" como não ativo e remove a cor ativa do botão "M+"
    } else if (valor === 'MR') {
      setResultado(memoria.toString()); // Define o valor da memória como resultado
    } else if (valor === 'M-') {
      if (resultado !== '') {
        setMemoria((prevMemoria) => prevMemoria - parseFloat(resultado)); // Subtrai o valor atual da memória
      }
    } else if (valor === 'M+') {
      if (resultado !== '') {
        setMemoria((prevMemoria) => prevMemoria + parseFloat(resultado)); // Adiciona o valor atual à memória
        setMPlusAtivo(true); // Define o botão "M+" como ativo
      }
    } else {
      setResultado(resultado.concat(valor));
    }
  };

  const clear = () => {
    setResultado('');
  };

  const backspace = () => {
    setResultado(resultado.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResultado(eval(resultado).toString()); // Avalia a expressão matemática e define o resultado
    } catch (err) {
      setResultado('Erro');
    }
  };

  return (
    <>
      <div className='container'>
        <form>
          <input type='text' value={resultado} />
        </form>
        <div className='teclado'>
          <button className="highlight" onClick={clear} id="clear">CE</button>
          <button className="highlight" onClick={backspace} id="backspace">C</button>
          <button className="highlight" name="/" onClick={handleClick}>&divide;</button>

          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className="highlight" name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className="highlight"  name="+" onClick={handleClick}>+</button> {/* Adiciona a classe "ativo" quando mPlusAtivo é verdadeiro */}
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button className='func' name="MC" onClick={handleClick}>MC</button> {/* Limpa a memória */}
          <button className='func' name="MR" onClick={handleClick}>MR</button> {/* Recupera o valor da memória */}
          <button className='func' name="M-" onClick={handleClick}>M-</button> {/* Subtrai o valor atual da memória */}
          <button className={`${mPlusAtivo ? 'ativo' : ''}`} name="M+" onClick={handleClick}>M+</button> {/* Adiciona o valor atual à memória */}
          <button className="highlight" onClick={calculate} id="result">=</button>
        </div>
      </div>
    </>
  );
}



// A fazer: 

//adicionar uma animação ao clicar nos botões.
// adicionar o "m" no input, caso não conseguir, mudar a cor do botão M+
//mudar a cor do background para preto


export default App;
