import React, { useState } from 'react';
import VisorComponent from './VisorComponent'

export default function Botoes() {
    const [input, setInput] = useState("");

    function verificaMais(input, setInput) {
        if (input.length > 0 && !(input[input.length - 1] === '+') && !(input[input.length - 1] === '-')) {
            setInput(input + '+');
        }
    }


    function verificaMenos(input, setInput) {
        if (input.length > 0 && !(input[input.length - 1] === '-') && !(input[input.length - 1] === '+')) {
            setInput(input + '-');
        }
    }

    function verificaVezes(input, setInput) {
        if (input.length > 0 && !(input[input.length - 1] === '*') && !(input[input.length - 1] === '*')) {
            setInput(input + '*');
        }
    }

    function resultado(input, setInput) {
        const resultado = eval(input)
        setInput(resultado.toString())
    }
    return (
        <>



            <div className='w-full  space-x-1  flex-col flex items-center'>
                <div className='border border-black bg-neutral-800'>
                <div className='flex  justify-center'>
                    <VisorComponent input={input} />
                </div>
                <div className='flex  flex-col items-center  p-4 '>

                    <div>
                        <button className=' text-white border border-white rounded-full  w-10 h-10' onClick={() => setInput(input + "1")}>1</button>
                        <button className=' text-white border border-white rounded-full  w-10 h-10' onClick={() => setInput(input + "2")}>2</button>
                        <button className=' text-white border border-white rounded-full  w-10 h-10' onClick={() => setInput(input + "3")}>3</button>
                    </div>
                    <div>
                        <button className=' text-white border border-white rounded-full  w-10 h-10' onClick={() => setInput(input + "4")}>4</button>
                        <button className=' text-white border border-white rounded-full  w-10 h-10' onClick={() => setInput(input + "5")}>5</button>
                        <button className=' text-white border border-white rounded-full  w-10 h-10' onClick={() => setInput(input + "6")}>6</button>
                    </div>
                    <div>
                        <button className=' text-white border border-white rounded-full  w-10 h-10' onClick={() => setInput(input + "7")}>7</button>
                        <button className=' text-white border border-white rounded-full  w-10 h-10' onClick={() => setInput(input + "8")}>8</button>
                        <button className=' text-white border border-white rounded-full  w-10 h-10' onClick={() => setInput(input + "9")}>9</button>
                    </div>
                    <div>
                        <button className=' text-white border border-white rounded-full  w-10 h-10' onClick={() => verificaMenos(input, setInput)}>-</button>
                        <button className=' text-white border border-white rounded-full  w-10 h-10' onClick={() => verificaMais(input, setInput)}>+</button>
                        <button className=' text-white border border-white rounded-full  w-10 h-10' onClick={() => verificaVezes(input, setInput)}>*</button>
                    </div>

                    <div>
                        <button className=' text-white border border-white rounded-full  w-10 h-10' onClick={() => setInput(input + "0")}>0</button>
                        <button className=' text-white border border-white rounded-full  w-10 h-10' onClick={() => resultado(input, setInput)}>=</button>
                        <button className=' text-white border border-white rounded-full  w-10 h-10' onClick={() => setInput("")}>Clear</button>
                    </div>
                </div>
                </div>
                
            </div>

        </>

    )
}