export default function Botoes() {
    return (
        <div>
            <button onClick={() => pegarClick(1)}>1</button>
            <button onClick={() => pegarClick(2)}>2</button>
            <button onClick={() => pegarClick(3)}>3</button>
            <button onClick={() => pegarClick(4)}>4</button>
            <button onClick={() => pegarClick(5)}>5</button>
            <button onClick={() => pegarClick(6)}>6</button>
            <button onClick={() => pegarClick(7)}>7</button>
            <button onClick={() => pegarClick(8)}>8</button>
            <button onClick={() => pegarClick(9)}>9</button>

            <button onClick={() => soma('+')}>+</button>
            <button onClick={() => subtra('-')}>-</button>
            <button onClick={() => resultado('=')}>=</button>
            <button onClick={() => limpa('Clear')}>Clear</button>
        </div>
    )
}

function pegarClick(numero) {
    console.log(numero)
}

function soma(funcao) {
console.log(funcao)
}

function subtra(funcao) {
    console.log(funcao)
}

function resultado(funcao) {
    console.log(funcao)
}

function limpa(funcao) {
    console.log(funcao)
}